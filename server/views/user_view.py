from models import db, User
from flask import request, jsonify, Blueprint
from werkzeug.security import generate_password_hash
from flask_jwt_extended import  jwt_required, get_jwt_identity

user_bp = Blueprint('user_bp', __name__)

#add users
@user_bp.route("/users", methods=["POST"])
def add_users():
    try:
        data= request.get_json()

        required_fields=["username", "email", "password"]
        for field in required_fields:
            if field not in data:
                return jsonify({"message": f"{field} is required"}), 400
            
        existing_user=User.query.filter((User.username == data["username"])| (User.email == data["email"])).first()
        if existing_user:
            return jsonify({"message":"Username or email already exists"}),400
        
        hashed_password=generate_password_hash(data["password"])

        new_user= User(
            username=data['username'],
            email=data["email"],
            password=hashed_password,
            profile_img=data.get("profile_img", ""),
            contact_info=data.get("contact_info", ""),
            first_name=data.get("first_name", ""),
            last_name=data.get("last_name", "")
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User added succcesfully"}),201
    except Exception as e:
        print(str(e))
        return jsonify({"message":"Internal Server Error"})
    

#fetch all users
@user_bp.route("/users", methods=["GET"])
def get_users():
    users=[user.to_dict() for user in db.session.query(User).all()]
    return jsonify(users),200

#fetch single user
@user_bp.route('/users/<int:id>')
def get_user(id):
    user= User.query.get(id)
    if user:
        return jsonify(user.to_dict()),200
    else:
        return jsonify({"message": "User not found"}), 404

#update user
@user_bp.route("/users/<int:id>", methods=['PUT'])
@jwt_required()
def update_user(id):
    current_user_id= get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message":"Unauthorized"}),401
    
    user=User.query.get(id)
    if not user:
        return jsonify({"message":"User not found"}),404
    
    data=request.get_json()
    if 'password' in data:
        data['passwaord']= generate_password_hash(data['password'])

    for key, value in data.items():
        setattr(user,key,value)
    db.session.commit()

    return jsonify({"message":"User update succesfully"}),200

#delete user
@user_bp.route("/users/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_user(id):
    current_user_id= get_jwt_identity()
    if current_user_id != id:
        return jsonify({"message":"Unauthorized"}),401
    
    user=User.query.get(id)
    if not user:
        return jsonify({"message":"User not found"}),404
    
    db.session.delete(user)
    db.session.commit()

    return jsonify({"message":"User deleted succesfully"}), 200
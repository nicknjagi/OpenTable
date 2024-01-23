from models import db, User
from flask import request, jsonify, Blueprint
from werkzeug.security import generate_password_hash
from flask_jwt_extended import  jwt_required, get_jwt_identity

user_bp = Blueprint('user_bp', __name__)

#add users
@user_bp.route("/users", methods=["POST"])
def add_users():
    pass

#fetch all users
@user_bp.route("/users", methods=["GET"])
def get_users():
    users=[user.to_dict() for user in db.session.query(User).all()]
    return jsonify(users),200

#fetch single user
@user_bp.route('/users/<int:id>')
def get_user(user_id):
    pass

#update user
@user_bp.route("/users/edit", methods=['PUT'])
def update_user():
    pass

#delete user
@user_bp.route("/users", methods=["DELETE"])
def delete_user():
    pass

from models import db, Restaurant
from flask import request, jsonify, Blueprint

restaurant_bp = Blueprint('restaurant_bp', __name__)
#fetch alll restaurants
@restaurant_bp.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    restaurants = [restaurant.to_dict() for restaurant in db.session.query(Restaurant).all()]
    print (restaurants)
    return jsonify(restaurants), 200
    
@restaurant_bp.route('/restaurants/<int:id>', methods=['GET'])
def get_restaurant(id):
    restaurant = db.session.query(Restaurant).filter_by(id=id).first()
    print(restaurant)
    if restaurant:
        return jsonify(restaurant.to_dict()), 200
    else:
        return jsonify({"error": "Restaurant not found"}), 404

#add a new restaurant
@restaurant_bp.route('/restaurants', methods=['POST'])
def add_restaurant():
    data = request.get_json()
    name = data.get("name")
    location = data.get("location")
    phone_no = data.get("phone_no")
    description = data.get("description")
    restaurant_img = data.get("restaurant_img")
    capacity = int(data.get("rating"))
    owner_id = int(data.get("owner_id"))

    check_name = Restaurant.query.filter_by(name=name).first()
    

    if check_name :
        return jsonify({"error": "Sorry. Restaurant name is already taken !! :("})

    else:
        new_restaurant = Restaurant(name=name, location=location, phone_no=phone_no, description=description, restaurant_img=restaurant_img, capacity=capacity, owner_id=owner_id)
        db.session.add(new_restaurant)
        db.session.commit()
        return jsonify({"success": "Restaurant added successfully!"}), 201
    
@restaurant_bp.route('/restaurants/<int:id>', methods =['DELETE'])
def delete_restaurant(id):
    restaurant = db.session.query(Restaurant).filter_by(id=id).first()
    if restaurant:
        db.session.delete(restaurant)
        db.session.commit()
        return jsonify({"message":"Successfully deleted the restaurant."}),200
    else:
        return jsonify({"error":"The restaurant with given ID doesnot exist."}),404
    
@restaurant_bp.route('/restaurants/<int:id>', methods=['PUT'])
def update_restaurant(id):
    restaurant = Restaurant.query.filter_by(id=id).first()
    if not restaurant:
        return jsonify({'error':'Invalid restaurant id.'}),404
    if restaurant:
        data = request.get_json()

        # Retrieve values from data dictionary
        name = data.get('name')
        phone_no = data.get('phone_no')
        restaurant_img = data.get('restaurant_img')
        description = data.get('description')
        location = data.get('location')
        capacity = data.get('capacity')
        owner_id = data.get('owner_id')

        check_name = Restaurant.query.filter_by(name=name).first()

        if check_name:
            return jsonify({"error": "Restaurant name already exists !"})
        
        else:
            # Update the restaurant attributes
            restaurant.name = name
            restaurant.phone_no = phone_no
            restaurant.restaurant_img = restaurant_img
            restaurant.description = description
            restaurant.location = location
            restaurant.capacity = capacity
            restaurant.owner_id = owner_id
        
            db.session.commit()
            return jsonify({"success": "Restaurant updated successfully"}), 200

    else:
        return jsonify({"error":"Restaurant does not exist!"}), 404


    
    
    

from models import db, Restaurant
from flask import request, jsonify, Blueprint

restaurant_bp = Blueprint('restaurant_bp', __name__)
#fetch alll restaurants
@restaurant_bp.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    restaurants = [restaurant.to_dict() for restaurant in db.session.query(Restaurant).all()]
    print (restaurants)
    return jsonify(restaurants), 200
    
        
from models import db, Restaurant
from flask import request, jsonify, Blueprint

restaurant_bp = Blueprint('restaurant_bp', __name__)
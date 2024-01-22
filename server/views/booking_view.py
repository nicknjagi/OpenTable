from models import db, Booking
from flask import request, jsonify, Blueprint

booking_bp = Blueprint('booking_bp', __name__)
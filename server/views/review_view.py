from models import db, Review
from flask import request, jsonify, Blueprint

review_bp = Blueprint('review_bp', __name__)
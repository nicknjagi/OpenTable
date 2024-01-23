from models import db, Review
from flask import request, jsonify, Blueprint

review_bp = Blueprint('review_bp', __name__)
@review_bp.route('/reviews',methods=['GET'])
def get_reviews():
    reviews = [review.to_dict() for review in db.session.query(Review).all()]
    return jsonify(reviews), 200
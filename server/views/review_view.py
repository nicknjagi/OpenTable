from models import db, Review
from flask import request, jsonify, Blueprint

review_bp = Blueprint('review_bp', __name__)
@review_bp.route('/reviews',methods=['GET'])
def get_reviews():
    reviews = [review.to_dict() for review in db.session.query(Review).all()]
    return jsonify(reviews), 200

@review_bp.route('/reviews/<int:id>', methods=['GET'])
def get_review(id):
    review = db.session.query(Review).filter_by(id=id).first()
    if review:
        return jsonify(review.to_dict()), 200
    else:
        return jsonify({"error": "Review not found"}), 404
    
@review_bp.route('/reviews/<int:id>',methods=['DELETE'])
def delete_review(id):
    review = db.session.query(Review).filter_by(id=id).one_or_none()
    if review is None:
        return jsonify({"error":"No such review exists"}), 404
    db.session.delete(review)
    db.session.commit()
    return jsonify("Successfully deleted the review"), 200

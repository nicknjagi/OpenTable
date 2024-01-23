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

@review_bp.route("/reviews", methods=["POST"])
def create_review():
    data = request.get_json()
    restaurant_id = data.get("restaurant_id")
    user_id = data.get("user_id")
    rating = data.get("rating")
    comment = data.get("comment")
    new_review = Review(user_id=user_id, 
                    rating=rating, comment=comment, 
                    restaurant_id=restaurant_id)
    db.session.add(new_review)
    db.session.commit()
    return jsonify(new_review.to_dict()), 201

@review_bp.route('/reviews/<int:id>', methods=['PUT'])
def update_review(id):
    review = Review.query.filter_by(id=id).first()
    if not review:
        return jsonify({'error':'Invalid review id.'}),404
    if review:
        data = request.get_json()

        # Retrieve values from data dictionary
        restaurant_id = data.get('restaurant_id')
        user_id = data.get('user_id')
        rating = data.get('rating')
        comment = data.get('comment')

        # Update the restaurant attributes
        review.restaurant_id = restaurant_id
        review.user_id = user_id
        review.rating = rating
        review.comment = comment
    
        db.session.commit()
        return jsonify({"success": "Review updated successfully"}), 200

    else:
        return jsonify({"error":"Review does not exist!"}), 404


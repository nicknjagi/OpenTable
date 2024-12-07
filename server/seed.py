from datetime import datetime, timedelta
from models import db, User, Restaurant, Booking, Review
from random import sample, randint
from faker import Faker
from sqlalchemy import func
from werkzeug.security import generate_password_hash
from app import app

fake = Faker()


def seed_user():
    users = []
    for _ in range(20):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password=generate_password_hash("opentable"),
            profile_img=fake.image_url(),
            contact_info=fake.phone_number(),
            first_name=fake.first_name(),
            last_name=fake.last_name(),
        )
        users.append(user)
    db.session.add_all(users)
    db.session.commit()


def seed_restaurant():
    restaurants = []
    restaurantImages = [
        "https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3534750/pexels-photo-3534750.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1741285/pexels-photo-1741285.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/8753546/pexels-photo-8753546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/601169/pexels-photo-601169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
    count = 0
    for _ in range(12):
        restaurant = Restaurant(
            name=fake.company(),
            phone_no=int(("").join(fake.msisdn().replace("-", "")[:9])),
            description=fake.text(),
            restaurant_img=restaurantImages[count],
            location=fake.address(),
            capacity=randint(20, 100),
            owner_id=User.query.order_by(func.random()).first().id,
        )
        count += 1
        restaurants.append(restaurant)
    db.session.add_all(restaurants)
    db.session.commit()


def seed_booking():
    bookings = []
    for _ in range(24):
        booking = Booking(
            user_id=User.query.order_by(func.random()).first().id,
            restaurant_id=Restaurant.query.order_by(func.random()).first().id,
            booking_date=datetime.utcnow() + timedelta(days=randint(1, 30)),
            booking_time=datetime.strptime(fake.time(), "%H:%M:%S").time(),
            party_size=randint(1, 10),
            status=sample(["confirmed", "pending", "cancelled"], 1)[0],
        )
        bookings.append(booking)
    db.session.add_all(bookings)
    db.session.commit()


def seed_review():
    reviews = []
    for restaurant in Restaurant.query.all():
        num_reviews = randint(1, 6)
        for _ in range(num_reviews):
            review = Review(
                restaurant_id=restaurant.id,
                user_id=User.query.order_by(func.random()).first().id,
                rating=randint(1, 5),
                comment=fake.text(),
                date_posted=datetime.utcnow() + timedelta(days=randint(1, 365)),
            )
            reviews.append(review)
    db.session.add_all(reviews)
    db.session.commit()


if __name__ == "__main__":
    with app.app_context():
        db.session.query(User).delete()
        db.session.query(Restaurant).delete()
        db.session.query(Booking).delete()
        db.session.query(Review).delete()
        seed_user()
        seed_restaurant()
        seed_booking()
        seed_review()

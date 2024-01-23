from flask import Flask
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from models import db,User,Restaurant, Booking,Review
from random import sample, randint
from faker import Faker
from sqlalchemy import func


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db.init_app(app)
fake=Faker()

def seed_user():
    users = []
    for _ in range(12):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password="opentable",
            profile_img=fake.image_url(),
            contact_info=fake.phone_number(),
            first_name=fake.first_name(),
            last_name=fake.last_name()
        )
        users.append(user)
    db.session.add_all(users)
    db.session.commit()

def seed_restaurant():
    restaurants = []
    for _ in range(6):
        restaurant = Restaurant(
            name=fake.company(),
            phone_no=fake.phone_number(),
            description=fake.text(),
            restaurant_img=fake.image_url(),
            location=fake.address(),
            capacity=randint(20, 100),
            owner_id=User.query.order_by(func.random()).first().id
        )
        restaurants.append(restaurant)
    db.session.add_all(restaurants)
    db.session.commit()


def seed_booking():
    bookings = []
    for _ in range(6):
        booking = Booking(
            user_id=User.query.order_by(func.random()).first().id,
            restaurant_id=Restaurant.query.order_by(func.random()).first().id,
            booking_date=datetime.utcnow() + timedelta(days=randint(1, 30)),
            booking_time=datetime.strptime(fake.time(), '%H:%M:%S').time(),
            party_size=randint(1, 10),
            status=sample(['confirmed', 'pending', 'cancelled'], 1)[0]
        )
        bookings.append(booking)
    db.session.add_all(bookings)
    db.session.commit()

def seed_review():
    reviews = []
    for restaurant in Restaurant.query.all():
        for _ in range(2):
            review = Review(
                restaurant_id=restaurant.id,
                user_id=User.query.order_by(func.random()).first().id,
                rating=randint(1, 5),
                comment=fake.text(),
                date_posted=datetime.utcnow() + timedelta(days=randint(1, 365))
            )
            reviews.append(review)
    db.session.add_all(reviews)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_user()
        seed_restaurant()
        seed_booking()
        seed_review()
from flask import Flask
from datetime import datetime, timedelta
from flask_sqlalchemy import SQLAlchemy
from models import db,User,Restaurant, Booking,Review
from random import sample, randint
from faker import Faker

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db.init_app(app)
fake=Faker()

def seed_user():
    pass

def seed_restaurant():
    pass

def seed_booking():
    pass

def seed_review():
    pass

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_user()
        seed_restaurant()
        seed_booking()
        seed_review()
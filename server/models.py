from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    pass

class Restaurant(db.Model):
    pass

class Table(db.Model):
    pass

class Booking(db.Model):
    pass

class Review(db.Model):
    pass


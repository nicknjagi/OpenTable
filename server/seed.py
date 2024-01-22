from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db,User,Restaurant, Booking,Review
from random import sample

from app import app

def seed_user():
    pass

def seed_restaurant():
    pass

def seed_booking():
    pass

def seed_review():
    pass

if __name__=='__main__':
    seed_user()
    seed_restaurant()
    seed_booking()
    seed_review()
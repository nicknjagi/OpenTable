from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db,User,Restaurant,Table,Booking,Review

from views import *
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db.init_app(app)
migrate = Migrate(app, db)


app.register_blueprint(user_bp)
app.register_blueprint(restaurant_bp)
app.register_blueprint(table_bp)
app.register_blueprint(booking_bp)
app.register_blueprint(review_bp)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
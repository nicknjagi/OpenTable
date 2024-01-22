from models import db, Table
from flask import request, jsonify, Blueprint

table_bp = Blueprint('table_bp', __name__)
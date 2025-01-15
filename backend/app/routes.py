from flask import Blueprint, jsonify, request
from . import db
from .models import User
from .dynamodb import get_table

main_bp = Blueprint('main', __name__)

# RDS Example Route
@main_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

# DynamoDB Example Route
@main_bp.route('/dynamodb/item', methods=['POST'])
def create_item():
    data = request.json
    table = get_table('YourDynamoDBTableName')
    table.put_item(Item=data)
    return jsonify({'message': 'Item created successfully'}), 201

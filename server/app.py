from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from .models import db, Pet, Owner
from flask_cors import CORS
import jwt

JWT_SECRET = 'secret'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pets.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

CORS(app)

migrate = Migrate(app, db)
db.init_app(app)


@app.route('/signup', methods=['POST'])
def signup():
    if not request.is_json:
        return make_response(jsonify({"msg": "Missing JSON in request"}), 400)
    if 'username' not in request.json or 'email' not in request.json or 'password' not in request.json:
        return make_response(jsonify({"msg": "Missing JSON data in request"}), 400)

    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    imageurl = request.json['imageurl']
    pets = request.json['pets']
    age = request.json['age']

    if username is None or email is None or password is None:
        return make_response(jsonify({"msg": "Missing JSON data in request"}), 400)

    if Owner.query.filter_by(username=username).first() or Owner.query.filter_by(email=email).first():
        return make_response(jsonify({"msg": "User already exists"}), 400)

    owner = Owner(username=username, email=email, password=password,imageurl=imageurl,pets=pets,age=age)
    db.session.add(owner)
    db.session.commit()

    return make_response(jsonify({"msg": "User created successfully"}), 201)


@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return make_response(jsonify({"msg": "Missing JSON in request"}), 400)
    if 'username' not in request.json or 'password' not in request.json:
        return make_response(jsonify({"msg": "Missing JSON data in request"}), 400)

    username = request.json['username']
    password = request.json['password']

    if username is None or password is None:
        return make_response(jsonify({"msg": "Missing JSON data in request"}), 400)

    owner = Owner.query.filter_by(username=username, password=password).first()

    if not owner:
        return make_response(jsonify({"msg": "Invalid username or password"}), 401)

    token = jwt.encode({'user_id': owner.id}, JWT_SECRET, algorithm='HS256')
    return make_response(jsonify({"msg": "Login successful", "token": token}), 200)


@app.route('/pets', methods=['POST'])
def create_pet():
    print(request.json)
    if not request.is_json:
        return make_response(jsonify({"msg": "Missing JSON in request"}), 400)
    if 'name' not in request.json or 'breed' not in request.json or 'petType' not in request.json:
        return make_response(jsonify({"msg": "Missing JSON data in request"}), 400)

    age = request.json['age']
    name = request.json['name']
    breed = request.json['breed']
    pet_type = request.json['petType']
    gender = request.json['gender']
    image_URL = request.json.get('imageURL', None)


    if name is None or breed is None or pet_type is None:
        return make_response(jsonify({"msg": "Missing JSON data in request"}), 400)

    pet = Pet(name=name, breed=breed, pet_type=pet_type, age=age, gender=gender, image_URL=image_URL)
    db.session.add(pet)
    db.session.commit()

    return make_response(jsonify({"msg": "Pet created successfully"}), 201)

@app.route('/pets', methods=['GET'])
def get_pets():
    pets = Pet.query.all()
    print(pets)
    return jsonify([pet.as_dict() for pet in pets])

@app.route('/pets/<int:id>', methods=['GET'])
def get_pet_by_id(id):
    pet = Pet.query.get(id)
    if not pet:
        return make_response(jsonify({"msg": "Pet not found"}), 404)
    return jsonify(pet.as_dict())

@app.route('/pets/<int:id>', methods=['DELETE'])
def delete_pet(id):
    pet = Pet.query.get(id)
    if not pet:
        return make_response(jsonify({"msg": "Pet not found"}), 404)
    db.session.delete(pet)
    db.session.commit()
    return make_response(jsonify({"msg": "Pet deleted successfully"}), 200)


@app.route('/pets/<int:id>', methods=['PUT'])
def update_pet(id):
    pet = Pet.query.get(id)
    if not pet:
        return make_response(jsonify({"msg": "Pet not found"}), 404)
    if 'name' in request.json:
        pet.name = request.json['name']
    if 'breed' in request.json:
        pet.breed = request.json['breed']
    if 'pet_type' in request.json:
        pet.pet_type = request.json['pet_type']
    if 'is_adopted' in request.json:
        pet.is_adopted = request.json['is_adopted']
    if 'color' in request.json:
        pet.color = request.json['color']
    if 'age' in request.json:
        pet.age = request.json['age']
    if 'image_URL' in request.json:
        pet.image_URL = request.json['image_URL']
    if 'gender' in request.json:
        pet.gender = request.json['gender']
    if 'price' in request.json:
        pet.price = request.json['price']
    db.session.commit()
    return make_response(jsonify({"msg": "Pet updated successfully"}), 200)


@app.route('/owners', methods=['GET'])
def get_owners():
    owners = Owner.query.all()
    return jsonify([owner.as_dict() for owner in owners])


@app.route('/owners', methods=['DELETE'])
def delete_owner():
    owner = Owner.query.first()
    if not owner:
        return make_response(jsonify({"msg": "Owner not found"}), 404)
    db.session.delete(owner)
    db.session.commit()
    return make_response(jsonify({"msg": "Owner deleted successfully"}), 200)

@app.route('/adopt/<int:id>', methods=['PUT'])
def adopt_pet(id):
    bearer = request.headers.get('Authorization')
    if not bearer:
        return make_response(jsonify({"msg": "Missing Authorization header"}), 401)
    
    token = bearer.split(' ')[1]
    print(token)
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
    except:
        return make_response(jsonify({"msg": "Invalid token"}), 401)
    
    owner_id = payload['user_id']
    pet = Pet.query.get(id)
    if not pet:
        return make_response(jsonify({"msg": "Pet not found"}), 404)
    pet.is_adopted = True
    
    pet.owner_id = owner_id
    db.session.commit()
    return make_response(jsonify({"msg": "Pet adopted successfully"}), 200)

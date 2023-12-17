from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    breed = db.Column(db.String(100), default=False)
    pet_type = db.Column(db.String(100), nullable=True)
    is_adopted = db.Column(db.Boolean, default=False)
    color = db.Column(db.String(100), nullable=True)
    age = db.Column(db.Integer, nullable=False)
    image_URL = db.Column(db.String(10000), nullable=True)
    gender= db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('owner.id'), nullable=True)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    

    def __repr__(self):
        return f'<Pet {self.name}>'

class Owner(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    imageurl = db.Column(db.String(500), nullable=True)
    pets=db.Column(db.Integer, nullable=True)
    age = db.Column(db.Integer, nullable=True)

    
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


    def __repr__(self):
        return f'<Pet {self.username}>'


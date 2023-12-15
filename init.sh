export FLASK_APP=server/app.py
flask db init
flask db migrate
flask db upgrade

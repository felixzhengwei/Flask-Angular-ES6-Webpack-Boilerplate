from flask import Flask, render_template
from flask_webpack import Webpack

webpack = Webpack()

def create_app():
    app = Flask(__name__)

    return app

app = create_app()

@app.route('/')
def hello_world():
	return render_template("index.html")

if __name__ == '__main__':
	app.run(debug=True)

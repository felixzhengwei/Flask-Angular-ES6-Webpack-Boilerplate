# Flask-Angular-ES6-Webpack-Boilerplate
This is a boilerplate project for starting an application with flask and angular using webpack and es6

To start the project, clone this repo and run:
```text
pip install -r requirements.txt
```
This will install flask.

Then run:
```text
"npm install"
```
in the project root directory, this will allow webpack to compile and concatenate all the dependencies and listen to all the changes you make. Make sure you have webpack exposed globally so the command can be accessed through the command line.

In a separate terminal, run:
```text
python server.py
```
This will fire up the flask server.

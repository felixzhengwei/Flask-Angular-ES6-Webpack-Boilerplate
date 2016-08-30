from flask import Flask, render_template

#Changing jinja templating syntax so that Flask is not confused with angular syntax 
class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        block_start_string='<%',
        block_end_string='%>',
        variable_start_string='%%',
        variable_end_string='%%',
        comment_start_string='<#',
        comment_end_string='#>',
    ))

def create_app():
    app = CustomFlask(__name__)

    return app

app = create_app()

def create_app():
    app = Flask(__name__)

    return app

app = create_app()

@app.route('/')
def hello_world():
	return render_template("index.html")

if __name__ == '__main__':
	app.run(debug=True)

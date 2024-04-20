import flask

app = flask.Flask(__name__)

@app.route('/hello')
def home():
    return "ik ur smiling rn"
    
if __name__ == "__main__":
    app.run(port=3000)
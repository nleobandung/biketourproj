from flask import Flask,jsonify,request
from datetime import datetime
import googlemaps

app = Flask(__name__)

@app.route('/returnjson', methods=['GET']) 
def ReturnJSON(): 
    API_KEY = "AIzaSyBF8q9l9Zv1wqZVUFmXmsV5Ohs0NmfSzto"
    gmaps = googlemaps.Client(key=API_KEY)
    pos1 = request.args.get('pos1')
    pos2 = request.args.get('pos2')
    now = datetime.now()
    directions_result = gmaps.directions(pos1,pos2,mode="bicycling",departure_time = now)
    directions_result = directions_result[0]["legs"][0]["steps"][0]
    return jsonify(directions_result) 
    
if __name__ == "__main__":
    app.run(port=3000)
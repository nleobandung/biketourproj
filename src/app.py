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
    #directions_result1 = directions_result[0]["legs"][0]["steps"][0]

    distance = str(directions_result[0]['legs'][0]['distance']['text'])
    duration = str(directions_result[0]['legs'][0]['duration']['text'])

    data = {
        "Distance" : distance,
        "Duration" : duration

    }
    return jsonify(data)
    
if __name__ == "__main__":
    app.run(port=3000)
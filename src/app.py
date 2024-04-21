from flask import Flask,jsonify,request
from datetime import datetime
import googlemaps
import json
import requests

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
    lat = (gmaps.geocode(pos1))[0]["geometry"]["location"]["lat"]
    lng = (gmaps.geocode(pos1))[0]["geometry"]["location"]["lng"]

    r = requests.get(f"http://api.weatherapi.com/v1/forecast.json?key=c193543305184504a9f50911242104&q={lat},{lng}&days=1&aqi=yes&alerts=no")
    data = json.loads(r.content)["forecast"]["forecastday"][0]["day"]

    rain_chance = str(data["daily_chance_of_rain"])
    maxtemp_f = str(data["maxtemp_f"])
    avgtemp_f = str(data["avgtemp_f"])
    maxwind_mph = str(data["maxwind_mph"])

    condition = data["condition"]
    text = condition["text"]
    icon = condition["icon"]
    uv = str(data["uv"])
    air_quality = data["air_quality"]
    us_epa_index = str(air_quality["us-epa-index"])
    

    distance = str(directions_result[0]['legs'][0]['distance']['text'])
    duration = str(directions_result[0]['legs'][0]['duration']['text'])

    data = {
        "Distance" : distance,
        "Duration" : duration,
        "Chance of rain" : rain_chance,
        "Maximum Temperature" : maxtemp_f,
        "Average Temperature" : avgtemp_f

    }
    return jsonify(data)
    
if __name__ == "__main__":
    app.run(port=3000)
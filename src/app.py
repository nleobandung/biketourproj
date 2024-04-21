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
    data2 = json.loads(r.content)["forecast"]["forecastday"][0]["day"]

    rain_chance = str(data2["daily_chance_of_rain"])
    maxtemp_f = str(data2["maxtemp_f"])
    avgtemp_f = str(data2["avgtemp_f"])
    maxwind_mph = str(data2["maxwind_mph"])

    condition = data2["condition"]
    text = condition["text"]
    icon = condition["icon"]
    uv = str(data2["uv"])
    air_quality = data2["air_quality"]
    us_epa_index = str(air_quality["us-epa-index"])

    lat1 = (gmaps.geocode(pos2))[0]["geometry"]["location"]["lat"]
    lng1 = (gmaps.geocode(pos2))[0]["geometry"]["location"]["lng"]

    r1 = requests.get(f"http://api.weatherapi.com/v1/forecast.json?key=c193543305184504a9f50911242104&q={lat1},{lng1}&days=1&aqi=yes&alerts=no")
    data1 = json.loads(r1.content)["forecast"]["forecastday"][0]["day"]

    rain_chance1 = str(data1["daily_chance_of_rain"])
    maxtemp_f1 = str(data1["maxtemp_f"])
    avgtemp_f1 = str(data1["avgtemp_f"])
    maxwind_mph1 = str(data1["maxwind_mph"])

    condition1 = data1["condition"]
    text1 = condition1["text"]
    icon1 = condition1["icon"]
    uv1 = str(data1["uv"])
    air_quality1 = data1["air_quality"]
    us_epa_index1 = str(air_quality1["us-epa-index"])
    

    distance = str(directions_result[0]['legs'][0]['distance']['text'])
    duration = str(directions_result[0]['legs'][0]['duration']['text'])

    data = {
        "Distance" : distance,
        "Duration" : duration,
        "AverageTempO" : avgtemp_f,
        "AverageTempd" : avgtemp_f1,
        "MaxWindSpeedO" : maxwind_mph,
        "MaxWindSpeedd" : maxwind_mph1,
        "AirQo" : air_quality,
        "AirQd" : air_quality1
    }
    return jsonify(data)
    
if __name__ == "__main__":
    app.run(port=3000)
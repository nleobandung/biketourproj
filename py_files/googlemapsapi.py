import googlemaps
import json
from datetime import datetime

# documentation for googlemaps at https://github.com/googlemaps/google-maps-services-python

API_KEY = "AIzaSyBF8q9l9Zv1wqZVUFmXmsV5Ohs0NmfSzto"
gmaps = googlemaps.Client(key=API_KEY)

def geocode(origin, destination):
    geocode_origin = (gmaps.geocode(origin))[0]["geometry"]["location"]
    geocode_dest = (gmaps.geocode(destination))[0]["geometry"]["location"]
    return geocode_origin["lat"], geocode_origin["lng"], geocode_dest["lat"], geocode_dest["lng"]

def find_route(origin, destination):
    now = datetime.now()
    directions_result = gmaps.directions(origin,destination,mode="bicycling",departure_time = now)
    return directions_result[0]["legs"][0]["steps"]

def find_elevation(path):
    return gmaps.elevation_along_path(path, 10)

def find_places():
    return

print(find_route("Los Angeles", "San Diego"))


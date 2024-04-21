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

def find_distance_matrix(origin, destination):
    now = datetime.now()
    directions_matrix_result = gmaps.distance_matrix(origin, destination, mode = "bicycling", departure_time = now)
    return directions_matrix_result

steps = find_route("Los Angeles", "San Diego")
#print(steps)
origin_ele = gmaps.elevation(geocode("Los Angeles", "San Diego"))
#destination_ele = gmaps.elevation("San Diego")
print(origin_ele[0]["elevation"])
#print(destination_ele)
#print(geocode("Los Angeles", "San Diego"))
#print((steps[0]["end_location"]))
#print((steps[-1]["start_location"]))

'''elevation_data = (steps[0]["polyline"]).values()
print(find_elevation(elevation_data))
#print((steps[0]["polyline"]))
#print((steps[1]["polyline"]))'''



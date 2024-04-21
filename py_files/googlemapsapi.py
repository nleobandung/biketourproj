import googlemaps
import json

# documentation for googlemaps at https://github.com/googlemaps/google-maps-services-python

API_KEY = "AIzaSyBF8q9l9Zv1wqZVUFmXmsV5Ohs0NmfSzto"
gmaps = googlemaps.Client(key=API_KEY)

def geocode(origin, destination):
    geocode_origin = (gmaps.geocode(origin))[0]["geometry"]["location"]
    geocode_dest = (gmaps.geocode(destination))[0]["geometry"]["location"]
    return geocode_origin["lat"], geocode_origin["lng"], geocode_dest["lat"], geocode_dest["lng"]

def find_route(lat1, lon1, lat2, lon2):
    return

def find_elevation():
    return

def find_places():
    return


print(geocode("3202 Route 52 Stormville NY 12582", "New York City"))
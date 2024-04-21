import json
import requests
city = "London"
r = requests.get(f"http://api.weatherapi.com/v1/forecast.json?key=c193543305184504a9f50911242104&q={city}&days=1&aqi=yes&alerts=no")
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



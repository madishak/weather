from flask import Flask, request
from flask_cors import CORS
import requests
from geocoder import ip
from math import floor
from random import randint
import time

app = Flask(__name__)
CORS(app)

city_name = 'Nalchik'
API_key = "bdecf0c479444894f9e34deb793afe24"

cities = []
degree = 'metric'


def get_weather(city, units, api_key):
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units={}&appid={}'.format(city, units, api_key)
    # url = 'http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units={}&appid={}'.format(lat, lon, units, api_key)
    r = requests.get(url)
    return r.json()

# print(get_weather(city_name, 'metric', API_key))
# print(get_weather(city_name, 'metric', API_key)['main']['temp'])
# print(get_weather(g.lat, g.lng, 'metric', API_key))
# print(get_weather(g.lat, g.lng, 'metric', API_key)['main']['temp'])
# print(get_weather(city_name, 'imperial', API_key)['main']['temp'])


def default_weather(units, api_key):
    coord = ip('me')
    url = 'http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units={}&appid={}'.format(coord.lat, coord.lng, units, api_key)
    r = requests.get(url)
    return floor(r.json()['main']['temp'])


print(default_weather('metric', API_key))

# Work Weather project
# @app.route("/", methods=['GET', 'POST'])
# def hello_world():
#     global degree, city_id
#     if request.method == 'GET':
#         print('Obi-Wan')
#         print(default_weather(degree, API_key))
#         return {'cities': cities, 'defaultWeather': default_weather(degree, API_key)}
#     elif request.method == 'POST':
#         city = request.get_json()['city']
#         city_id = request.get_json()['id']
#         degree = request.get_json()['degree']
#         cities.append({'id': city_id, 'city': city, 'degrees': get_weather(city, degree, API_key)['main']['temp']})
#         print(cities)
#         print(city_id)
#         return {'id': city_id, 'city': city, 'degree': degree, 'defaultWeather': default_weather(degree, API_key)}
#     print(default_weather(degree, API_key))
#     return {'defaultWeather': default_weather(degree, API_key)}

# temperature = randint(-40, 70)
# humidity = randint(0, 99)
# rain = randint(0, 1023)
# pressure = randint(225, 825)
# print({'temperature': temperature, 'humidity': humidity, 'rain': rain, 'pressure': pressure})
# University Weather Project
@app.route("/", methods=['GET'])
def weather_sensors():
    start_time = time.time()
    seconds = 4
    if request.method == 'GET':
        # while True:
        #     current_time = time.time()
        #     elapsed_time = current_time - start_time
        #
        #     if elapsed_time > seconds:
        #         print("Finished iterating in: " + str(int(elapsed_time)) + " seconds")
        #         temperature = randint(-40, 70)
        #         humidity = randint(0, 99)
        #         rain = randint(0, 1023)
        #         pressure = randint(225, 825)
        #         print({'temperature': temperature, 'humidity': humidity, 'rain': rain, 'pressure': pressure})
        #         break
        temperature = randint(-40, 70)
        humidity = randint(0, 99)
        rain = randint(0, 1023)
        pressure = randint(225, 825)
        print({'temperature': temperature, 'humidity': humidity, 'rain': rain, 'pressure': pressure})
        return {'temperature': temperature, 'humidity': humidity, 'rain': rain, 'pressure': pressure}


if __name__ == '__main__':
    app.run()
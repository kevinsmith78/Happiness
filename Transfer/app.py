from flask import Flask, jsonify
from sqlalchemy import create_engine
import pandas as pd
import os
import json

engine = create_engine(
    'postgresql://postgres:postgres@localhost:5432/Project2')
connection = engine.connect()

state_region = engine.execute("SELECT * FROM state_region").fetchall()
state_region_json = []
index = 0
for i in state_region:
    state_region_json.append(
        {'index': state_region[index][0], 'region': state_region[index][1], 'name': state_region[index][2]})
    index += 1

state_laborforce = engine.execute("SELECT * FROM state_laborforce").fetchall()
state_laborforce_json = []
index = 0
for i in state_laborforce:
    state_laborforce_json.append(
        {'index': state_laborforce[index][0], 'state': state_laborforce[index][1], '2009': state_laborforce[index][6], '2010': state_laborforce[index][7], '2011': state_laborforce[index][8], '2012': state_laborforce[index][9], '2013': state_laborforce[index][10], '2014': state_laborforce[index][11], '2015': state_laborforce[index][12], '2016': state_laborforce[index][13], '2017': state_laborforce[index][14], '2018': state_laborforce[index][15], '2019': state_laborforce[index][16]})
    index += 1

state_laborforce_ba = engine.execute(
    "SELECT * FROM state_laborforce_ba").fetchall()
state_laborforce_ba_json = []
index = 0
for i in state_laborforce_ba:
    state_laborforce_ba_json.append(
        {'index': state_laborforce_ba[index][0], 'state': state_laborforce_ba[index][1], '2009': state_laborforce_ba[index][6], '2010': state_laborforce_ba[index][7], '2011': state_laborforce_ba[index][8], '2012': state_laborforce_ba[index][9], '2013': state_laborforce_ba[index][10], '2014': state_laborforce_ba[index][11], '2015': state_laborforce_ba[index][12], '2016': state_laborforce_ba[index][13], '2017': state_laborforce_ba[index][14], '2018': state_laborforce_ba[index][15], '2019': state_laborforce_ba[index][16]})
    index += 1

individuals_25_44 = engine.execute(
    "SELECT * FROM individuals_25_44").fetchall()
individuals_25_44_json = []
index = 0
for i in individuals_25_44:
    individuals_25_44_json.append(
        {'index': individuals_25_44[index][0], 'state': individuals_25_44[index][1], '2009': individuals_25_44[index][6], '2010': individuals_25_44[index][7], '2011': individuals_25_44[index][8], '2012': individuals_25_44[index][9], '2013': individuals_25_44[index][10], '2014': individuals_25_44[index][11], '2015': individuals_25_44[index][12], '2016': individuals_25_44[index][13], '2017': individuals_25_44[index][14], '2018': individuals_25_44[index][15], '2019': individuals_25_44[index][16]})
    index += 1

major_type = engine.execute(
    "SELECT * FROM major_type").fetchall()
major_type_json = []
index = 0
for i in major_type:
    major_type_json.append(
        {'index': major_type[index][0], 'major': major_type[index][1], 'unemployment_rate': major_type[index][2], 'underemployment_rate': major_type[index][3], 'share_with_grad_degree': major_type[index][4]})
    index += 1

national_ranking = engine.execute(
    "SELECT * FROM national_ranking").fetchall()
national_ranking_json = []
index = 0
for i in national_ranking:
    national_ranking_json.append(
        {'index': national_ranking[index][0], 'name': national_ranking[index][1], 'rank': national_ranking[index][2], 'undergrad_enrollment': national_ranking[index][3]})
    index += 1

uni_lat_long = engine.execute(
    "SELECT * FROM uni_lat_long").fetchall()
uni_lat_long_json = []
index = 0
for i in uni_lat_long:
    uni_lat_long_json.append(
        {'index': uni_lat_long[index][0], 'name': uni_lat_long[index][1], 'lat': uni_lat_long[index][2], 'lng': uni_lat_long[index][3]})
    index += 1


app = Flask(__name__)


@app.route('/')
def home():
    return(f'/state_region  FOR REGION CODES BY STATE<hr>/state_laborforce  FOR LABORFORCE BY STATE<hr>/state_laborforce_ba  FOR BACHELOR DEGREE HOLDERS IN THE LABORFORCE BY STATE<hr>/individuals_25_44  FOR 25 TO 44 YEAR OLD IN THE LABORFORCE BY STATE<hr>/major_type  FOR UNEMPLOYED AND UNDEREMPLOYED INDIVIDUALS BY MAJOR<hr>/national_ranking  FOR NATIONALLY RECOGNIZED UNIVERSITIES BY RANKING<hr>/uni_lat_long  FOR THE GEOGRAPHIC COORDINATES OF COLLEGES IN THE US<hr>')


@app.route('/state_region')
def state_reg_func():
    return jsonify(state_region_json)


@app.route('/state_laborforce')
def state_labor():
    return jsonify(state_laborforce_json)


@app.route('/state_laborforce_ba')
def state_labor_ba():
    return jsonify(state_laborforce_ba_json)


@app.route('/individuals_25_44')
def ind_25_44():
    return jsonify(individuals_25_44_json)


@app.route('/major_type')
def major():
    return jsonify(major_type_json)


@app.route('/national_ranking')
def ranking():
    return jsonify(national_ranking_json)


@app.route('/uni_lat_long')
def lat_long():
    return jsonify(uni_lat_long_json)


if __name__ == '__main__':
    app.run(debug=True)

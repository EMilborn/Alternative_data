from flask import Flask, render_template, request
from utils import parser as data
import json


app = Flask(__name__)
app.secret_key = "eliasgoestostanford"


@app.route("/", methods=['POST','GET'])
def root():

    #default first year, default high school
    result = data.getHPercentages('2002')

    return render_template("page.html", states = result)


@app.route("/newData", methods=['POST','GET'])
def new():

    request.args['year', 'school']

    if ( school == "College" ):
        result = data.getCPercentages(year)
    else:
        result = data.getHPercentages(year)

    return render_template("page.html", states = result)

@app.route("/getCollege")
def collegeData():
    year = request.args["year"]
    return json.dumps(data.getCPercentages(year))

@app.route("/getHS")
def hsData():
    year = request.args["year"]
    return json.dumps(data.getHPercentages(year))

if __name__ == '__main__':
    app.debug = True
    app.run()

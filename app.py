from flask import Flask, render_template, request
from utils import parser as data


app = Flask(__name__)
app.secret_key = "eliasgoestostanford"


@app.route("/", methods=['POST','GET'])
def root():

    #default first year, default high school
    result = data.getHPercentages('2002')

    return render_template("page.html", states = result)


@app.route("/newData", methods=['POST','GET'])

    request.args['year', 'school']

    if ( school == "College" ):
        result = data.getCPercentages(year)
    else:
        result = data.getHPercentages(year)

    return render_template("page.html", states = result)


if __name__ == '__main__':
    app.debug = True
    app.run()

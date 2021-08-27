import pymongo
import pandas as pd
from flask import Flask, jsonify, render_template

app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route("/")
def home():

    return render_template("/index.html")


@app.route("/index.html")
def index():

    return render_template("/index.html")


@app.route("/vaccines.html")
def vaccines():
    return render_template("vaccines.html")


@app.route("/vaes.html")
def vaes():
    return render_template("vaes.html")


@app.route("/map.html")
def map():
    return render_template("map.html")



@app.route("/api")
def api():

    # Replace <password> with the password for the robertovera_db user.
    # Replace myFirstDatabase with the name of the database that connections will use by default.
    # Ensure any option params are URL encoded.

    # "mongodb+srv://robertovera_db:<password>@cluster0.g7ylf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


    password = 'xaDHuu0YHWaaMyJX'
    myFirstDatabase = "vaxx_covid"

    client_url = 'mongodb+srv://dbVax:' + password + '@cluster0.le6ek.mongodb.net/' \
        + myFirstDatabase + '?retryWrites=true&w=majority'
        #client_url = "mongodb+srv://dbVax:" + password + "@cluster0.g7ylf.mongodb.net/" + myFirstDatabase + \
        #    "?retryWrites=true&w=majority"
    client_url

    myclient = pymongo.MongoClient(client_url)

    mydb = myclient.vaxx_covid
    collection = mydb.vax_covid_2021
    # mydb = myclient.SuperHeroes

    mydoc = mydb["vax_covid_2021"].find({})

    vaxx_covid_data = []
    for x in mydoc:
        del x['_id']
        vaxx_covid_data.append(x)

    return jsonify(vaxx_covid_data)



if __name__ == "__main__":
    app.run(debug=True)

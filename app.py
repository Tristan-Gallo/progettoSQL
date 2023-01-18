from flask import Flask, request, jsonify, render_template,  redirect, url_for, Response
import pandas as pd
import pymssql as sql
from flask_cors import CORS

from os import getenv
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
CORS(app)


conn = sql.connect(server='213.140.22.237\SQLEXPRESS', user= 'biagioni.jacopo', password= 'xxx123##', database='biagioni.jacopo')


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/ricerca')
def ricerca():
    return render_template('home.html')

@app.route('/ricercabrani')
def ricercabrani():
    query = f'select Artist, Song from Brani'
    df = pd.read_sql(query, conn)
    dati = list(df.values.tolist())
    return render_template('brani.html', nomiColonne = df.columns.values, dati = list(df.values.tolist()))

@app.route('/brani')
def brani():
    query = f'select artista, canzone from brani3 order by asc'
    df = pd.read_sql(query, conn)
    dati = list(df.values.tolist())
    return render_template('brani.html', nomiColonne = df.columns.values, dati = list(df.values.tolist()))



@app.route('/pandas/staff')
def getstaff_pandas():
    data = request.args.get("store_name")

    q = 'SELECT * FROM sales.staffs ' + ('WHERE store_id IN (SELECT store_id FROM sales.stores WHERE store_name LIKE %(data)s)' if data != None and data != '' else "")
    df = pd.read_sql(q, conn, params={"data": f'%{data}%'})

    res = list(df.fillna("NaN").to_dict("index").values())    # list(df.to_dict("index").values())

    return jsonify(res)

@app.route('/api/staff')
def getstaff_sql():
    data = request.args.get("store_name")

    q = 'SELECT * FROM sales.staffs ' + ('WHERE store_id IN (SELECT store_id FROM sales.stores WHERE store_name LIKE %(data)s)' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"data": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)

@app.route('/api/users')
def getusers():
    cursor = conn.cursor(as_dict=True)
    q = 'SELECT * FROM sales.customers'
    p = {}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)

@app.route('/api/products')
def getproducts():
    cursor = conn.cursor(as_dict=True)
    q = 'SELECT * FROM production.products'
    p = {}
    cursor.execute(q, p)
    data = cursor.fetchall()

    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3245)
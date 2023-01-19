from flask import Flask, request, jsonify, render_template,  redirect, url_for, Response
import pandas as pd
import pymssql as sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


conn = sql.connect(server='213.140.22.237\SQLEXPRESS', user= 'biagioni.jacopo', password= 'xxx123##', database='biagioni.jacopo')


@app.route('/homepage')
def home():
    return render_template('home.html')

@app.route('/ricerca')
def ricerca():
    #create a cursor
    cursor = conn.cursor(as_dict=True) 
    #execute select statement to fetch data to be displayed in combo/dropdown
    cursor.execute('SELECT nome_nazione FROM Nazione') 
    #fetch all rows ans store as a set of tuples 
    nazioni = cursor.fetchall() 
    #render template and send the set of tuples to the HTML file for displaying
    cursor.execute('SELECT settimana_classifica FROM Brani GROUP BY settimana_classifica HAVING count(settimana_classifica) > 1') 
    settimana = cursor.fetchall()
    return render_template('ricerca.html', nazioni = nazioni, settimana = settimana)

@app.route('/risultato')
def risultato():
    nazione_selezionata = request.args['nazione_sel']
    settimana_selezionata = request.args['settimana_sel']
    query = f"SELECT Position, Artist, Song FROM Brani WHERE (Nazione = '{nazione_selezionata}') and (settimana_classifica = '{settimana_selezionata}')"
    dfRisultato = pd.read_sql(query, conn)
    dati = list(dfRisultato.values.tolist())
    return render_template('risultato.html', nomiColonne = df.columns.values, dati = list(df.values.tolist()))

@app.route('/ricercabrani')
def ricercabrani():
    query = f'select Artist, Song from Brani'
    df = pd.read_sql(query, conn)
    dati = list(df.values.tolist())
    return render_template('brani.html', nomiColonne = df.columns.values, dati = list(df.values.tolist()))

@app.route('/brani')
def brani():
    query = f'select artista, canzone from brani3'
    df = pd.read_sql(query, conn)
    dati = list(df.values.tolist())
    return render_template('brani.html', nomiColonne = df.columns.values, dati = list(df.values.tolist()))

@app.route('/ricercabandiere')
def ricercabandiere():
    return render_template('ricercabandiere.html')

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
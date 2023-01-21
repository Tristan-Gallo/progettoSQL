from flask import Flask, request, jsonify, render_template,  redirect, url_for, Response
import pandas as pd
import pymssql as sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
 #pip install flask pandas pymssql flask_cors

conn = sql.connect(server='213.140.22.237\SQLEXPRESS', user= 'biagioni.jacopo', password= 'xxx123##', database='biagioni.jacopo')


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

@app.route('/artista')
def artista():
    data = request.args.get("nomeartista")
    print("il dato è" + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani ' + ('WHERE Artist LIKE %(a)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"a": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/brani', methods=['GET'])
def brani():
    data = request.args.get("titoloc")
    print("il dato è" + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani ' + ('WHERE Song LIKE %(t)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/ricercabandiere')
def ricercabandiere():
    return render_template('ricercabandiere.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3245)
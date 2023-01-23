from flask import Flask, request, jsonify, render_template,  redirect, url_for, Response
import pandas as pd
import pymssql as sql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
 #pip install flask pandas pymssql flask_cors

conn = sql.connect(server='213.140.22.237\SQLEXPRESS', user= 'biagioni.jacopo', password= 'xxx123##', database='biagioni.jacopo')

@app.route('/artista', methods=['GET'])
def artista():
    data = request.args.get("nomeartista")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani ' + ('WHERE Artist LIKE %(a)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"a": f"%{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/brani', methods=['GET'])
def brani():
    data = request.args.get("titoloc")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani ' + ('WHERE Song LIKE %(t)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"t": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/artista2', methods=['GET'])
def artista2():
    q = 'SELECT TOP 10 Artist, count(*) as numero_artista FROM Brani GROUP BY Artist ORDER BY numero DESC'
    cursor = conn.cursor(as_dict=True)
    p = {}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/italia', methods=['GET'])
def italia():
    data = request.args.get("citalia")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani' + ('WHERE Song LIKE %(i)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"i": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/francia', methods=['GET'])
def francia():
    data = request.args.get("cfrancia")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani WHERE nazione_id = 5' + ('WHERE Song LIKE %(i)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"i": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/globale', methods=['GET'])
def globale():
    data = request.args.get("cglobale")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani WHERE nazione_id = 0' + ('WHERE Song LIKE %(i)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"i": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/spagna', methods=['GET'])
def spagna():
    data = request.args.get("cspagna")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani WHERE nazione_id = 3' + ('WHERE Song LIKE %(i)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"i": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/inghilterra', methods=['GET'])
def inghilterra():
    data = request.args.get("cinghilterra")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani WHERE nazione_id = 4' + ('WHERE Song LIKE %(i)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"i": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/USA', methods=['GET'])
def usa():
    data = request.args.get("cusa")
    print("il dato è " + str(data))
    q = 'SELECT Position, Artist, Song, settimana_classifica, Nazione FROM Brani WHERE nazione_id = 2' + ('WHERE Song LIKE %(i)s' if data != None and data != '' else "")
    cursor = conn.cursor(as_dict=True)
    p = {"i": f"{data}%"}
    cursor.execute(q, p)
    data = cursor.fetchall()
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3245)
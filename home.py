
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

import matplotlib.pyplot as plt
import matplotlib
from matplotlib.figure import Figure
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import folium
import contextily
import geopandas as gpd
import pandas as pd
import io
from flask import Flask, render_template, send_file, make_response, url_for, Response, request, redirect
app = Flask(__name__)
import re




@app.route('/', methods=['GET'])
def home():




    return render_template('home.html')


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)
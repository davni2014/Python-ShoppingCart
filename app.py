import django
from flask import Flask, render_template
import sys
import os
import sqlite3
from contextlib import closing
from db import *


application = Flask(__name__)
application.config['SECRET_KEY'] = 'devkey'


@application.route("/")
def index():
    con = sqlite3.connect('database.db')
    db = con.cursor()
    db.execute('select * from Products')
    res = db.execute('select * from Products')
    return render_template('cart2.html', Products=res.fetchall())


if __name__ == "__main__":
    application.run()

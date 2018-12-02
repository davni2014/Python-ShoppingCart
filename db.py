import sqlite3


conn = None


def connect():
    global conn
    if not conn:
        DB_FILE = "database.db"
        conn = sqlite3.connect(DB_FILE)
        conn.row_factory = sqlite3.Row


def close():
    if conn:
        conn.close()


def display_all_data():
    with sqlite3.connect('database.db') as conn:
        cur = conn.cursor()
        cur.execute('SELECT product_id, name, price, description, picture FROM Products')
        itemData = cur.fetchall()
        return itemData

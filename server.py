from flask import Flask,render_template,jsonify
import mysql.connector
import json

# Init Flask App
app = Flask(__name__)
# Connecting to MySQL Database
db = mysql.connector.connect(
            host="localhost",
            username="root",
            password="admin",
            database="productdb"
        )
cursor = db.cursor()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getproductlist", methods=['POST'])
def getlist():
        cursor.execute("""
            SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                    'ProductID', ProductID,
                    'ProductName', ProductName,
                    'ProductDescription', ProductDescription,
                    'ProductImageURL', ProductImageURL,
                    'Cost', Cost
                )
            ) AS products_json
            FROM products_list;
        """)
        jsonData = cursor.fetchone()
        result = jsonData[0]
        parsed_result = json.loads(result)

        return jsonify({"result":parsed_result})
    

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/returnjson', methods=['GET']) 
def ReturnJSON(): 
    pos1 = request.args.get('pos1')
    pos2 = request.args.get('pos2')
    data = { 
        "Modules" : pos1, 
        "Subject" : pos2, 
    } 
  
    return jsonify(data) 
    
if __name__ == "__main__":
    app.run(port=3000)
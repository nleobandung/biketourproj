from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/returnjson', methods = ['GET']) 
def ReturnJSON(): 
    if(request.method == 'GET'): 
        data = { 
            "Modules" : 15, 
            "Subject" : "Data Structures and Algorithms", 
        } 
  
        return jsonify(data) 
    
if __name__ == "__main__":
    app.run(port=3000)
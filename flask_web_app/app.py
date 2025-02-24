from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/users')
def users():
    return render_template('users.html')

@app.route('/username/<name>/<int:number>')
def learn(name,number):
    return f"{name} is learning Flask! he wakes up at {number} everyday."



if __name__ == '__main__':
    app.run(debug=True)
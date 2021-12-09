from flask import Flask, render_template
import webbrowser

app = Flask(__name__,static_folder="",static_url_path="",template_folder="")

webbrowser.open_new("localhost:5000")

@app.route('/')
def index():
    return render_template("overworld.html")

if __name__ == '__main__':
    app.run(debug=True, host='localhost')
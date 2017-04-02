from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "eliasgoestostanford"

@app.route("/")
def root():
    return render_template("page.html")

if __name__ == '__main__':
    app.debug = True
    app.run()

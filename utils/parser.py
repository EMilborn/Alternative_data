import csv

data = open("../data/data.csv", "r")
reader = csv.reader(data)
highschool = {}
middleschool = {}

for row in reader:
    if ( row[17] == "Overall"
         and row[5] == "Smoking Status" and row[7] == "Ever"):
        print row[0] + ": " + row[2]

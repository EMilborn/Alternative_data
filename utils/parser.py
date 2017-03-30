import csv

data = open("../data/data.csv", "r")
reader = csv.reader(data)
highschool = {}
middleschool = {}

for row in reader:
    
    if ( row[17] == "Overall" and row[5] == "Smoking Status" and row[7] == "Ever"):

        if ( row[20] == "High School" ):
            print row[0] + ": " + row[2]

        if ( row[20] == "Middle School" ):
            print row[0] + ": " + row[2]

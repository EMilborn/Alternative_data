import csv


data = open("../data/data.csv", "r")
reader = csv.reader(data)
highschool = {}
middleschool = {}


def constructDicts():

    # row[0] = year, row[2] = state, row[10] = percentage

    for row in reader:
        if ( row[17] == "Overall" and row[5] == "Smoking Status" and row[7] == "Ever"):

            #high school students only
            if ( row[20] == "High School" ):
                if row[2] in highschool.keys(): #to avoid overwriting data
                    highschool[row[2]].append(row[0])
                    highschool[row[2]].append(row[10])
                else:
                    highschool[row[2]] = [row[0],row[10]]

            #middle school students only
            if ( row[20] == "Middle School" ):
                if row[2] in middleschool.keys(): #to avoid overwriting data
                    middleschool[row[2]].append(row[0])
                    middleschool[row[2]].append(row[10])
                else:
                    middleschool[row[2]] = [row[0],row[10]]

                
constructDicts()

import csv


drugs = open("../data/data.csv", "r")
reader = csv.reader(drugs)
highschool = {}
college = {}


def constructDicts():

    #row[129] = year, row[66] = state
    #row[51] = percentage for high school-aged people
    #row[52] = percentage for college-aged people
    
    for row in reader:

        state = row[66]

        if ( state in highschool.keys() ): #to avoid overwriting data
             
             highschool[state].append(row[129]) #add year
             highschool[state].append(row[57]) #add rate
             college[state].append(row[129])
             college[state].append(row[58])

        else:
             highschool[state] = [row[129],row[57]]
             college[state] = [row[129],row[58]]

    #print highschool
    #print college

                
def getHPercentage(state, year):

    if ( state in highschool.keys() ):
        years = highschool.get(state)
        l = len(years)
        x = 0
        while ( x < l ):
            if ( years[x] == year ):
                return years[x+1]
            else:
                x += 2
        return -1

    else:
        return -1

    
def getCPercentage(state, year):

    if ( state in college.keys() ):
        years = college.get(state)
        l = len(years)
        x = 0
        while ( x < l ):
            if ( years[x] == year ):
                return years[x+1]
            else:
                x += 2
        return -1

    else:
        return -1


constructDicts()

#print getHPercentage("Montana", "2005")
#print getCPercentage("California", "2011")

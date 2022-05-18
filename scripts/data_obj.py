from dateutil import parser
import datetime

ERROR_CODE = 1
SUCCESS_CODE = 2

def formatDate(date):
    if not isinstance(date,str):
        return [1, "formatDate: Expected input of type string!"]
    try:
        res = parser.parse(date)  # of type datetime
        res = res.date()
        return [2, res.strftime("%Y-%m-%d")]
    except:
        return [1, 'formatDate: Error parsing string!']


class election:
    def __init__(self, name, date, city, county, state, link):
        self.electionName = name
        self.electionDay = formatDate(date)  # dates in the form YYYY-MM-DD
        self.cityID = ["USA",state,county.capitalize(),city.capitalize()]  # currently hardcode to USA
        self.link = "" if link is None else link
    
    def setElectionName(self, newName):
        self.electionName = newName
    
    def setElectionDay(self, newDate):
        self.electionDay = formatDate(newDate)
    
    def setElectionLink(self, newLink):
        self.link = newLink

    def setElectionCityID(self, newState, newCounty, newCity):
        self.cityID = ["USA", newState, newCounty, newCity]

    def getElectionName(self):
        return self.electionName
    
    def getElectionDay(self):
        return self.electionDay

    def getElectionLink(self):
        return self.link
    
    def getElectionCityID(self):
        return self.cityID

    def printElection(self):
        print('This Election:',self.electionName,self.electionDay,self.cityID,self.link)


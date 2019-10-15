import cardImageMaker, 
from os import path

root = "./games/" # relative to website root

# the names to give the card images for each game
cardImageNames = ["Card{0}.png" for l in ["L", "C", "R"]]

# the name of the pdf card file for each game
cardPdfName = "Cards.pdf"

def createCardImages(game_name):
    pass
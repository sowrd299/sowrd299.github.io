import cardImageMaker
from os import path
from sys import argv

root = "./games/" # relative to website root

# the names to give the card images for each game
card_image_names = ["Card{0}.png".format(l) for l in ["L", "C", "R"]]

# the name of the pdf card file for each game
card_pdf_name = "Cards.pdf"
temp_png_prefix = "./temp"

def createCardImages(game_name):

    # find things
    game_dir = path.join(root, game_name)
    pdf_path = path.join(game_dir, card_pdf_name)

    images = cardImageMaker.pdf_to_png(pdf_path, temp_png_prefix)

    cards = cardImageMaker.crop_to_random_cards(images, len(card_image_names))

    for card, name in zip(cards, card_image_names):
        card.save(path.join(game_dir, name))
    
    cardImageMaker.remove_temp_images(images)


if __name__ == "__main__":

    # if we have an a game folder as an argument
    if len(argv) > 1 and path.exists(path.join(root, argv[1], card_pdf_name)):
        createCardImages(argv[1])
'''
Creates propperly formatted png images of cards
from a PDF of cards for a game
'''

import os, subprocess, random, io
from PIL import Image

'''
returns a list of paths to png
renderings of the pages of the
pdf
'''
def pdf_to_png(pdf_path, png_path):

    # temporality remove the suphix to meet pdftoppm formating
    suphix = ".png"
    if png_path[-4:] == suphix:
        png_path = png_path[:-4]

    # the main calll
    subprocess.call(["pdftoppm", "-png", pdf_path, png_path])

    # collect the pages
    i = 1
    r = []
    while True:
        path = "{0}-{1}{2}".format(png_path, i, suphix)
        if os.path.exists(path):
           r.append(path) 
        else:
            break
        i += 1

    return r

'''
Crops out a single card from the image
Returns the image object for the card image
:param card_x: The x position of the card on the sheet (in cards)
:param x_margin: The margin on the sheet
:param card_width: The width of each card on the sheet
'''
def crop_to_card(image, card_x, card_y,
        x_margin = 75, y_margin = 35, card_width = 375, card_hight = 525):
    # calculate the coordinates of the card in pixels
    x = x_margin + (card_x * card_width)
    y = y_margin + (card_y * card_hight)
    # crop and return
    r = image.crop( (x, y, x+card_width, y+card_hight) )
    return r

'''
Returns random cards
does multiple at once to not reopen image files that don't
...need reopening
'''
def crop_to_random_cards(image_paths : [str], count : int,
            card_rows = 3, card_cols = 3):
    # randomize cards to cut out
    pages = [ random.randrange(len(image_paths)) for _ in range(count) ]
    xs = [ random.randrange(card_cols) for _ in range(count) ]
    ys = [ random.randrange(card_rows) for _ in range(count) ]
    # get the images needed
    images = [ (Image.open(path, mode = "r") if i in pages else None) for i,path in enumerate(image_paths) ] 
    # create and return the crops
    r = [ crop_to_card(images[p], x, y) for (p,x,y) in zip(pages, xs, ys) ]
    return r

'''
Removes the given images
e.g. the pages after croping images from them
'''
def remove_temp_images(image_paths):
    for image in image_paths:
        os.remove(image_paths)

# some basic test code
if __name__ == '__main__':
    pages = pdf_to_png("./games/Vitium/Cards.pdf", "./temp")
    #image = Image.open("./out-1.png", mode="r")
    #crop_to_card(image, 0, 2).save("./card.png")
    cards = crop_to_random_cards(pages, 3)
    for i,card in enumerate(cards):
        card.save("card{0}.png".format(i))
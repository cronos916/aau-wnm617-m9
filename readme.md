I had a lot of fun with this one. Mostly because I had the free time to play with it. 
This project is about a children's horror story where the child's toy ends up eating
the child. 

I wanted to add some bells and whistles to this one. The page features a full screen 
background locked to the width and height of the browser, using the vh and vw values 
in CSS. Everytime you load the page the main image will fill the browser regardless 
of the size. Since the image was a background image, I used media queries to load 
responsive image versions. 

I included a down arrow to let the user know that there is more below the image to 
explore. The down arrow animates into view using CSS animations. Clicking on the arrow 
will smooth scroll the story into place via jQuery. I added a bit of jQuery to counter 
the browser's auto scroll feature, that way refreshing or returning to the page will 
force the page to start at the top.

As a warning I used jQuery UI's dialog widget to create a modal that can be dismissed.
The modal can be activated by the button in the top left corner of the div. I
also created 3 modes for reading, a light, dark and sepia modes similar to many ebook
readers. Clicking on the mode buttons trigger the different modes. This is done using 
jQuery's add and removeClass effects.

The project uses Sass, Gulp, Git, Google Fonts, and FontAwesome and is based on 
Initialzr's Classic H5BP. 

The project is attached and can be found at http://dev.oakux.com/aau/wnm617/mod9/

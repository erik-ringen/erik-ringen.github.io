const homeLink = document.getElementById('nav-links').querySelectorAll('li');

// array of external links ids that we don't want to change the color of when clicked on
const extLinks = ["EJR", "github-link", "cv-link"];

let currLink = homeLink[1].id;

for (let i = 0; i < homeLink.length; i++) {

    homeLink[i].addEventListener('click', function() {
        
        // if clicked link is not an external link...
        if (!extLinks.includes(this.id)) {
        // put the new currLink to active color
        document.getElementById(this.id).setAttribute('class', 'curr-link');

        // put the old currLink back to non-active color
        document.getElementById(currLink).setAttribute('class', 'inactive-link');

        // keep track of who is current
        currLink = this.id;
        }
    }
    );
}

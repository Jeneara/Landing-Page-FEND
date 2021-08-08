/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */


/* Define Global Variables */

const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar_list");

/*  End Global Variables */


/* Begin Main Functions */

// Build the navmenu
function generateNavMenu() {
    //iterate over each section to generate it's own navigation item.
    for (let section of sections) {

        // create the <li> element
        let navItem = document.createElement('li');

        // create the <a> element
        let navItemLink = document.createElement('a');

        // Assign the section id as the li id
        navItemLink.id = section.getAttribute('id');

        // Create class name class = "menu_link"
        navItemLink.className = "menu_link";

        // Use the section data-nav to set the navItem title
        navItemLink.innerHTML = section.getAttribute('data-nav');

        // Append navItem to the navItemLink
        navItem.appendChild(navItemLink);

        // Append the link to the navList
        navList.appendChild(navItem);

        // Add the event listener for the click and then scroll to section
        navItem.addEventListener('click', (event) => {
            event.preventDefault();
            section.scrollIntoView({
                behavior: "smooth",
                block: 'start'
            });
        });
    };
};


// Hamburger Menu
let navbar = document.querySelector(".navbar_menu");
let navbarToggle = document.querySelector(".menu_toggle");
let menuClose = document.querySelector(".menu_close");

// Toggle menu
navbarToggle.addEventListener("click", function (event) {
    navbar.classList.toggle("active");
});


// // Add class 'active' to section when near top of viewport
function makeActive() {
    for (section of sections) {
        let activeBox = section.getBoundingClientRect();
        if (activeBox.top < 300 && activeBox.bottom > 300) {

            // Get the section id
            const sectionId = section.getAttribute("id");

            // Apply active state on the current section 
            section.classList.add('your-active-class');

            // Apply active state on the corresponding navlink
            document.querySelector(`#${sectionId}`).classList.add('active');

            // Remove active state from other section and corresponding Nav link.          
        } else {

            // Get the section id
            const sectionId = section.getAttribute("id");

            // Remove active state
            section.classList.remove('your-active-class');

            // Remove active state on navLink
            document.querySelector(`#${sectionId}`).classList.remove('active');
        }
    }
}

/* End Main Functions */


/*Begin Events */

// Build menu 
generateNavMenu();

// Make sections and navbar active
document.addEventListener("scroll", function () {
    makeActive();
});
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


// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar_list");

//  End Global Variables

//  Start Helper Functions

// End Helper Functions


// Begin Main Functions

// End Main Functions

// Build the nav

// Ref - https://knowledge.udacity.com/questions/457900

function generateNavMenu() {
    //iterate over each section to generate it's own navigation item.
    for (section of sections) {
        // create the <li> element
        let navItem = document.createElement('li');
        // create the <a> element
        let navItemLink = document.createElement('a');
        // Create class name class = "menu_link"
        navItemLink.className = "menu_link";
        // use the section data-nav to set the navItem title
        navItemLink.innerHTML = section.getAttribute('data-nav');
        // append the link to the navItem
        navItem.appendChild(navItemLink);
        console.log(navItem); 
        // append the link to the navList
        navList.appendChild(navItem);
    };
};
generateNavMenu();



//Checking if heading click works

const menuLinks = document.getElementsByClassName("menu_link");
for (const menuLink of menuLinks) {
    menuLink.addEventListener("click", function (event) {
        console.log('The heading was clicked!'); 
    });
}

// sections.scrollIntoView({behavior: "smooth"});  



// Hamburger Menu
let navbar = document.querySelector(".navbar_menu");
let navbarToggle = document.querySelector(".menu_toggle");
let menuClose = document.querySelector(".menu_close");

// Toggle menu
navbarToggle.addEventListener("click", function (event) {
    navbar.classList.toggle("active");
});



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
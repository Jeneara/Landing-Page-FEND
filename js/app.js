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

const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar_list');

//  End Global Variables



//  Start Helper Functions


// End Helper Functions




// Begin Main Functions

// End Main Functions


// Build the nav

// Hamburger Menu
let navbar = document.querySelector(".navbar_menu");
let navbarToggle = document.querySelector(".menu_toggle");
let menuClose = document.querySelector(".menu_close");
// Toggle menu
navbarToggle.addEventListener("click", function(event){
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
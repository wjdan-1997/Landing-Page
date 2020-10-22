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


/**
 * Define Global Variables
 * 
 */

const allSections = document.querySelectorAll('section');
const navList = document.getElementById('nav-list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

document.addEventListener('DOMContentLoaded', function buildNav() {
    for (const one of allSections) {
        //     allSections = []
        //     one = one of allSections
        console.log('has attribute ', one.hasAttribute('data-nav'))

        if (one.hasAttribute('data-nav')) {

            let aLinkTag = document.createElement('a');
            let liTag = document.createElement('li');
            liTag.setAttribute('class', 'navLink');

            aLinkTag.textContent = one.getAttribute('data-nav'); // take the value


            liTag.addEventListener('click', () => {
                one.scrollIntoView({
                    "behavior": 'smooth'
                });
                addActiveClass(one);
            });


            liTag.appendChild(aLinkTag);
            navList.appendChild(liTag);

        }
    }
});


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

/**
 * End Main Functions
 * Begin Events
 * 
 */


// call the function when user is scroll up/down
document.addEventListener("scroll", () => {
    // call this function to check if the element is active
    SetActiveSection();
})


function isInViewPort(element) {
    // define the boundary of section 
    var bound = element.getBoundingClientRect();
    return (
        bound.top >= 0 && //true &&//true
        bound.bottom <= document.documentElement.clientHeight

    );
}

function SetActiveSection() {

    for (one of allSections) {
        isOneInViewPort = isInViewPort(one);
        console.log('is section in view port: ', isOneInViewPort);
        if (isOneInViewPort) {
            //if true  add the class that will  change the color 

            one.classList.add("isActive");
        } else {
            one.classList.remove("isActive");
            // if false remove the class 
        }
    };
};
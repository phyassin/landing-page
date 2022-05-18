// Global Variables //
let sections = document.querySelectorAll("section");
let myUl = document.querySelector("#navbar__list");
//End Global Variables
// Begin Main Functions
const myNavBar = function (elem){
    // build the nav
    let myLi = document.createElement("li");
    let myAnchor = document.createElement("a");
    let myText = elem.getAttribute('data-nav');
    myAnchor.setAttribute("href" , '#' + elem.id);
    myAnchor.classList.add('menu__link')
    myAnchor.innerHTML = myText;
    // Begin Events
    // Scroll to anchor ID using scrollTO event
    myAnchor.addEventListener('click' , scrollTo);
    // Start Helper Functions
    function scrollTo(el){
    // Scroll to section on link click
    el.preventDefault();
    elem.scrollIntoView({behavior: 'smooth'});
    }
    // End Helper Functions
    document.addEventListener('scroll' ,scrollOn);
    // Start Helper Functions
    function scrollOn(){
        // Add class 'active' to section when near top of viewport
        let myTop = elem.getBoundingClientRect().top;
        if(myTop <= 50 && myTop >= -50){
            let activeClass = document.querySelectorAll('section.active');
            //the navbar menu item will be highlighted with the active section
            let anchorStyle = document.querySelectorAll('a');
            activeClass[0].classList.remove('active');
            for(i = 0; i<anchorStyle.length; i++){
                anchorStyle[i].style.removeProperty('color');
            }
            // Set sections as active   
            elem.classList.add('active');
            myAnchor.style.color = 'red';
        }
    }
    // End Helper Functions
    myLi.appendChild(myAnchor)
    myUl.appendChild(myLi)
}
// End Main Functions
// Build menu 
sections.forEach(myNavBar);


// burger button
    let pageHeader = document.querySelector(".page__header");
    let div = document.createElement('div');
    let button = document.createElement('button');
    pageHeader.prepend(div);
    let myDiv = document.querySelector('.page__header div');
    myDiv.textContent = "";
    myDiv.style.textAlign = 'center';
    myDiv.appendChild(button);
    let myButton = document.querySelector('button');
    myDiv.classList.add('menu__link', 'burger');
    myButton.innerHTML = '&#9776;';
    myButton.addEventListener('click', function(){
        if(myUl.style.display === 'none'){
            myUl.style.display = 'block';
        }
        else{
            myUl.style.display = 'none';
        }
    })

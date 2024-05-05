console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const suits = document.querySelectorAll(".card"); // Get the button from the page
if (suits) { // Detect clicks on the button
  [...suits].map(suit => {
    suit.onclick = function () {
      // The 'dipped' class in style.css changes the appearance on click
      suit.classList.toggle("dipped")
    }
    suit.onmouseover = function () {
      // The 'dipped' class in style.css changes the appearance on click
      suit.classList.toggle("dipped")
    }
    suit.onmouseout = function () {
      // The 'dipped' class in style.css changes the appearance on click
      suit.classList.toggle("dipped")
    }
  })
}


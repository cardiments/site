console.log("🂡 greetings from cardiments 🂡")

const suits = document.querySelectorAll("img.nav") // Get the button from the page
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
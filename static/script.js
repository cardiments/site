console.log("🂡 greetings from cardiments 🂡")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let visibility = urlParams.get('v')

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

if (visibility) [
  setCookie('visibility', visibility, 90)
]

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

let visibilityCookie = getCookie('visibility')
if (visibilityCookie) {
  visibility = visibilityCookie
} else [
  visibility = 'hidden'
]

customElements.define('header-component', class HeaderComponent extends HTMLElement {
  // This method runs when your custom element is added to the page
  connectedCallback() {
    const root = this.attachShadow({
      mode: 'closed'
    })
    root.innerHTML = `
      <style>
        .dipped {
            transform: rotate(-15deg);
            animation: dipped 0.1s;
        }
        @keyframes dipped {
            0% {
                transform: rotate(15deg);
            }

            100% {
                transform: rotate(-15deg);
            }
        }
        .title {
          fill: white;
          // font-family: "Copperplate";
          font-family: "Playfair Display SC";
          font-style: normal;
          font-weight: bold;
          font-size: xxx-large;
          margin: 0;
        }
      </style>
      <header>
          <div style="text-align: center;">
              <span>
                  <img class="nav" style="transform: rotate(-15deg); margin: 0 0.1rem 0.5rem 0" width="75px" src="/static/ButHo.png"/>
              </span>
              <span>
                  <img class="nav" style="transform: rotate(-5deg); margin: 0 0.1rem 1.5rem" width="75px" src="/static/ButIn.png"/>
              </span>
              <span>
                  <img class="nav" style="transform: rotate(5deg); margin: 0 0.1rem 1.5rem" width="75px" src="/static/ButHe.png"/>
              </span>
              <span>
                  <img class="nav" style="transform: rotate(15deg); margin: 0 0.1rem 0.5rem" width="75px" src="/static/ButSh.png"/>
              </span>
          </div>
          <div style="text-align:center; margin: 0 auto; height: 6rem">
              <svg>
                  <path id="curve" fill="transparent" d="m0,50c0,0,100,-40,235,0" transform="translate(40, 10)"/>
                  <text x="40%" y="50%" dominant-baseline="middle" text-anchor="middle">
                      <textPath xlink:href="#curve">
                          <a href="/" class="title">Cardiments</a>
                      </textPath>
                  </text>
              </svg>
          </div>
      </header>
    `
    const suits = root.querySelectorAll('img.nav')
    // Get the button from the page
    if (suits) {
      // Detect clicks on the button
      [...suits].map(suit => {
        // console.log(suit);
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
      }
      )
    }

    // Tell HTMX about this component's shadow DOM
    htmx.process(root)

  }
}
)

customElements.define('footer-component', class FooterComponent extends HTMLElement {
  // This method runs when your custom element is added to the page
  connectedCallback() {
    const root = this.attachShadow({
      mode: 'closed'
    })
    root.innerHTML = `
    <style>

    .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem auto 0;
    padding: 1rem 0 0.75rem 0;
    width: 100%;
    flex-wrap: wrap;
    border-top: 1px solid #fff;
    visibility: ${visibility};
    color: var(--color-primary);
    }
    
    .footer a {
      color: var(--color-primary);
    }
    
    .footer a:hover {
      background: var(--color-primary);
      color: var(--color-text-main)
    }
      
    .footer .links {
        color: var(--color-primary);
        padding: 0.5rem 1rem 1.5rem;
        white-space: nowrap;
    }
    </style>

    <footer class="footer">
        <dl>
        <dt><a href="/">home</a></dt>
        </dl>

        <dl>
        <dt>info</dt>
        <dd><a href="/info/drum-map.html">drum map</a></dd>
        <dd><a href="/info/links.html">links</a></dd>
        <dd><a href="/info/nard.html">nard</a></dd>
        <dd><a href="/info/notes.html">notes</a></dd>
        </dl>
        
        <dl>
        <dt>help</dt>
        <dd><a href="/help/demo.html">demo</a></dd>
        <dd><a href="/help/notation.html">notation</a></dd>
        <dd><a href="/help/time-signatures.html">time-signatures</a></dd>
        <dd><a href="/help/tips.html">tips</a></dd>
        </dl>

        <dl>
        <dt><a href="https://www.etsy.com/shop/cardiments">shop</a></dt>
        </dl>

    </footer>
  `
    // Tell HTMX about this component's shadow DOM
    htmx.process(root)

  }
}
)

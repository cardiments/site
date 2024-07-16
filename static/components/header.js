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
          font-family: "Playfair Display SC";
          font-style: normal;
          font-weight: bold;
          font-size: xxx-large;
          margin: 0;
        }
        img.nav {
          max-width: 6rem;
        }
        header svg {
          width: 100%;
        }
      </style>
      <header>
          <div style="text-align:center;">
              <span>
                  <img class="nav" style="transform: rotate(-15deg); margin: 0 0.1rem 0.5rem 0" width="20%" src="/static/ButHo.png"/>
              </span>
              <span>
                  <img class="nav" style="transform: rotate(-5deg); margin: 0 0.1rem 1.5rem" width="20%" src="/static/ButIn.png"/>
              </span>
              <span>
                  <img class="nav" style="transform: rotate(5deg); margin: 0 0.1rem 1.5rem" width="20%" src="/static/ButHe.png"/>
              </span>
              <span>
                  <img class="nav" style="transform: rotate(15deg); margin: 0 0.1rem 0.5rem" width="20%" src="/static/ButSh.png"/>
              </span>
          </div>
          <div style="max-height:5rem;">
              <svg>
                <path id="curve" fill="transparent" d="m45,30c0,0,125,-75,250,0" transform="translate(0, 30)" />
                <text>
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
        suit.onmouseover =  () => suit.classList.toggle("dipped")
      })
    }

    // Tell HTMX about this component's shadow DOM
    htmx.process(root)

  }
}
)
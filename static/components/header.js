customElements.define(
  'header-component',
  class HeaderComponent extends HTMLElement {
    // This method runs when your custom element is added to the page
    connectedCallback() {
      const root = this.attachShadow({
        mode: 'closed',
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
        .dWjUC {
            transition: transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s;
            z-index: 0;
        }
        .dWjUC:hover, .title:hover {
            transform: scale(1.075);
        }
        img.nav {
          max-width: 4rem;
        }
        @keyframes spin {
          from {transform:rotate(0deg);}
          to {transform:rotate(360deg);}
        }
      </style>
      <header style="text-align:center;">
        <div>
            <span>
                <a href="/"><img class="nav" style="transform: rotate(-15deg); margin: 0 0.1rem 0.5rem 0" width="20%" src="/static/ButHo.png" /></a>
            </span>
            <span>
                <a href="/info/"><img class="nav" style="transform: rotate(-5deg); margin: 0 0.1rem 1.5rem" width="20%" src="/static/ButIn.png"/></a>
            </span>
            <span>
                <a href="/help/"><img class="nav" style="transform: rotate(5deg); margin: 0 0.1rem 1.5rem" width="20%" src="/static/ButHe.png"/></a>
            </span>
            <span>
                <a href="https://cardiments.etsy.com"><img class="nav" style="transform: rotate(15deg); margin: 0 0.1rem 0.5rem" width="20%" src="/static/ButSh.png"/></a>
            </span>
        </div>
        <div>
          <img 
            alt="Cardiments" 
            width="80%" 
            style="max-width:20rem;" 
            src="/static/ArcWht.svg" 
          />
          <div>
            <img src="/static/Box3d.png" width="33%">
          </div>
        </div>
      </header>
    `
      const suits = root.querySelectorAll('img.nav')
      // Get the button from the page
      if (suits) {
        // Detect clicks on the button
        ;[...suits].map((suit) => {
          suit.onmouseover = () => suit.classList.toggle('dipped')
        })
      }

      // Tell HTMX about this component's shadow DOM
      htmx.process(root)
    }
  }
)

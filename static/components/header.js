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
        .animate {
            transition: transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s;
            z-index: 0;
        }
        .animate:hover, .title:hover {
            transform: scale(1.075);
        }
        img.nav {
          max-width: 4rem;
        }
        @keyframes spin {
          from {transform:rotate(0deg);}
          to {transform:rotate(360deg);}
        }
        .socials {
          display: flex;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .flex {
          display: flex;
        }
        .animate {
            transition: transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s;
            z-index: 0;
        }
        .animate:hover, .title:hover {
            transform: scale(1.075);
        }
        .badge-svg {
            margin-top: 8px;
            fill: rgb(255, 255, 255);
            width: 32px;
            height: 32px;
        }
        .badge-link {
            padding-left: 8px;
            padding-right: 8px;
            color: inherit;
            text-decoration: underline;
        }
        .badge-span {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
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
          <div class="socials">
            <div class="flex">
              <a target="_blank" rel="noopener" title="Instagram" data-testid="SocialIcon" href="https://instagram.com/drumcardiments" aria-label="Instagram" class="sc-eCssSg badge-link sc-hBEYos animate"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC badge-svg"><title data-testid="svgTitle" id="title_0.8719583059881886">Instagram</title><path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path><path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path><path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path></svg><span class="badge-span">Instagram</span></a>
              <a target="_blank" rel="noopener" title="YouTube" data-testid="SocialIcon" href="https://www.youtube.com/channel/UCKlZ92JUwgRZFHe760Df42Q" aria-label="YouTube" class="sc-eCssSg badge-link sc-hBEYos animate"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC badge-svg"><title data-testid="svgTitle" id="title_0.8895933448453446">YouTube</title><path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"></path></svg><span class="badge-span">YouTube</span></a>
            </div>
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

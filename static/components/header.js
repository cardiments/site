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
          max-width: 4rem;
        }
        .bhdLno {
            display: flex;
        }
        .cUWRuD {
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
        .dWjUC {
            transition: transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s;
            z-index: 0;
        }
        .dWjUC:hover, .title:hover {
            transform: scale(1.075);
        }
        .fwXqBO {
            margin-top: 8px;
            fill: rgb(255, 255, 255);
            width: 32px;
            height: 32px;
        }
        .lbrsth {
            padding-left: 8px;
            padding-right: 8px;
            color: inherit;
            text-decoration: underline;
        }
        .sr-only {
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
          <a href="/"><img width="80%" class="title" style="max-width:20rem;" src="/static/ArcWht.svg" alt="Cardiments" /></a>
          <div class="sc-bdfBwQ sc-gsTCUz cUWRuD bhdLno">
            <div class="flex">
              <a target="_blank" rel="noopener" title="Etsy" data-testid="SocialIcon" href="https://cardiments.etsy.com" aria-label="Cardiments" class="sc-eCssSg lbrsth sc-hBEYos dWjUC">
                <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC fwXqBO"><title data-testid="svgTitle" id="title_0.8719583059881886">Etsy</title>
                  <path
                    d="M 16.5,19.5 H 6.5 A 0.5,0.5 0 0 1 6,19 v -1 a 0.5,0.5 0 0 1 0.5,-0.5 0.94145,0.94145 0 0 0 1,-1 V 7 C 7.5,6.52785 6.5083,6.5 6.49855,6.5 A 0.5016,0.5016 0 0 1 6,6 V 5 A 0.5,0.5 0 0 1 6.5,4.5 H 17 A 0.5,0.5 0 0 1 17.5,5 V 8.5 A 0.5,0.5 0 0 1 17,9 H 16 A 0.5,0.5 0 0 1 15.5,8.5 2.72335,2.72335 0 0 0 14.78,7 H 11 v 4 h 2.5 a 0.94145,0.94145 0 0 0 1,-1 0.5,0.5 0 0 1 0.5,-0.5 h 0.5 A 0.5,0.5 0 0 1 16,10 v 4.5 A 0.5,0.5 0 0 1 15.5,15 H 15 a 0.5,0.5 0 0 1 -0.5,-0.5 0.94125,0.94125 0 0 0 -1,-1 H 11 V 17 h 3.5 c 1.6426,0 2.52685,-2.1638 2.53565,-2.1858 A 0.5003,0.5003 0 0 1 17.5,14.5 H 18 a 0.5,0.5 0 0 1 0.46825,0.67555 l -1.5,4 A 0.50025,0.50025 0 0 1 16.5,19.5 Z M 7,18.5 h 9.1533 l 0.54395,-1.45 A 3.15745,3.15745 0 0 1 14.5,18 h -4 A 0.5,0.5 0 0 1 10,17.5 V 13 a 0.5,0.5 0 0 1 0.5,-0.5 h 3 a 2.1135,2.1135 0 0 1 1.5,0.6321 v -1.77 A 1.89555,1.89555 0 0 1 13.5,12 h -3 A 0.5,0.5 0 0 1 10,11.5 v -5 A 0.5,0.5 0 0 1 10.5,6 H 15 A 0.49965,0.49965 0 0 1 15.3535,6.1465 4.3384,4.3384 0 0 1 16.4414,8 H 16.5 V 5.5 H 7 V 5.54665 C 7.6841,5.6704 8.5,6.063 8.5,7 v 9.5 A 1.95825,1.95825 0 0 1 7,18.44875 Z"
                    id="path1"
                    style="stroke-width:0.5" />
                  <path
                    d="M 20.5,23 H 3.5 A 2.50295,2.50295 0 0 1 1,20.5 V 3.5 A 2.50295,2.50295 0 0 1 3.5,1 h 17 A 2.50295,2.50295 0 0 1 23,3.5 v 17 A 2.50295,2.50295 0 0 1 20.5,23 Z M 3.5,2 A 1.50165,1.50165 0 0 0 2,3.5 v 17 A 1.50165,1.50165 0 0 0 3.5,22 h 17 A 1.50165,1.50165 0 0 0 22,20.5 V 3.5 A 1.50165,1.50165 0 0 0 20.5,2 Z"
                    id="path2"
                    style="stroke-width:0.5" />
                </svg>
                <span class="sr-only">Etsy</span>
              </a>
              <a target="_blank" rel="noopener" title="Instagram" data-testid="SocialIcon" href="https://instagram.com/drumcardiments" aria-label="Instagram" class="sc-eCssSg lbrsth sc-hBEYos dWjUC"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC fwXqBO"><title data-testid="svgTitle" id="title_0.8719583059881886">Instagram</title><path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path><path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path><path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path></svg><span class="sr-only">Instagram</span></a>
              <a target="_blank" rel="noopener" title="Facebook" data-testid="SocialIcon" href="https://www.facebook.com/profile.php?id=61560561595890" aria-label="Facebook" class="sc-eCssSg lbrsth sc-hBEYos dWjUC"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC fwXqBO"><title data-testid="svgTitle" id="title_0.8980728867589798">Facebook</title><path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z"></path></svg><span class="sr-only">Facebook</span></a>
              <a target="_blank" rel="noopener" title="YouTube" data-testid="SocialIcon" href="https://www.youtube.com/channel/UCKlZ92JUwgRZFHe760Df42Q" aria-label="YouTube" class="sc-eCssSg lbrsth sc-hBEYos dWjUC"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" class="sc-gKsewC fwXqBO"><title data-testid="svgTitle" id="title_0.8895933448453446">YouTube</title><path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z"></path></svg><span class="sr-only">YouTube</span></a>
            </div>
          </div>
          </header>
    `
        const suits = root.querySelectorAll('img.nav')
        // Get the button from the page
        if (suits) {
            // Detect clicks on the button
            [...suits].map(suit=>{
                suit.onmouseover = ()=>suit.classList.toggle("dipped")
            }
            )
        }

        // Tell HTMX about this component's shadow DOM
        htmx.process(root)

    }
}
)

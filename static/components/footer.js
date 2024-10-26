customElements.define(
  'footer-component',
  class FooterComponent extends HTMLElement {
    // This method runs when your custom element is added to the page
    connectedCallback() {
      const root = this.attachShadow({
        mode: 'open',
      })
      root.innerHTML = `
      <style>
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          margin: 1rem auto 0;
          padding: 1rem 0 0.75rem 0;
          width: 100%;
          flex-wrap: wrap;
          border-top: 1px solid #fff;
          color: var(--color-primary);
          font-family: 'Copperplate';
        }
        .footer a {
          color: var(--color-primary);
          text-decoration: none;
        }
        .footer dl a:hover {
          background: var(--color-primary);
          color: var(--color-text-main)
        }
        footer dt {
          font-weight: bold;
          font-size: large;
          margin: 0 0 .5rem;
        }
        footer dd {
          margin-inline-start: 0;
          margin: .3rem 0 0
        }
        .dev {
          visibility: ${visibility};
          display: ${display}
        }
        @keyframes spin {
            from {transform:rotate(360deg);}
            to {transform:rotate(0deg);}
        }
      </style>

      <footer class="footer">
        <dl>
          <dt><a href="/">home</a></dt>
        </dl>
        
        <dl>
        <dt><a href="/info/#info">info</a></dt>
          <dd><a href="/info/#info-notes">notes</a></dd>
          <dd><a href="/info/#info-nard">nard</a></dd>
          <dd><a href="/info/#info-links">links</a></dd>
          <dd><a href="/info/#info-drum-shops">shops</a></dd>
        </dl>
          
        <dl>
          <dt><a href="/help/#help">help</dt>
          <dd><a href="/help/#help-demo">demo</a></dd>
          <dd><a href="/help/#help-tips">tips</a></dd>
          <dd class="dev"><a href="/help/notation.html">notation</a></dd>
          <dd class="dev"><a href="/help/time-signatures.html">time-signatures</a></dd>
        </dl>
          
        <dl>
            <dt><a href="https://www.etsy.com/shop/cardiments">shop</a></dt>
        </dl>
        <div style="flex-basis: 100%; height: 0">
        <div style="text-align:center; margin: 1rem">
          <img 
            style="animation-name: spin;
            animation-duration: 4000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;" 
            src="/static/ButMailTo.png" 
            width="20%" 
          />
        </div>

      </footer>
      `
      // Tell HTMX about this component's shadow DOM
      htmx.process(root)
    }
  }
)

// scroll to anchor
document.querySelector("footer-component").shadowRoot.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      try {
        document.querySelector(this.getAttribute('href').replace(/\/.+\//,'')).scrollIntoView({
            behavior: 'smooth'
        })
      } catch (error) {
        window.location.replace(e.target)
      }
  })
})

customElements.define(
  'footer-component',
  class FooterComponent extends HTMLElement {
    // This method runs when your custom element is added to the page
    connectedCallback() {
      const root = this.attachShadow({
        mode: 'closed',
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

footer dt {
  font-weight: bold;
  margin: 0 0 .5rem;
}

footer dd {
  margin-inline-start: 0;
}

.dev {
  visibility: ${visibility};
  display: ${display}
}

</style>

<footer class="footer">
    <dl>
      <dt><a href="/">home</a></dt>
    </dl>
    
    <dl>
    <dt><a href="/info/">info</a></dt>
      <dd><a href="/info/drum-map.html">drum map</a></dd>
      <dd><a href="/info/links.html">links</a></dd>
      <dd><a href="/info/nard.html">nard</a></dd>
      <dd><a href="/info/notes.html">notes</a></dd>
      </dl>
      
      <dl>
      <dt><a href="/help/">help</dt>
      <dd><a href="/help/demo.html">demo</a></dd>
      <dd class="dev"><a href="/help/notation.html">notation</a></dd>
      <dd class="dev"><a href="/help/time-signatures.html">time-signatures</a></dd>
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

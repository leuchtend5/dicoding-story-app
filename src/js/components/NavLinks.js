import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="${msg(`Dashboard`)}" to="/"></nav-link>
        <nav-link content="${msg(`Add Story`)}" to="/pages/add.html"></nav-link>
        <nav-link content="${msg(`About`)}" to="/pages/about.html"></nav-link>
        <nav-link content="${msg(`Log in`)}" to="#"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);

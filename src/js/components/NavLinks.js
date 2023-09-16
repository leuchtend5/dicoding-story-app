import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="Dashboard" to="/"></nav-link>
        <nav-link content="Add Story" to="/pages/add.html"></nav-link>
        <nav-link content="About" to="/pages/about.html"></nav-link>
        <nav-link content="Log in" to="#"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);

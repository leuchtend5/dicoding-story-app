import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavBar extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <nav class="navbar navbar-dark bg-success">
        <div class="container-fluid custom-padding mx-3">
          <div class="d-flex p-1 gap-3">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <span class="navbar-brand">Story App</span>
          </div>

          <div class="d-flex flex-row gap-3">
            <form class="d-flex search-bar" role="search">
              <input class="form-control me-2" type="search" placeholder="${msg(
                `Search Username`,
              )}" aria-label="Search">
              <button class="btn btn-outline-light custom-btn" type="submit">${msg(
                `Search`,
              )}</button>
            </form>
            <span class="navbar-text">${msg(`Hello, User`)}</span>
          </div>

          <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar">
            <div class="offcanvas-header d-flex justify-content-end">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              <nav-links class="ms-auto mb-2 mb-md-0 text-dark">
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);

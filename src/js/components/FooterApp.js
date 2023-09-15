import { LitElement, html, css } from 'lit';

class FooterApp extends LitElement {
  static styles = css`
    .footer-text {
      background-color: #393e46;
      font-family: content-font;
      padding: 10px 0;
      text-align: center;
      margin-top: auto;
      color: white;
    }
  `;

  render() {
    return html` <div class="footer-text">Copyright © ${new Date().getFullYear()} Leuchtend</div> `;
  }
}

customElements.define('footer-app', FooterApp);

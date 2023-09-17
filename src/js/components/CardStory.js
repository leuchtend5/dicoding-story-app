import { LitElement, html, css } from 'lit';
import { format } from 'date-fns';

class CardStory extends LitElement {
  static properties = {
    name: { type: String },
    createdAt: { type: String },
  };

  constructor() {
    super();

    this.name = '';
    this.createdAt = '';
  }

  set story(story) {
    this.name = story.name || '';
    this.createdAt = this._formattedDate(story.createdAt) || '';
  }

  _formattedDate(value) {
    const date = new Date(value);

    const newDateFormat = format(date, 'MMMM d, yyyy, h:mm a');
    return newDateFormat;
  }

  static styles = css`
    .card-container {
      background-color: #e2e2e2;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      height: 400px;
      border-radius: 10px;
      gap: 20px;
      padding: 12px 12px;
      box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: 0.2s;
      animation: animate-pop 0.25s;
      font-family: content-font;
    }

    .card-container > div:first-child {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    img {
      width: 100%;
      border-radius: 5px;
    }

    .created-date {
      font-size: 0.7rem;
    }
  `;

  render() {
    return html`
      <div class="card-container">
        <div>
          <div class="name">${this.name}</div>
          <div class="created-date">${this.createdAt}</div>
        </div>

        <img src="https://source.unsplash.com/1200x700/?nature" alt="" />
        <div class="description">
          In a pretium sem. Suspendisse eget sollicitudin enim, sed suscipit mi. Integer sagittis
          lorem urna, tincidunt viverra lectus gravida id. Praesent venenatis nibh ac nisi.
        </div>
      </div>
    `;
  }
}

customElements.define('card-story', CardStory);

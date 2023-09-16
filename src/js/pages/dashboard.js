import '../components/CardStory';

const Dashboard = {
  async init() {
    await this._initialData();
    // this._initialListener();
  },

  async _initialData() {
    const fetchData = await fetch('/data/DATA.json');
    const response = await fetchData.json();

    this._populateDataToCard(response.listStory[0]);
  },

  _populateDataToCard(data) {
    const createCard = document.createElement('card-story');
    const contentContainer = document.querySelector('.content-container');
    createCard.story = data;
    contentContainer.appendChild(createCard);
  },
};

export default Dashboard;

import '../components/CardStory';

const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchData = await fetch('/data/DATA.json');
    const response = await fetchData.json();
    const storyArray = response.listStory;

    storyArray.forEach(async (story) => {
      this._populateDataToCard(story);
    });
  },

  _populateDataToCard(data) {
    const createCard = document.createElement('card-story');
    const contentContainer = document.querySelector('.content-container');
    createCard.story = data;
    contentContainer.appendChild(createCard);
  },
};

export default Dashboard;

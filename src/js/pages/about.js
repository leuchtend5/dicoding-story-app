import profile from '../../public/img/ghibli.jpg';

const About = {
  async init() {
    this._initialUI();
  },

  _initialUI() {
    const profileImg = document.getElementById('profile-img');
    profileImg.src = profile;
  },
};

export default About;

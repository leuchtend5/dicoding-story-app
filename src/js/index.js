// Import our custom CSS
import '../sass/main.scss';

import './components/index';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';

const routes = {
  //
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});

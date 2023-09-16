// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';

import './components/index';
import Dashboard from './pages/dashboard';
import AddStory from './pages/add';
import About from './pages/about';

const routes = {
  '/': Dashboard,
  '/pages/add.html': AddStory,
  '/pages/about.html': About,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});

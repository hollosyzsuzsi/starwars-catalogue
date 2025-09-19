import './index.css';
import router from './router/router';

document.addEventListener('DOMContentLoaded', () => {
  router.resolve();
});

const root = document.querySelector('#root');

const element = document.createElement('div');

root.append(element);

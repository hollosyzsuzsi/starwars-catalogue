import { fetchMedia } from '../../../api/apiMethods';
import renderList from '../../../helper/renderList';

import vectorIcon from '../../../img/vector.png';

import './planetList.css';
import '../../../index.css';

export default async function renderPlanetsList() {
  const planets = await fetchMedia('planets');

  renderList({
    containerSelector: '.main',
    data: planets,
    itemsPerPage: 5,
    routeBase: 'planets',
    cardConfig: {
      imageKey: 'src',
      titleKey: 'name',
      infoFields: [
        { label: 'Climate:', key: 'climate' },
        { label: 'Terrain:', key: 'terrain' },
        { label: 'Population:', key: 'population' },
      ],
      classNames: {
        wrapper: 'planet-wrapper',
        content: 'planet-content',
        image: 'planet-img',
        link: 'planet-name',
        title: 'name',
      },
    },
    listClassName: 'planetlist',
    headerTitle: 'Planets',
    headerClassName: 'planetlist-header',
    vectorIcon,
    onError: (error) => {
      const main = document.querySelector('.main');
      main.innerHTML = `<p>Failed to load planets. ${error.message}</p>`;
    },
  });
}

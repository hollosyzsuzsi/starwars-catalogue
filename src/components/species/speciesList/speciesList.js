import { fetchMedia } from '../../../api/apiMethods';
import renderList from '../../../helper/renderList';

import vectorIcon from '../../../img/vector.png';

import './specieslist.css';
import '../../../index.css';

export default async function renderSpeciesList() {
  const species = await fetchMedia('species');

  renderList({
    containerSelector: '.main',
    data: species,
    itemsPerPage: 5,
    routeBase: 'species',
    cardConfig: {
      imageKey: 'src',
      titleKey: 'name',
      infoFields: [
        { label: 'Classification:', key: 'classification' },
        { label: 'Designation:', key: 'designation' },
        { label: 'Language:', key: 'language' },
      ],
      classNames: {
        wrapper: 'species-wrapper',
        content: 'species-content',
        image: 'species-img',
        link: 'species-name',
        title: 'name',
      },
    },
    listClassName: 'specieslist',
    headerTitle: 'Species',
    headerClassName: 'specieslist-header',
    vectorIcon,
    onError: (error) => {
      const main = document.querySelector('.main');
      main.innerHTML = `<p>Failed to load species. ${error.message}</p>`;
    },
  });
}

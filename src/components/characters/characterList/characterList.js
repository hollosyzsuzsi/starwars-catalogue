import { fetchMedia } from '../../../api/apiMethods';
import renderList from '../../../helper/renderList';

import vectorIcon from '../../../img/vector.png';

import './characterlist.css';
import '../../../index.css';

export default async function renderCharactersList() {
  const characters = await fetchMedia('characters');

  renderList({
    containerSelector: '.main',
    data: characters,
    itemsPerPage: 5,
    routeBase: 'characters',
    cardConfig: {
      imageKey: 'src',
      titleKey: 'name',
      infoFields: [
        { label: 'Birth:', key: 'birth_year' },
        { label: 'Gender:', key: 'gender' },
      ],
      classNames: {
        wrapper: 'character-wrapper',
        content: 'item-content',
        image: 'character-img',
        link: 'character-name',
        title: 'name',
      },
    },
    listClassName: 'characterlist',
    headerTitle: 'Characters',
    headerClassName: 'characterlist-header',
    vectorIcon,
    onError: (error) => {
      const main = document.querySelector('.main');
      main.innerHTML = `<p>Failed to load characters. ${error.message}</p>`;
    },
  });
}

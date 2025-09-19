import { fetchMedia } from '../../../api/apiMethods';
import renderList from '../../../helper/renderList';

import vectorIcon from '../../../img/vector.png';

import './starshiplist.css';
import '../../../index.css';

export default async function renderStarshipList() {
  const starships = await fetchMedia('starships');

  renderList({
    containerSelector: '.main',
    data: starships,
    itemsPerPage: 5,
    routeBase: 'starship',
    cardConfig: {
      imageKey: 'src',
      titleKey: 'name',
      infoFields: [
        { label: 'Model:', key: 'model' },
        { label: 'Manufacturer:', key: 'manufacturer' },
        { label: 'Starship Class:', key: 'starship_class' },
      ],
      classNames: {
        wrapper: 'starship-wrapper',
        content: 'starship-content',
        image: 'starship-img',
        link: 'starship-name',
        title: 'name',
      },
    },
    listClassName: 'starshiplist',
    headerTitle: 'Starships',
    headerClassName: 'starshiplist-header',
    vectorIcon,
  });
}

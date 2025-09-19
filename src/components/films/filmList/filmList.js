import { fetchMedia } from '../../../api/apiMethods';
import createCard from '../../../helper/cardRenderer';

import '../../../index.css';
import './filmlist.css';

export default async function renderFilmsList() {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  const films = await fetchMedia('films');
  let currentSort = 'release_date';

  function sortFilms(data, selected) {
    return [...data].sort((a, b) => {
      switch (selected) {
        case 'release_date':
          return new Date(a.release_date) - new Date(b.release_date);
        case 'episode_id':
          return a.id - b.id;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }

  function renderList() {
    const existingList = document.querySelector('.filmlist');
    if (existingList) existingList.remove();

    const sortedFilms = sortFilms(films, currentSort);

    const filmList = document.createElement('div');
    filmList.className = 'filmlist';

    sortedFilms.forEach((film) => {
      const card = createCard({
        item: film,
        imageKey: 'src',
        routeBase: 'episodes',
        infoFields: [
          { label: 'Episode:', key: 'id' },
          { label: 'Director:', key: 'director' },
          { label: 'Producer:', key: 'producer' },
          { label: 'Release date:', key: 'release_date' },
        ],
        classNames: {
          wrapper: 'film-wrapper',
          content: 'film-content',
          image: 'film-img',
          link: 'film-link',
          title: 'title',
        },
        titleRender: () => {
          const titleEl = document.createElement('h1');
          titleEl.className = 'title';

          const link = document.createElement('a');
          link.href = `/episodes/${film.id}`;
          link.innerHTML = `Star Wars: Episode ${film.id} <br>- ${film.name}`;
          link.className = 'film-link'; // optional: match your CSS styles

          titleEl.appendChild(link);
          return titleEl;
        },
      });

      const square = document.createElement('div');
      square.className = 'square';
      square.textContent = '+18';
      card.appendChild(square);

      filmList.appendChild(card);
    });

    main.appendChild(filmList);
  }

  function renderHeader() {
    const header = document.createElement('div');
    header.className = 'filmlist-header';

    const title = document.createElement('h1');
    title.className = 'filmlist-title';
    title.textContent = 'Episodes';

    header.appendChild(title);

    const sorting = document.createElement('nav');
    const dropdown = document.createElement('select');
    dropdown.className = 'sorting-select';

    const options = [
      { value: 'release_date', label: 'Date' },
      { value: 'name', label: 'Name' },
      { value: 'episode_id', label: 'Episode' },
    ];

    options.forEach(({ value, label }) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      if (value === currentSort) option.selected = true;
      dropdown.appendChild(option);
    });

    sorting.innerHTML = `<span class="sorting-label">Sort by:</span>`;
    sorting.appendChild(dropdown);
    header.appendChild(sorting);

    dropdown.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderList();
    });

    main.appendChild(header);
  }

  try {
    renderHeader();
    renderList();
  } catch (error) {
    main.innerHTML = `<p>Failed to load films. ${error.message}</p>`;
  }
}

import { fetchMediaById } from '../../../api/apiMethods';
import createInfoRow from '../../../helper/createInfoRow';
import createExpandableRow from '../../../helper/createExpendableRow';

import './filmdetails.css';

export default async function renderFilmDetails(id) {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  try {
    const film = await fetchMediaById('films', id);

    const filmDetails = document.createElement('div');
    filmDetails.classList.add('filmdetails');

    const filmDetailWrapper = document.createElement('div');
    filmDetailWrapper.classList.add('film-detail-wrapper');

    const filmContent = document.createElement('div');
    filmContent.classList.add('film-content');

    const home = document.createElement('div');
    home.className = 'home-menu';

    const link = document.createElement('a');
    link.className = 'home-link';
    link.href = '/characters';
    link.textContent = 'Home';

    home.appendChild(link);

    const linkEnd = document.createElement('p');
    linkEnd.className = 'link-end';
    linkEnd.textContent = ' / Episodes';

    home.appendChild(linkEnd);

    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = '+18';

    filmDetailWrapper.append(square);

    const detailsImgWrapper = document.createElement('div');
    detailsImgWrapper.className = 'details-img-wrapper';

    const filmDetailsImg = document.createElement('img');
    filmDetailsImg.className = 'film-details-img';
    filmDetailsImg.src = film.src;

    detailsImgWrapper.appendChild(filmDetailsImg);

    const title = document.createElement('h1');
    title.className = 'title';
    title.innerHTML = `Star Wars: Episode ${film.id} - ${film.name}`;

    filmContent.appendChild(title);
    filmContent.appendChild(createInfoRow('Episode:', `Episode ${film.id}`));
    filmContent.appendChild(createInfoRow('Director:', film.director));
    filmContent.appendChild(createInfoRow('Producer:', film.producer));
    filmContent.appendChild(createInfoRow('Release date:', film.release_date));
    filmContent.appendChild(createExpandableRow('Characters:', film, 'characters'));
    filmContent.appendChild(createExpandableRow('Planets:', film, 'planets'));
    filmContent.appendChild(createExpandableRow('Starships:', film, 'starships'));
    filmContent.appendChild(createExpandableRow('Vehicles:', film, 'vehicles'));
    filmContent.appendChild(createExpandableRow('Species:', film, 'species'));
    filmContent.appendChild(createInfoRow('Created:', film.created));
    filmContent.appendChild(createInfoRow('Edited:', film.edited));
    filmContent.appendChild(createInfoRow(' ', film.opening_crawl));

    filmDetailWrapper.appendChild(detailsImgWrapper);
    filmDetailWrapper.appendChild(filmContent);

    filmDetails.appendChild(home);
    filmDetails.appendChild(filmDetailWrapper);

    main.appendChild(filmDetails);
  } catch (error) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `failed to load films. ${error.message}`;

    main.appendChild(errorMessage);
  }
}

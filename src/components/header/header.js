import logoPath from '../../img/logo.png';
import episodesIcon from '../../img/camera.svg';
import charactersIcon from '../../img/stormtrooper.svg';
import planetsIcon from '../../img/planet.svg';
import speciesIcon from '../../img/list.svg';
import vehiclesIcon from '../../img/at.svg';
import starshipsIcon from '../../img/comet.svg';
import './header.css';

export default function renderHeader() {
  const logo = document.querySelector('.logo');
  logo.src = logoPath;

  const navLinks = document.querySelectorAll('.nav-item a');

  const icons = {
    Episodes: episodesIcon,
    Characters: charactersIcon,
    Planets: planetsIcon,
    Species: speciesIcon,
    Vehicles: vehiclesIcon,
    Starships: starshipsIcon,
  };

  navLinks.forEach((link) => {
    const text = link.textContent.trim();

    const iconPath = icons[text];

    const navLink = link;
    navLink.href = `/${text.toLocaleLowerCase()}`;
    navLink.className = 'nav-links';

    if (window.location.href.split('/').includes(text.toLocaleLowerCase())) {
      navLink.classList.add('active');
    }

    if (iconPath) {
      const wrapper = document.createElement('span');
      wrapper.innerHTML = iconPath;

      const svg = wrapper.firstChild;
      svg.classList.add('nav-icon');
      link.prepend(wrapper);
    }
  });
}

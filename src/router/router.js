import Navigo from 'navigo';

import renderers from '../helper/renderersBundle';

const router = new Navigo('/', { hash: true });

async function renderRoute(renderFunction) {
  renderers.header();
  if (renderFunction) await renderFunction();
}

router
  .on({
    '/': () => renderRoute(() => renderers.filmList()),
    '/episodes': () => renderRoute(() => renderers.filmList()),
    '/episodes/:id': ({ data }) => renderRoute(() => renderers.filmDetails(data.id)),
    '/characters': () => renderRoute(() => renderers.characterList()),
    '/characters/:id': ({ data }) => renderRoute(() => renderers.characterDetails(data.id)),
    '/planets': () => renderRoute(() => renderers.planetList()),
    '/planets/:id': ({ data }) => renderRoute(() => renderers.planetDetails(data.id)),
    '/species': () => renderRoute(() => renderers.speciesList()),
    '/species/:id': ({ data }) => renderRoute(() => renderers.specieDetails(data.id)),
    '/vehicles': () => renderRoute(() => renderers.vehiclesList()),
    '/vehicles/:id': ({ data }) => renderRoute(() => renderers.vehicleDetails(data.id)),
    '/starships': () => renderRoute(() => renderers.starshipList()),
    '/starship/:id': ({ data }) => renderRoute(() => renderers.starshipDetails(data.id)),
  })
  .notFound(() => {
    renderRoute();
    const main = document.querySelector('main');
    main.textContent = 'Page not found!';
  })
  .resolve();

export default router;

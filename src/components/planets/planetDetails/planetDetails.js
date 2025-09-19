import createInfoRow from '../../../helper/createInfoRow';
import createExpandableRow from '../../../helper/createExpendableRow';
import renderDetailsPage from '../../../helper/renderDetailsPage';
import { fetchMediaById } from '../../../api/apiMethods';

export default async function renderPlanetDetails(id) {
  const planet = await fetchMediaById('planets', id);

  const infoNodes = [
    createInfoRow('Rotation period:', planet.rotation_period),
    createInfoRow('Orbital Period:', planet.orbital_period),
    createInfoRow('Diameter:', planet.diameter),
    createInfoRow('Climate:', planet.climate),
    createInfoRow('Gravity:', planet.gravity),
    createInfoRow('Terrain:', planet.terrain),
    createInfoRow('Surface water:', planet.surface_water),
    createInfoRow('Population:', planet.population),
    createExpandableRow('Residents:', planet, 'residents'),
    createExpandableRow('Films:', planet, 'films'),
  ];

  renderDetailsPage('planets', infoNodes, planet);
}

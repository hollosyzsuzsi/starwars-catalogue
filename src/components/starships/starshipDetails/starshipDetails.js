import { fetchMediaById } from '../../../api/apiMethods';
import createInfoRow from '../../../helper/createInfoRow';
import createExpandableRow from '../../../helper/createExpendableRow';
import renderDetailsPage from '../../../helper/renderDetailsPage';

export default async function renderStarshipDetails(id) {
  const starship = await fetchMediaById('starships', id);

  const infoNodes = [
    createInfoRow('Model:', starship.model),
    createInfoRow('Manufacturer:', starship.manufacturer),
    createInfoRow('Cost in credits:', starship.cost_in_credits),
    createInfoRow('Length:', starship.length),
    createInfoRow('Max atm. speed:', starship.max_atm_speed),
    createInfoRow('Crew:', starship.crew),
    createInfoRow('Passengers:', starship.passengers),
    createInfoRow('Cargo capacity:', starship.cargo_capacity),
    createInfoRow('Consumables:', starship.consumables),
    createInfoRow('Hyperdrive rating:', starship.hyperdrive_rating),
    createInfoRow('MGLT:', starship.MGLT),
    createInfoRow('Starship class:', starship.starship_class),
    createExpandableRow('Pilots:', starship, 'pilots'),
  ];

  renderDetailsPage('starships', infoNodes, starship);
}

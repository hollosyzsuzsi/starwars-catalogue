import { fetchMediaById } from '../../../api/apiMethods';
import createExpandableRow from '../../../helper/createExpendableRow';
import createInfoRow from '../../../helper/createInfoRow';
import renderDetailsPage from '../../../helper/renderDetailsPage';

export default async function renderCharacterDetails(id) {
  const character = await fetchMediaById('characters', id);

  const infoNodes = [
    createInfoRow('Height:', character.height),
    createInfoRow('Mass:', character.mass),
    createInfoRow('Hair color:', character.hair_color),
    createInfoRow('Eye color:', character.eye_color),
    createInfoRow('Birth:', character.birth_year),
    createInfoRow('Gender:', character.gender),
    createExpandableRow('Homeworld:', character, 'homeworld'),
    createExpandableRow('Films:', character, 'films'),
    createExpandableRow('Species:', character, 'species'),
    createExpandableRow('Vehicles:', character, 'vehicles'),
    createExpandableRow('Starships:', character, 'starships'),
  ];

  renderDetailsPage('characters', infoNodes, character);
}

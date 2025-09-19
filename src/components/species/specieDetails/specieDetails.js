import { fetchMediaById } from '../../../api/apiMethods';
import createInfoRow from '../../../helper/createInfoRow';
import createExpandableRow from '../../../helper/createExpendableRow';
import renderDetailsPage from '../../../helper/renderDetailsPage';

export default async function renderSpecieDetails(id) {
  const specie = await fetchMediaById('species', id);

  const infoNodes = [
    createInfoRow('Classification:', specie.classification),
    createInfoRow('Designation:', specie.designation),
    createInfoRow('Average height:', specie.average_height),
    createInfoRow('Skin colors:', specie.skin_colors),
    createInfoRow('Hair colors:', specie.hair_colors),
    createInfoRow('Eye colors:', specie.eye_colors),
    createInfoRow('Average lifespan:', specie.average_lifespan),
    createExpandableRow('Homeworld:', specie, 'homeworld'),
    createInfoRow('Language:', specie.language),
    createExpandableRow('People:', specie, 'people'),
    createExpandableRow('Films:', specie, 'films'),
  ];

  renderDetailsPage('species', infoNodes, specie);
}

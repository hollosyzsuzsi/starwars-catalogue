import { fetchMediaById } from '../../../api/apiMethods';
import createInfoRow from '../../../helper/createInfoRow';
import createExpandableRow from '../../../helper/createExpendableRow';
import renderDetailsPage from '../../../helper/renderDetailsPage';

export default async function renderVehicleDetails(id) {
  const vehicle = await fetchMediaById('vehicles', id);

  const infoNodes = [
    createInfoRow('Model:', vehicle.model),
    createInfoRow('Manufacturer:', vehicle.manufacturer),
    createInfoRow('Cost in credits:', vehicle.cost_in_credits),
    createInfoRow('Length:', vehicle.length),
    createInfoRow('Max atm. speed:', vehicle.max_atm_speed),
    createInfoRow('Crew:', vehicle.crew),
    createInfoRow('Passengers:', vehicle.passengers),
    createInfoRow('Cargo capacity:', vehicle.cargo_capacity),
    createInfoRow('Consumables:', vehicle.consumables),
    createExpandableRow('Vehicle class:', vehicle, 'vehicle_class'),
    createExpandableRow('Pilots:', vehicle, 'pilots'),
    createExpandableRow('Films:', vehicle, 'films'),
  ];

  renderDetailsPage('vehicles', infoNodes, vehicle);
}

import { fetchMedia } from '../../../api/apiMethods';
import renderList from '../../../helper/renderList';

import vectorIcon from '../../../img/vector.png';

import './vehiclelist.css';
import '../../../index.css';

export default async function renderVehicleList() {
  const vehicles = await fetchMedia('vehicles');

  renderList({
    containerSelector: '.main',
    data: vehicles,
    itemsPerPage: 5,
    routeBase: 'vehicle',
    cardConfig: {
      imageKey: 'src',
      titleKey: 'vehicle_name',
      infoFields: [
        { label: 'Model:', key: 'model' },
        { label: 'Manufacturer:', key: 'manufacturer' },
        { label: 'Cost in credits:', key: 'cost_in_credits' },
      ],
      classNames: {
        wrapper: 'vehicle-wrapper',
        content: 'vehicle-content',
        image: 'vehicle-img',
        link: 'vehicle-name',
        title: 'name',
      },
    },
    listClassName: 'vehiclelist',
    headerTitle: 'Vehicles',
    headerClassName: 'vehiclelist-header',
    vectorIcon,
    onError: (error) => {
      const main = document.querySelector('.main');
      main.innerHTML = `<p>Failed to load vehicles. ${error.message}</p>`;
    },
  });
}

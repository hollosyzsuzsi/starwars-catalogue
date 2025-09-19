import renderHeader from '../components/header/header';
import renderFilmsList from '../components/films/filmList/filmList';
import renderCharactersList from '../components/characters/characterList/characterList';
import renderFilmDetails from '../components/films/filmDetails/filmDetails';
import renderCharacterDetails from '../components/characters/characterDetails/characterDetails';
import renderPlanetDetails from '../components/planets/planetDetails/planetDetails';
import renderPlanetsList from '../components/planets/planetList/planetList';
import renderSpecieDetails from '../components/species/specieDetails/specieDetails';
import renderSpeciesList from '../components/species/speciesList/speciesList';
import renderStarshipDetails from '../components/starships/starshipDetails/starshipDetails';
import renderStarshipList from '../components/starships/starshipList/starshipList';
import renderVehicleList from '../components/vehicles/vehicleList/vehicleList';
import rendervehicleDetails from '../components/vehicles/vehicleDetails/vehicleDetails';

const renderers = {
  header: renderHeader,
  filmList: renderFilmsList,
  characterList: renderCharactersList,
  filmDetails: renderFilmDetails,
  characterDetails: renderCharacterDetails,
  planetDetails: renderPlanetDetails,
  planetList: renderPlanetsList,
  specieDetails: renderSpecieDetails,
  speciesList: renderSpeciesList,
  starshipDetails: renderStarshipDetails,
  starshipList: renderStarshipList,
  vehicleDetails: rendervehicleDetails,
  vehiclesList: renderVehicleList,
};

export default renderers;

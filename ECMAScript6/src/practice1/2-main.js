import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
neighborhoodsList.addNeighborhood('Noe Valley');
const res = neighborhoodsList.addNeighborhood('Miami');
console.log(res);

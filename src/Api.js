import axios from 'axios';

const testApiUrl = 'https://99ufr6tpjd.execute-api.eu-west-1.amazonaws.com/test/';

export const getAllSpots = () => axios.get(`${testApiUrl}spots`);

export const getNearbySpots = (longitude, latitude) =>
  axios.get(`${testApiUrl}spots/nearby?longitude=${longitude}&latitude=${latitude}`);

export const getPhotosBySpotId = id => axios.get(`${testApiUrl}spots/${id}/photos`);

export const getSpotsByOwnerId = id => axios.get(`${testApiUrl}users/${id}/spots`);

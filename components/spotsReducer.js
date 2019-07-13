import { SPOTS } from './mock-data';

const initialState = SPOTS;

const spots = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SPOT':
      return state.map((spot, index) => {
        if (index === action.updatedSpotIndex) return action.updatedSpot;
        return spot;
      });
    default:
      return state;
  }
};

export const updateSpot = (updatedSpot, updatedSpotIndex) => ({
  type: 'UPDATE_SPOT',
  updatedSpot,
  updatedSpotIndex,
});

export default spots;

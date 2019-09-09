const initialState = [];

const spots = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SPOTS':
      return [...state, ...action.spotsArray];
    case 'UPDATE_SPOT':
      return state.map((spot, index) => {
        if (index === action.updatedSpotIndex) return action.updatedSpot;
        return spot;
      });
    case 'ADD_SPOT':
      return [...state, action.newSpot];
    default:
      return state;
  }
};

export const addSpots = spotsArray => ({
  type: 'ADD_SPOTS',
  spotsArray,
});

export const updateSpot = (updatedSpot, updatedSpotIndex) => ({
  type: 'UPDATE_SPOT',
  updatedSpot,
  updatedSpotIndex,
});

export const addSpot = newSpot => ({
  type: 'ADD_SPOT',
  newSpot,
});

export default spots;

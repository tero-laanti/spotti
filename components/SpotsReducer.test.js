import spotsReducer from './spotsReducer';

describe('spotsReducer', () => {
  it('should return state by default', () => {
    const state = { key: 'value' };

    expect(spotsReducer(state, {})).toBe(state);
  });

  it('should return updated spots', () => {
    const spots = [{ id: 1, data: 'first' }, { id: 2, data: 'second' }, { id: 3, data: 'third' }];

    const updatedSpot = { id: 2, data: 'updated' };

    const action = {
      type: 'UPDATE_SPOT',
      updatedSpot,
      updatedSpotIndex: 1,
    };

    const newState = [spots[0], updatedSpot, spots[2]];

    expect(spotsReducer(spots, action)).toEqual(newState);
  });
});

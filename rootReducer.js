import { combineReducers } from 'redux';
import spotsReducer from './src/reducers/spotsReducer';

export default combineReducers({
  spots: spotsReducer,
});

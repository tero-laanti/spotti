import { combineReducers } from 'redux';
import spotsReducer from './components/spotsReducer';

export default combineReducers({
  spots: spotsReducer,
});

import { combineReducers } from 'redux'
import firesensors from '../firesensors/reducer';

const combinedReducer = combineReducers({
  firesensors
});

export default combinedReducer;

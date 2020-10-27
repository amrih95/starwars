import { combineReducers } from 'redux';
import StartshipReducer from './StartshipReducer';

const RootReducer = combineReducers({
  starships:StartshipReducer
});

export default RootReducer;

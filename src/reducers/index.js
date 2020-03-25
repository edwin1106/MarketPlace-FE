import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import asset from './asset';

export default combineReducers({
  asset,
  form:formReducer
});

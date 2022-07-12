import {combineReducers} from 'redux';
import {ThemeSlice} from './themeSlice';

export default combineReducers({
  themeReducer: ThemeSlice.reducer,
});

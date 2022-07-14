import {combineReducers} from 'redux';
import {ThemeSlice} from './themeSlice';
import {GetDataSlice} from "./getDataSlice";

export default combineReducers({
    themeReducer: ThemeSlice.reducer,
    getDataReducer: GetDataSlice.reducer
});

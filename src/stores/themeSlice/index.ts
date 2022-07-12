import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DarkLightProps} from '../../constants/globalTypes';
import {darkTheme, lightTheme} from '../../constants/themes';

interface ThemeProps {
  appTheme: DarkLightProps;
  error: null;
}

const initialState: ThemeProps = {
  appTheme: lightTheme,
  error: null,
};

export const ThemeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    chooseTheme: (state, {payload}: PayloadAction<DarkLightProps>) => {
      state.appTheme = payload;
    },
  },
});

export const {chooseTheme} = ThemeSlice.actions;

export default ThemeSlice.reducer;

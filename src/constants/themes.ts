import {Dimensions} from 'react-native';
import {DarkLightProps} from './globalTypes';

const {width, height} = Dimensions.get('window');

export const fontFamilyBold = undefined;
export const fontFamily = undefined;

export const COLORS = {
  primary: '#FFB80B',
  primaryLight: '#E8D4B092',
  primary2: '#B1BBCD',
  black: '#1a1e26',
  dark: '#1a1e26',
  night: '#14161a',
  white: '#FFF',
  white2: '#f9f6fc',
  white3: '#F0F0F0',
  white4: '#EEF1F5',
  grey: 'rgba(107,113,123,0.56)',
  red: '#B52323',

  // SPECIAL COLORS
  // orange
  CustomOrange: '#F15223',
  CustomOrange1: 'rgba(241, 82, 35, 0.8)',
  CustomOrange2: 'rgba(241, 82, 35, 0.6)',
  CustomOrange3: 'rgba(241, 82, 35, 0.4)',
  CustomOrange4: 'rgba(241, 82, 35, 0.2)',
  CustomOrange5: 'rgba(241, 82, 35, 0.1)',

  // Purple
  CustomPurple: '#5041AB',
  CustomPurple1: 'rgba(80, 65, 171, 0.8)',
  CustomPurple2: 'rgba(80, 65, 171, 0.6)',
  CustomPurple3: 'rgba(80, 65, 171, 0.4)',
  CustomPurple4: 'rgba(80, 65, 171, 0.2)',
  CustomPurple5: 'rgba(80, 65, 171, 0.1)',

  // Black
  CustomBlack: '#040415',
  CustomBlack1: 'rgba(4, 4, 21, 0.8)',
  CustomBlack2: 'rgba(4, 4, 21, 0.6)',
  CustomBlack3: 'rgba(4, 4, 21, 0.5)',
  CustomBlack4: 'rgba(4, 4, 21, 0.4)',
  CustomBlack5: 'rgba(4, 4, 21, 0.3)',
  CustomBlack6: 'rgba(4, 4, 21, 0.2)',

  // Green
  CustomGreen: '#65CF58',
  CustomGreen1: 'rgba(101, 207, 88, 0.8)',
  CustomGreen2: 'rgba(101, 207, 88, 0.6)',
  CustomGreen3: 'rgba(101, 207, 88, 0.4)',
  CustomGreen4: 'rgba(101, 207, 88, 0.2)',
  CustomGreen5: 'rgba(101, 207, 88, 0.1)',

  //brown
  CustomBrown: '#2B1108',
  CustomBrown1: 'rgba(48, 17, 8, 0.8)',
  CustomBrown2: 'rgba(48, 17, 8, 0.6)',
  CustomBrown3: 'rgba(48, 17, 8, 0.4)',
  CustomBrown4: 'rgba(48, 17, 8, 0.2)',
  CustomBrown5: 'rgba(48, 17, 8, 0.1)',

  // cream
  CustomCream: '#F7EADB',
  CustomCream1: 'rgba(247, 234, 219, 0.8)',
  CustomCream2: 'rgba(247, 234, 219, 0.6)',
  CustomCream3: 'rgba(247, 234, 219, 0.4)',
  CustomCream4: 'rgba(247, 234, 219, 0.2)',
  CustomCream5: 'rgba(247, 234, 219, 0.1)',

  // peach
  CustomPeach: '#FEDFD6',
  CustomPeach1: 'rgba(254, 223, 214, 0.8)',
  CustomPeach2: 'rgba(254, 223, 214, 0.6)',
  CustomPeach3: 'rgba(254, 223, 214, 0.4)',
  CustomPeach4: 'rgba(254, 223, 214, 0.2)',
  CustomPeach5: 'rgba(254, 223, 214, 0.1)',

  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  transparentBlack: 'rgba(0, 0, 0, 0.4)',
  transparent: 'transparent',
};
export const SIZES = {
  // global sizes
  radius: 24,
  radius2: 14,
  radius3: 8,
  padding: 24,

  // font sizes
  bigText: width * 0.12,
  largeTitle: width * 0.1,
  font1: width * 0.08,
  font2: width * 0.076,
  font3: width * 0.068,
  font4: width * 0.062,
  font5: width * 0.056,
  font6: width * 0.048,
  font7: width * 0.042,
  font8: width * 0.038,
  font9: width * 0.035,
  font10: width * 0.03,

  // app dimensions
  width,
  height,
};
export const FONTS: any = {
  bigText: {
    fontSize: SIZES.bigText,
    // fontFamily: fontFamilyBold,
    color: COLORS.black,
  },
  largeTitle: {
    fontSize: SIZES.largeTitle,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
  },
  h1: {
    fontSize: SIZES.font1,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h2: {
    fontSize: SIZES.font2,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h3: {
    fontSize: SIZES.font3,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h4: {
    fontSize: SIZES.font4,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h5: {
    fontSize: SIZES.font5,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h6: {
    fontSize: SIZES.font6,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h7: {
    fontSize: SIZES.font7,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h8: {
    fontSize: SIZES.font8,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h9: {
    fontSize: SIZES.font9,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  h10: {
    fontSize: SIZES.font10,
    fontFamily: fontFamilyBold,
    color: COLORS.black,
    fontWeight: '600',
  },
  body1: {
    fontSize: SIZES.font1,
    fontFamily,
    color: COLORS.black,
  },
  body2: {
    fontSize: SIZES.font2,
    fontFamily,
    color: COLORS.black,
  },
  body3: {
    fontSize: SIZES.font3,
    fontFamily,
    color: COLORS.black,
  },
  body4: {
    fontSize: SIZES.font4,
    fontFamily,
    color: COLORS.black,
  },
  body5: {
    fontSize: SIZES.font5,
    fontFamily,
    color: COLORS.black,
  },
  body6: {
    fontSize: SIZES.font6,
    fontFamily,
    color: COLORS.black,
  },
  body7: {
    fontSize: SIZES.font7,
    fontFamily,
    color: COLORS.black,
  },
  body8: {
    fontSize: SIZES.font8,
    fontFamily,
    color: COLORS.black,
  },
  body9: {
    fontSize: SIZES.font9,
    fontFamily,
    color: COLORS.black,
  },
  body10: {
    fontSize: SIZES.font10,
    fontFamily,
    color: COLORS.black,
  },
};

export const darkTheme: DarkLightProps = {
  name: 'dark',
  backgroundColor: COLORS.black,
  backgroundColorReverse: COLORS.white,
  backgroundColor2: COLORS.black,
  backgroundColor3: COLORS.night,
  textColor: COLORS.white,
  textColor2: COLORS.white2,
  borderColor: COLORS.white2,
};

export const lightTheme: DarkLightProps = {
  name: 'light',
  backgroundColor: COLORS.white,
  backgroundColorReverse: COLORS.black,
  backgroundColor2: COLORS.white2,
  backgroundColor3: COLORS.white4,
  textColor: COLORS.black,
  textColor2: COLORS.primary,
  borderColor: COLORS.black,
};

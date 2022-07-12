import React, {FC, memo} from 'react';
import {StatusBar, StatusBarStyle, StyleSheet, View} from 'react-native';
// import {useSelector} from 'react-redux';
import {SIZES} from '../../constants/themes';
// import {RootState} from '../../stores/store';
import Notch from '../Notch';

interface ContainerProps {
  children: object;
  barColor?: StatusBarStyle;
  style?: object;
}

const Container: FC<ContainerProps> = ({children, style}) => {
  //   const {appTheme} = useSelector((state: RootState) => state.themeReducer);
  const {container} = useStyles();

  return (
    <View style={[container, {...style}]}>
      <>
        <Notch />
        <StatusBar
          translucent={true}
          // barStyle={appTheme.name === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={'transparent'}
        />
        {children}
      </>
    </View>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: SIZES.width * 0.03,
    },
  });
};

export default memo(Container);

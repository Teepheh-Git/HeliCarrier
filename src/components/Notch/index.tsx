import React, {FC, memo} from 'react';
import {ColorValue, Platform, SafeAreaView, View} from 'react-native';
import * as Safety from 'react-native-safe-area-context';

interface NotchProps {
  color?: ColorValue | undefined;
}
const Notch: FC<NotchProps> = ({color}) => {
  return (
    <View>
      {Platform.OS === 'android' ? (
        <Safety.SafeAreaView style={{flex: 0, backgroundColor: color}} />
      ) : (
        <SafeAreaView style={{flex: 0, backgroundColor: color}} />
      )}
    </View>
  );
};

export default memo(Notch);

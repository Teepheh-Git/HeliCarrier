import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  OnBoard: undefined;
  Home: undefined;
};
export type ScreensProps = NativeStackScreenProps<RootStackParamList>;

export interface DarkLightProps {
  name: string;
  backgroundColor: string;
  backgroundColor2: string;
  backgroundColor3: string;
  textColor: string;
  textColor2: string;
  borderColor: string;
  backgroundColorReverse: string;
}

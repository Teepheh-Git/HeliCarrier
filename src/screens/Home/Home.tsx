import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Container from '../../components/Container';
import {useSelector} from 'react-redux';
import {RootState} from '../../stores/store';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const {root} = useStyles();
  return (
    <Container style={root}>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;

const useStyles = () => {
  const {appTheme} = useSelector((state: RootState) => state.themeReducer);
  return StyleSheet.create({
    root: {},
  });
};

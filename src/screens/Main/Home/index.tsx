import {StyleSheet} from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import {showPopupWithOk} from '../../../utils';
import {Button} from '../../../components/All';

type Props = {};

const Home = (props: Props) => {
  return (
    <Container title="Home">
      <Button
        title="Home"
        onPress={() => {
          showPopupWithOk('test', 'Hello test mesage');
        }}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../theme';
import Typography from '../Typography';
import Icon from '../VectorIcon';

type Props = {
  title: string;
  state: boolean;
  setState: (state: boolean) => void;
};

const Check = (props: Props) => {
  const {title, state, setState} = props;
  return (
    <View style={[commonStyles.rowCenter, commonStyles.ph20]}>
      <Icon
        icon="Fontisto"
        name={state ? 'checkbox-active' : 'checkbox-passive'}
        onPress={() => setState(!state)}
      />
      <Typography title={title} ml={10} />
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({});

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Typography from '../Typo';
import {colors, commonSty} from '../../theme';
import {moderateScale} from 'react-native-size-matters';
import {PickerData} from '../../constants/data';

const Picker = () => {
  let ITEM_HEIGHT = moderateScale(25);
  let VISIBLE_ITEM = ITEM_HEIGHT * 8;
  let perspective = 600;
  let RADIUS_RAIL = ITEM_HEIGHT * 0.5;
  let RADIUS_ITEM = RADIUS_RAIL * ITEM_HEIGHT;
  return (
    <View>
      <Typography
        title={'Picker'}
        color={colors.white}
        size={30}
        ml={35}
        mt={30}
      />
      <ScrollView>
        <View
          style={{
            height: VISIBLE_ITEM,
            overflow: 'hidden',
          }}>
          {PickerData?.map((item, ind) => {
            return (
              <View style={[commonSty.selfCenter, {height: moderateScale(25)}]}>
                <Typography
                  title={item?.number}
                  color={colors.white}
                  txtStyle={{
                    lineHeight: ITEM_HEIGHT,
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({});

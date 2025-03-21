import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {commonSty} from '../../../theme';
import Header from '../../../components/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {MiniProducts} from '../Home/components';
import Typography from '../../../components/Typo';

const ViewCart = () => {
  const selectedProduct = useSelector(
    (state: RootState) => state.main.selectedProduct,
  );
  const renderEmptyComponent = () => {
    return <Typography title={'No Data Found'} mt={100} size={24} />;
  };
  return (
    <View style={commonSty.mainContainer}>
      <Header title="View Cart" showBack />
      <View>
        <FlatList
          data={selectedProduct}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={[commonSty.ph10, commonSty.pb100]}
          renderItem={({item}) => {
            return <MiniProducts item={item} key={item.id} />;
          }}
        />
      </View>
    </View>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});

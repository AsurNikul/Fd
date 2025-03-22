import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {commonStyles} from '../../../theme';
import Header from '../../../components/Header';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {MiniProducts} from '../Home/components';
import Typography from '../../../components/Typography';

const ViewCart = () => {
  const selectedProduct = useSelector(
    (state: RootState) => state.main.selectedProduct,
  );
  const renderEmptyComponent = () => {
    return <Typography title={'No Data Found'} mt={100} size={24} />;
  };
  return (
    <View style={commonStyles.mainContainer}>
      <Header title="View Cart" showBack />
      <View>
        <FlatList
          data={selectedProduct}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={[commonStyles.ph10, commonStyles.pb100]}
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

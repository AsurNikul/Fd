import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Typography from '../../../../components/Typography';
import styles from './styles';
import {MiniProductsProps} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../../../redux/MainSlice';
import {RootState} from '../../../../redux/store';

const MiniProducts = (props: MiniProductsProps) => {
  const {item} = props;

  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state: RootState) => state.main.selectedProduct,
  );
  const handleAddToCart = () => dispatch(addProductToCart(item));

  const handleRemoveProductFromCart = () =>
    dispatch(removeProductFromCart(item));

  const isAdded = selectedProduct.some(
    (i: MiniProductsProps['item']) => i.id === item.id,
  );
  const handleCart = () => {
    isAdded ? handleRemoveProductFromCart() : handleAddToCart();
  };
  return (
    <View style={styles.mainContainer}>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.imageStyle}
      />
      <Typography title={`Name : ${item.title}`} size={12} numberOfLines={2} />
      <Typography
        title={`Description : ${item.description}`}
        mt={3}
        mb={3}
        size={12}
        numberOfLines={3}
        lh={17}
      />
      <Typography title={`Category : ${item.category}`} size={12} mb={5} />
      <Typography title={`Rating : ${item.rating.rate}`} size={12} />
      <TouchableOpacity style={styles.addToCartContainer} onPress={handleCart}>
        <Typography
          title={isAdded ? 'Remove from cart' : 'Add to Cart'}
          size={14}
          txtStyle={styles.addTxtStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MiniProducts;

import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {callAPI} from '../../../utils/Func';
import {GET_PRODUCTS} from '../../../constants/API';
import {commonSty} from '../../../theme';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import {MiniProducts} from './components';
import {InputText} from '../../../components/All';
import {Images} from '../../../constants';
import {navigate} from '../../../utils/NavigationServices';
import SCREENS from '../../../navigators/route';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Typography from '../../../components/Typo';

const Home = () => {
  const selectedProduct = useSelector(
    (state: RootState) => state.main.selectedProduct,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    setLoading(true);
    try {
      const response = await callAPI(GET_PRODUCTS, 'GET');
      setProductData(response.data);
      setTempData(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const handleSearchText = (txt: string) => {
    setProductData(
      tempData.filter(item =>
        item.title.toLowerCase().includes(txt.toLowerCase()),
      ),
    );
    setSearchText(txt);
  };
  const handleNavigate = () => navigate(SCREENS.ViewCart);

  const renderEmptyComponent = () => {
    if (!loading) {
      return <Typography title={'No Data Found'} mt={100} size={25} />;
    }
    return null;
  };

  return (
    <View style={commonSty.mainContainer}>
      <Header
        title="Home"
        rightIcon={Images.cart}
        onRightPress={handleNavigate}
        productData={selectedProduct}
      />
      <InputText
        value={searchText}
        onChangeText={handleSearchText}
        placeholder="Search Here Product Name"
        leftIcon={Images.search}
      />
      {loading && <Loader />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={productData}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={[commonSty.ph10, commonSty.pb100]}
          renderItem={({item}) => {
            return <MiniProducts item={item} key={item.id} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

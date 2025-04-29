import {FlatList, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {callAPI} from '../../../utils/Func';
import {GET_CATEGORY, GET_PRODUCTS} from '../../../constants/API';
import {commonStyles} from '../../../theme';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import {MiniProducts} from './components';
import {InputText, TopBar, Typography} from '../../../components';
import {Images, Routes} from '../../../constants';
import {navigate} from '../../../utils';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {itemProp} from '../../../components/Tabs/types';
import styles from './styles';

const Home = () => {
  const selectedProduct = useSelector(
    (state: RootState) => state.main.selectedProduct,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [tempData, setTempData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<itemProp>({
    id: 1,
    title: 'electronics',
  });

  useEffect(() => {
    getCategory();
    getProductData();
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      getProductData();
    }
  }, [selectedCategory]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const response = await callAPI(
        `${GET_PRODUCTS}${selectedCategory.title}`,
        'GET',
      );
      setProductData(response.data);
      setTempData(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const getCategory = async () => {
    setLoading(true);
    try {
      const response = await callAPI(GET_CATEGORY, 'GET');
      const data = response.data.map((item: any, ind: number) => ({
        id: ind + 1,
        title: item,
      }));
      setCategory(data);
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
  const handleNavigate = () => navigate(Routes.ViewCart);

  const renderEmptyComponent = () => {
    if (!loading) {
      return (
        <Typography title={'No Data Found'} mt={100} size={25} align="center" />
      );
    }
    return null;
  };

  return (
    <View style={commonStyles.mainContainer}>
      <Header
        title="Home"
        rightIcon={Images.cart}
        onRightPress={handleNavigate}
        productData={selectedProduct}
        isLogout
        showBack
      />
      <InputText
        value={searchText}
        onChangeText={handleSearchText}
        placeholder="Search Here Product Name"
        leftIcon={Images.search}
      />
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <TopBar
            data={category}
            selectedTab={selectedCategory}
            setSelectedTab={setSelectedCategory}
          />
        </View>
        {loading && <Loader />}
        <View style={styles.listContainer}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
            <FlatList
              data={productData}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled
              ListEmptyComponent={renderEmptyComponent}
              contentContainerStyle={[commonStyles.ph10, commonStyles.pb100]}
              renderItem={({item}) => {
                return <MiniProducts item={item} key={item.id} />;
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

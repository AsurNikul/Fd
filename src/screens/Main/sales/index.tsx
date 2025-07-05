import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../../components/Container';
import {
  apiCall,
  navigate,
  showPopupWithOk,
  showPopupWithOkAndCancel,
} from '../../../utils';
import {Images, Routes} from '../../../constants';
import {Loader, Typography, VectorIcon} from '../../../components/All';
import {colors, commonStyles} from '../../../theme';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ALL_BATCHES, DELETE_BATCH, SALES} from '../../../Services/API';
import moment from 'moment';
import {FilterModal} from '../Home/components';
import MiniSales from './components/MiniSales';

const Home = () => {
  const navigation = useNavigation<any>();
  const focus = useIsFocused();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterModal, setFilterModal] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [mainData, setMainData] = useState<any>([]);
  console.log('🚀 ~ Home ~ mainData:', mainData);
  const [bottomLoading, setBottomLoading] = useState(false);
  let timer: any;

  useEffect(() => {
    if (focus) {
      getAllBatches();
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getAllBatches = async (tempPage?: number) => {
    const finalPage = tempPage ? tempPage : page;
    if (finalPage > 1) {
      setBottomLoading(true);
    } else {
      setLoading(true);
    }
    const url = await apiCall(`${SALES}?page=${finalPage}&per_page=5`, 'GET')
      .then(res => {
        setMainData(res);
        if (finalPage === 1) {
          // Replace data for first page
          setData(res?.data);
        } else {
          // Append data for next pages
          setData(prevData => [...prevData, ...res?.data]);
        }
      })
      .finally(() => {
        setLoading(false);
        setBottomLoading(false);
      });
  };

  const handleEndReach = async () => {
    const tempPage = page + 1;
    if (
      tempPage <= mainData?.pagination?.total_pages &&
      !loading &&
      !bottomLoading
    ) {
      setPage(prev => prev + 1);
      await getAllBatches(tempPage);
    }
  };
  const toggleDrawer = () => navigation.openDrawer();
  const handleOpenFilterModal = () => setFilterModal(true);
  const handleCloseFilterModal = () => setFilterModal(false);
  const handleApplyFilter = (data: any) => {
    setFilterModal(false);
    navigate(Routes.FilteredBatches, {data, isSales: true});
  };
  const onDeletePress = (id?: any) => {
    showPopupWithOkAndCancel(
      'Globex Spintex',
      'Are you sure you want to delete this batch?',
      () => handleDeleteBatch(id),
    );
  };
  const handleDeleteBatch = async (id?: any) => {
    setLoading(true);
    apiCall(`${SALES}/${id}`, 'DELETE')
      .then(async res => {
        showPopupWithOk(
          'Success',
          'Sales Record deleted successfully',
          () => {},
        );
        setPage(1);
        timer = setTimeout(async () => {
          await getAllBatches(1);
        }, 300);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container
      title="Sales"
      showLeftIcon
      onRightPress={handleOpenFilterModal}
      rightIcon={Images.filter}>
      <Loader visible={loading} />
      <View style={commonStyles.flex}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={[commonStyles.pb100]}
          onEndReachedThreshold={0.4}
          onEndReached={handleEndReach}
          ListFooterComponent={() => {
            return bottomLoading ? (
              <ActivityIndicator
                color={colors.primary}
                size={'large'}
                style={commonStyles.mt25}
              />
            ) : null;
          }}
          ListEmptyComponent={() => {
            return (
              <Typography
                title="No Data Found"
                fontWeight="600"
                mt={100}
                size={28}
              />
            );
          }}
          renderItem={({item, index}) => {
            return <MiniSales item={item} />;
          }}
        />
      </View>
      <FilterModal
        visible={filterModal}
        onRequestClose={handleCloseFilterModal}
        onApplyPress={handleApplyFilter}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerLeftImg: {
    width: '15%',
    alignItems: 'center',
  },
});

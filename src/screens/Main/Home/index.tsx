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
import {FilterModal, MiniProducts} from './components';
import {Loader, Typography, VectorIcon} from '../../../components/All';
import {colors, commonStyles} from '../../../theme';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {ALL_BATCHES, DELETE_BATCH} from '../../../Services/API';
import moment from 'moment';

const Home = () => {
  const navigation = useNavigation<any>();
  const focus = useIsFocused();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterModal, setFilterModal] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [mainData, setMainData] = useState<any>([]);
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
    await apiCall(
      `${ALL_BATCHES}?page=${finalPage}&per_page=5&from_date=${moment().format(
        'YYYY-MM-DD',
      )}&&to_date=${moment().format('YYYY-MM-DD')}`,
      'GET',
    )
      .then(res => {
        setMainData(res);
        if (finalPage === 1) {
          // Replace data for first page
          setData(res?.batches);
        } else {
          // Append data for next pages
          setData(prevData => [...prevData, ...res?.batches]);
        }
      })
      .finally(() => {
        setLoading(false);
        setBottomLoading(false);
      });
  };

  const renderLeft = () => {
    return (
      <TouchableOpacity style={styles.headerLeftImg} onPress={toggleDrawer}>
        <VectorIcon
          name="menu"
          icon="Entypo"
          color={colors.white}
          onPress={toggleDrawer}
        />
      </TouchableOpacity>
    );
  };
  const handleEndReach = async () => {
    const tempPage = page + 1;
    if (tempPage <= mainData?.total_pages && !loading && !bottomLoading) {
      setPage(prev => prev + 1);
      await getAllBatches(tempPage);
    }
  };
  const toggleDrawer = () => navigation.openDrawer();
  const handleOpenFilterModal = () => setFilterModal(true);
  const handleCloseFilterModal = () => setFilterModal(false);
  const handleApplyFilter = (data: any) => {
    setFilterModal(false);
    navigate(Routes.FilteredBatches, {data});
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
    apiCall(`${DELETE_BATCH}${id}`, 'DELETE')
      .then(async res => {
        showPopupWithOk('Success', 'Batch deleted successfully', () => {});
        setPage(1);
        timer = setTimeout(async () => {
          await getAllBatches(1);
        }, 300);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container
      title="Home"
      rightIcon={Images.filter}
      renderLeftIcon={renderLeft}
      onRightPress={handleOpenFilterModal}>
      <Loader visible={loading} />
      {data?.length > 0 && (
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
              return (
                <MiniProducts
                  item={item}
                  handleDeleteBatch={() => onDeletePress(item?.id)}
                />
              );
            }}
          />
        </View>
      )}
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

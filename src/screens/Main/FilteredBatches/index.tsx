import {ActivityIndicator, FlatList, Linking, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../../components/Container';
import {useSelector} from 'react-redux';
import {getBatchData} from '../../../redux/customSelector';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {Images} from '../../../constants';
import {colors, commonStyles} from '../../../theme';
import Typography from '../../../components/Typography';
import {FilterModal, MiniProducts} from '../Home/components';
import Button from '../../../components/button';
import {
  ALL_BATCHES,
  DELETE_BATCH,
  FILTERED_BATCH_PDF,
  SALES,
} from '../../../Services/API';
import moment from 'moment';
import {
  apiCall,
  showPopupWithOk,
  showPopupWithOkAndCancel,
} from '../../../utils';
import Loader from '../../../components/Loader';
import MiniSales from '../sales/components/MiniSales';

const FilteredBatches = () => {
  const routeData = useRoute<any>().params?.data;
  const isSales = useRoute<any>().params?.isSales;
  const allBatches = useSelector(getBatchData);
  const focus = useIsFocused();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredBatches, setFilteredBatches] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [mainData, setMainData] = useState<any>([]);
  const [bottomLoading, setBottomLoading] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [filterValues, setFilterValues] = useState<any>({
    startDate: routeData?.startDate,
    endDate: routeData?.endDate,
  });
  const handleOpenFilterModal = () => setShowFilterModal(true);
  let timer: any;

  useEffect(() => {
    if (focus) {
      getAllBatches(page, routeData?.startDate, routeData?.endDate);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getAllBatches = async (
    tempPage?: number,
    startDate?: any,
    endDate?: any,
  ) => {
    const finalPage = tempPage ? tempPage : page;
    if (finalPage > 1) {
      setBottomLoading(true);
    } else {
      setLoading(true);
    }
    const url = isSales ? SALES : ALL_BATCHES;
    await apiCall(
      `${url}?page=${finalPage}&per_page=5&from_date=${moment(startDate).format(
        'YYYY-MM-DD',
      )}&to_date=${moment(endDate).format('YYYY-MM-DD')}`,
      'GET',
    )
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
      .catch(() => {
        setData([]);
        setMainData({});
        setPage(1);
      })
      .finally(() => {
        setLoading(false);
        setBottomLoading(false);
      });
  };

  const handleApplyFilter = async (filterValues: {
    startDate: Date;
    endDate: Date;
  }) => {
    setFilterValues(filterValues);
    setShowFilterModal(false);
    timer = setTimeout(async () => {
      await getAllBatches(1, filterValues.startDate, filterValues.endDate);
    }, 300);
  };
  const handleEndReach = async () => {
    const tempPage = page + 1;
    if (
      tempPage <= mainData?.pagination?.total_pages &&
      !loading &&
      !bottomLoading
    ) {
      setPage(prev => prev + 1);
      await getAllBatches(
        tempPage,
        filterValues?.startDate,
        filterValues?.endDate,
      );
    }
  };
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const handlePDF = async () => {
    setLoading(true);
    await apiCall(
      `${FILTERED_BATCH_PDF}?from_date=${moment(filterValues.startDate).format(
        'YYYY-MM-DD',
      )}&to_date=${moment(filterValues.endDate).format('YYYY-MM-DD')}`,
      'GET',
    )
      .then(res => {
        console.log(res, 'res');
        Linking.openURL(res?.pdf_url);
      })
      .catch(err => {
        console.log(err, 'err');
      })
      .finally(() => setLoading(false));
  };
  const onDeletePress = (id?: any) => {
    showPopupWithOkAndCancel(
      'Globex Spintex',
      `Are you sure you want to delete this ${
        isSales ? 'Sales record' : 'batch'
      }?`,
      () => handleDeleteBatch(id),
    );
  };
  const handleDeleteBatch = async (id?: any) => {
    setLoading(true);
    const url = isSales ? `${SALES}/${id}` : `${DELETE_BATCH}${id}`;
    apiCall(url, 'DELETE')
      .then(async res => {
        showPopupWithOk(
          'Success',
          'Sales Record deleted successfully',
          () => {},
        );
        setPage(1);
        timer = setTimeout(async () => {
          await getAllBatches(
            1,
            filterValues?.startDate,
            filterValues?.endDate,
          );
        }, 300);
      })
      .finally(() => setLoading(false));
  };
  const renderItem = ({item}) => {
    if (isSales) {
      return (
        <MiniSales
          item={item}
          handleDeleteBatch={() => onDeletePress(item?.id)}
        />
      );
    } else {
      return (
        <MiniProducts
          item={item}
          handleDeleteBatch={() => onDeletePress(item?.id)}
        />
      );
    }
  };

  return (
    <Container
      title={isSales ? 'Filtered Sales' : 'Filtered Batches'}
      showLeftIcon
      rightIcon={Images.filter}
      onRightPress={handleOpenFilterModal}>
      <Loader visible={loading} />
      {data.length > 0 ? (
        <View style={{flex: 0.95}}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={[commonStyles.pb100]}
            onEndReached={handleEndReach}
            onEndReachedThreshold={0.4}
            ListEmptyComponent={() => (
              <Typography
                title="No Data Found"
                fontWeight="600"
                mt={100}
                size={28}
              />
            )}
            ListFooterComponent={() => {
              return bottomLoading ? (
                <ActivityIndicator
                  color={colors.primary}
                  size={'large'}
                  style={commonStyles.mt25}
                />
              ) : null;
            }}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <View style={{flex: 0.95}}>
          {!loading && (
            <Typography
              title="No Data Found"
              fontWeight="600"
              mt={100}
              size={28}
            />
          )}
        </View>
      )}
      {!isSales && <Button title="Export" onPress={handlePDF} />}
      <FilterModal
        visible={showFilterModal}
        onApplyPress={handleApplyFilter}
        onRequestClose={handleCloseFilterModal}
      />
    </Container>
  );
};

export default FilteredBatches;

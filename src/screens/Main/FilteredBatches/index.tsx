import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../../components/Container';
import {useSelector} from 'react-redux';
import {getBatchData} from '../../../redux/customSelector';
import {useRoute} from '@react-navigation/native';
import {Images} from '../../../constants';
import {commonStyles} from '../../../theme';
import Typography from '../../../components/Typography';
import {FilterModal, MiniProducts} from '../Home/components';

const FilteredBatches = () => {
  const routeData = useRoute<any>().params?.item;
  const allBatches = useSelector(getBatchData);
  const [filteredBatches, setFilteredBatches] = useState<any>([]);

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const handleOpenFilterModal = () => setShowFilterModal(true);

  const filterBatches = (startDate: Date, endDate: Date) => {
    const result = allBatches.filter((item: any) => {
      return item.date >= startDate && item.date <= endDate;
    });
    setFilteredBatches(result);
  };

  useEffect(() => {
    if (routeData?.startDate && routeData?.endDate) {
      filterBatches(routeData.startDate, routeData.endDate);
    }
  }, [allBatches, routeData]);

  const handleApplyFilter = (filterValues: {
    startDate: Date;
    endDate: Date;
  }) => {
    filterBatches(filterValues.startDate, filterValues.endDate);
    setShowFilterModal(false);
  };

  return (
    <Container
      title="Filtered Batches"
      showLeftIcon
      rightIcon={Images.filter}
      onRightPress={handleOpenFilterModal}>
      <FlatList
        data={filteredBatches}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={[commonStyles.pb100]}
        ListEmptyComponent={() => (
          <Typography
            title="No Data Found"
            fontWeight="600"
            mt={100}
            size={28}
          />
        )}
        renderItem={({item}) => <MiniProducts item={item} />}
      />
      <FilterModal visible={showFilterModal} onApplyPress={handleApplyFilter} />
    </Container>
  );
};

export default FilteredBatches;

import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../../components/Container';
import {navigate} from '../../../utils';
import {Images, Routes} from '../../../constants';
import {useSelector} from 'react-redux';
import {getBatchData} from '../../../redux/customSelector';
import {FilterModal, MiniProducts} from './components';
import {Typography, VectorIcon} from '../../../components/All';
import {colors, commonStyles} from '../../../theme';

const Home = () => {
  const batchData = useSelector(getBatchData);
  const handleAddCard = () => navigate(Routes.AddCard);
  const [filterModal, setFilterModal] = useState(false);

  const renderLeft = () => {
    return (
      <TouchableOpacity
        style={styles.headerLeftImg}
        onPress={handleOpenFilterModal}>
        <VectorIcon
          name="filter-plus-outline"
          icon="MaterialCommunityIcons"
          color={colors.white}
          onPress={handleOpenFilterModal}
        />
      </TouchableOpacity>
    );
  };
  const handleOpenFilterModal = () => setFilterModal(true);
  const handleCloseFilterModal = () => setFilterModal(false);
  const handleApplyFilter = (data: any) => {
    setFilterModal(false);
    navigate(Routes.FilteredBatches, {data});
  };
  return (
    <Container
      title="Home"
      rightIcon={Images.plus}
      renderLeftIcon={renderLeft}
      onRightPress={handleAddCard}>
      <View style={commonStyles.flex}>
        <FlatList
          data={batchData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={[commonStyles.pb100]}
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
            return <MiniProducts item={item} />;
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

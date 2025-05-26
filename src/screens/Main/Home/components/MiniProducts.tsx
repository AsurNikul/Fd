import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Typography from '../../../../components/Typography';
import styles from './styles';
import {VectorIcon} from '../../../../components/All';
import {colors, commonStyles} from '../../../../theme';
import moment from 'moment';
import {navigate} from '../../../../utils';
import {Routes} from '../../../../constants';
import {useSelector} from 'react-redux';
import {getAuth} from '../../../../redux';

interface MiniProductsProps {
  item: any;
  handleDeleteBatch?: (id?: any) => void;
}
const MiniProducts = (props: MiniProductsProps) => {
  const {item, handleDeleteBatch} = props;
  const inTime = moment(item?.in_time);
  const outTime = moment(item?.out_time);
  const user = useSelector(getAuth);

  const duration = moment.duration(outTime.diff(inTime));
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  const difference = `${hours}:${minutes} Hour`;

  const onEditPress = () => navigate(Routes.AddCard, {item});
  const isAdmin =
    user?.user?.role === 'administrator' || user?.user?.role === 'manager';

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeaderContainer}>
        <View style={commonStyles.rowCenter}>
          <VectorIcon
            name="CodeSandbox"
            icon="AntDesign"
            color={colors.white}
          />
          <Typography
            title={`Batch No : ${item?.batch_number}`}
            color={colors.white}
            ml={10}
          />
        </View>
      </View>
      <View>
        <View style={styles.rawContainer}>
          <Typography
            title={'Raw Material'}
            size={15}
            color={colors.charcoalGrey}
          />
          <Typography
            title={`${item?.raw_material} KG`}
            size={15}
            mt={3}
            fontWeight="600"
          />
        </View>
        {/* <View style={styles.rawContainer}>
          <Typography title={'Sales'} size={13} color={colors.charcoalGrey} />
          <Typography title={item?.sale} size={15} mt={3} fontWeight="600" />
        </View> */}
      </View>
      <View style={[commonStyles.ph20]}>
        <View style={[commonStyles.rowCenter, commonStyles.mb15]}>
          <VectorIcon
            icon="Ionicons"
            name="time-outline"
            color={colors.charcoalGrey}
          />
          <View style={commonStyles.ml10}>
            <Typography
              title={'Total Time '}
              color={colors.charcoalGrey}
              size={13}
            />
            <Typography title={difference} fontWeight="600" size={15} mt={4} />
          </View>
        </View>
        <View
          style={[
            commonStyles.rowSpaceBetween,
            commonStyles.pr25,
            commonStyles.pl5,
          ]}>
          <View style={[commonStyles.rowCenter]}>
            <View style={styles.startTime} />
            <View style={commonStyles.ml10}>
              <Typography
                title={'In Time'}
                color={colors.charcoalGrey}
                size={15}
              />
              <Typography
                title={moment(item?.in_time).format('h:mm A')}
                fontWeight="600"
                size={13}
                mt={4}
              />
            </View>
          </View>
          <View style={[commonStyles.rowCenter]}>
            <View style={styles.endTime} />
            <View style={commonStyles.ml10}>
              <Typography
                title={'Out Time'}
                color={colors.charcoalGrey}
                size={15}
              />
              <Typography
                title={moment(item?.out_time).format('h:mm A')}
                fontWeight="600"
                size={13}
                mt={4}
              />
            </View>
          </View>
        </View>
        <View style={styles.border} />
        <View
          style={[
            commonStyles.rowCenter,
            commonStyles.ml5,
            !isAdmin && commonStyles.pb15,
          ]}>
          <VectorIcon name="calendar" icon="AntDesign" size={16} />
          <Typography
            title={moment(item?.created_at).format('DD MMM YYYY')}
            size={15}
            ml={10}
          />
        </View>
      </View>
      {isAdmin && (
        <>
          <View style={styles.fullBorder} />
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.footerSubContainer}
              activeOpacity={0.7}
              onPress={onEditPress}>
              <VectorIcon
                name="edit-2"
                icon="Feather"
                size={16}
                color={colors.primary}
                onPress={onEditPress}
              />
              <Typography
                title={'Edit'}
                size={15}
                ml={10}
                color={colors.primary}
              />
            </TouchableOpacity>
            <View style={styles.footerBorder} />
            <TouchableOpacity
              style={styles.footerSubContainer}
              onPress={handleDeleteBatch}>
              <VectorIcon
                name="delete"
                icon="AntDesign"
                size={16}
                color={colors.red}
                onPress={handleDeleteBatch}
              />
              <Typography
                title={'Delete'}
                size={15}
                ml={10}
                mr={10}
                color={colors.red}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default MiniProducts;

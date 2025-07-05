import {StyleSheet, TouchableOpacity, View} from 'react-native';
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

const MiniSales = (props: MiniProductsProps) => {
  const {item, handleDeleteBatch} = props;
  const user = useSelector(getAuth);

  const isAdmin =
    user?.user?.role === 'administrator' || user?.user?.role === 'manager';

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.dateContainer, commonStyles.mt20]}>
        <Typography
          title={'Raw Material'}
          size={15}
          color={colors.charcoalGrey}
        />
        <Typography
          title={`${item?.raw_material || '2222'} KG`}
          size={15}
          fontWeight="600"
        />
      </View>
      <View style={[styles.dateContainer, commonStyles.mb10]}>
        <Typography title={'Date'} size={15} color={colors.charcoalGrey} />
        <Typography
          title={moment(item?.sales_date).format('DD MMM YYYY')} // Static date as in image: 03 Jul 2025
          size={15}
          ml={10}
        />
      </View>
      {isAdmin && (
        <>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: colors.quillGrey,
            }}
          />
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.footerSubContainer}
              activeOpacity={0.7}
              onPress={() => navigate(Routes.AddSales, {item})}>
              <VectorIcon
                name="edit-2"
                icon="Feather"
                size={16}
                color={colors.primary}
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

export default MiniSales;

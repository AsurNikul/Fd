import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, commonStyles} from '../theme';
import Typography from '../components/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {getAuth, removeAllBatch, setCredentials} from '../redux';
import {ms, s} from 'react-native-size-matters';
import {VectorIcon} from '../components/All';
import {navigate, showPopupWithOkAndCancel} from '../utils';
import {Routes} from '../constants';

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const user = useSelector(getAuth);
  const handleLogout = () => {
    const data = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
    showPopupWithOkAndCancel(
      'Globex Spintex',
      'Are you sure you want to logout?',
      () => {
        dispatch(setCredentials(data));
        dispatch(removeAllBatch());
      },
    );
  };
  const handleAddBatch = () => navigate(Routes.AddCard);
  const handleAddUsers = () => navigate(Routes.REGISTER);
  const handleViewUsers = () => navigate(Routes.Users);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={commonStyles.pl15}>
        <View style={styles.userContainer}>
          <Typography
            title={`${user?.username}` || 'Test User'}
            color={colors.primary}
            mb={5}
            fontWeight="700"
          />
          <Typography
            title={`${user?.email || ''}`}
            color={colors.primary}
            fontWeight="700"
          />
        </View>
        <TouchableOpacity style={styles.drawerItem} onPress={handleViewUsers}>
          <VectorIcon icon="Feather" name="users" color={colors.primary} />
          <Typography title={'Users'} color={colors.primary} ml={10} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={handleAddUsers}>
          <VectorIcon
            icon="AntDesign"
            name="addusergroup"
            color={colors.primary}
          />
          <Typography title={'Add Users'} color={colors.primary} ml={10} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={handleAddBatch}>
          <VectorIcon icon="AntDesign" name="plus" color={colors.primary} />
          <Typography title={'Add Batch'} color={colors.primary} ml={10} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={handleLogout}>
          <VectorIcon
            icon="MaterialIcons"
            name="logout"
            color={colors.primary}
          />
          <Typography title={'Logout'} color={colors.primary} ml={10} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.mainContainer,
    backgroundColor: colors.primary,
    alignItems: 'flex-start',
  },
  userContainer: {
    width: s(190),
    backgroundColor: colors.white,
    borderRadius: ms(10),
    ...commonStyles.itemsStart,
    padding: ms(10),
    ...commonStyles.mt20,
  },
  drawerItem: {
    ...commonStyles.rowCenter,
    backgroundColor: colors.white,
    width: s(190),
    padding: ms(10),
    borderRadius: ms(10),
    marginTop: ms(10),
  },
});

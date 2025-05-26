import {FlatList, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../../components/Container';
import {apiCall, navigate} from '../../../utils';
import {Images, Routes} from '../../../constants';
import {colors, commonStyles} from '../../../theme';
import Typography from '../../../components/Typography';
import {Loader, VectorIcon} from '../../../components/All';
import {useSelector} from 'react-redux';
import {getUserList} from '../../../redux';
import styles from './styles';
import {useIsFocused} from '@react-navigation/native';
import {GET_ALL_USERS} from '../../../Services/API';

const Users = () => {
  const userList = useSelector(getUserList);
  const focus = useIsFocused();
  const handleAddUser = () => navigate(Routes.REGISTER);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (focus) {
      getAllUsers();
    }
  }, [focus]);

  const getAllUsers = async () => {
    setLoading(true);
    await apiCall(GET_ALL_USERS, 'GET')
      .then(res => setData(res?.users))
      .finally(() => setLoading(false));
  };

  const renderUserList = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.userListItem}
        onPress={() => navigate(Routes.REGISTER, {item})}>
        <View>
          <Typography
            title={item?.first_name + ' ' + item?.last_name || ''}
            fontWeight="500"
          />
          <Typography
            title={item?.email || ''}
            size={16}
            mt={2}
            color={colors.smokyGrey}
          />
          <Typography
            title={`Role : ${item?.roles?.length > 0 ? item?.roles[0] : ''}`}
            fontWeight="500"
            size={16}
            mt={2}
            color={colors.smokyGrey}
          />
          <Typography
            title={`Mobile Number : ${item?.mobile_number || ''}`}
            fontWeight="500"
            size={16}
            mt={2}
            color={colors.smokyGrey}
          />
        </View>
        <VectorIcon icon="AntDesign" name="right" color={colors.smokyGrey} />
      </TouchableOpacity>
    );
  };
  return (
    <Container
      title="User List"
      showLeftIcon
      rightIcon={Images.plus}
      onRightPress={handleAddUser}>
      <Loader visible={loading} />
      <View style={commonStyles.flex}>
        {data?.length > 0 && (
          <FlatList
            data={data}
            renderItem={renderUserList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={commonStyles.pb100}
          />
        )}
      </View>
    </Container>
  );
};

export default Users;

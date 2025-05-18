import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../../../components/Container';
import {navigate} from '../../../utils';
import {Images, Routes} from '../../../constants';
import {colors} from '../../../theme';
import Typography from '../../../components/Typography';
import {VectorIcon} from '../../../components/All';
import {useSelector} from 'react-redux';
import {getUserList} from '../../../redux';
import styles from './styles';

const Users = () => {
  const userList = useSelector(getUserList);
  const handleAddUser = () => navigate(Routes.REGISTER);

  const renderUserList = ({item}) => {
    return (
      <TouchableOpacity style={styles.userListItem}>
        <View>
          <Typography title={item.username} fontWeight="500" />
          <Typography
            title={item?.email}
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
      <FlatList
        data={userList}
        renderItem={renderUserList}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Users;

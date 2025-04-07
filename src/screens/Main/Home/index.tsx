// import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {callAPI} from '../../../utils/Func';
// import {GET_PRODUCTS} from '../../../constants/API';
// import {commonStyles} from '../../../theme';
// import Header from '../../../components/Header';
// import Loader from '../../../components/Loader';
// import {MiniProducts} from './components';
// import {InputText} from '../../../components/All';
// import {Images} from '../../../constants';
// import {navigate} from '../../../utils/navigationServices';
// import SCREENS from '../../../navigators/route';
// import {useSelector} from 'react-redux';
// import {RootState} from '../../../redux/store';
// import Typography from '../../../components/Typography';

// const Home = () => {
//   const selectedProduct = useSelector(
//     (state: RootState) => state.main.selectedProduct,
//   );
//   const [loading, setLoading] = useState<boolean>(false);
//   const [productData, setProductData] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [tempData, setTempData] = useState([]);

//   useEffect(() => {
//     getProductData();
//   }, []);

//   const getProductData = async () => {
//     setLoading(true);
//     try {
//       const response = await callAPI(GET_PRODUCTS, 'GET');
//       setProductData(response.data);
//       setTempData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };
//   const handleSearchText = (txt: string) => {
//     setProductData(
//       tempData.filter(item =>
//         item.title.toLowerCase().includes(txt.toLowerCase()),
//       ),
//     );
//     setSearchText(txt);
//   };
//   const handleNavigate = () => navigate(SCREENS.ViewCart);

//   const renderEmptyComponent = () => {
//     if (!loading) {
//       return <Typography title={'No Data Found'} mt={100} size={25} />;
//     }
//     return null;
//   };

//   return (
//     <View style={commonStyles.mainContainer}>
//       <Header
//         title="Home"
//         rightIcon={Images.cart}
//         onRightPress={handleNavigate}
//         productData={selectedProduct}
//       />
//       <InputText
//         value={searchText}
//         onChangeText={handleSearchText}
//         placeholder="Search Here Product Name"
//         leftIcon={Images.search}
//       />
//       {loading && <Loader />}
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <FlatList
//           data={productData}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyComponent}
//           contentContainerStyle={[commonStyles.ph10, commonStyles.pb100]}
//           renderItem={({item}) => {
//             return <MiniProducts item={item} key={item.id} />;
//           }}
//         />
//       </ScrollView>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {FC, useMemo, useRef, useState} from 'react';
import {colors, commonStyles} from '../../../theme';
import Container from '../../../components/Container';
import {
  Button,
  InputText,
  PickerSheet,
  Typography,
  VectorIcon,
} from '../../../components/All';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {Images} from '../../../constants';
import {moderateScale} from 'react-native-size-matters';
import {IconType} from '../../../components/VectorIcon';
import Sheet from '../../../components/Sheet';

type Props = {};

const Home = (props: Props) => {
  const commentSheet = useRef<ActionSheetRef>(null);

  const handleOpenCommentSheet = () => {
    if (commentSheet.current) {
      commentSheet.current?.show();
    }
  };

  const handleCloseCommentSheet = () => {
    if (commentSheet.current) {
      commentSheet.current?.hide();
    }
  };
  return (
    <Container title="Home" isScroll>
      <View style={styles.containerStyle}>
        {/* Header */}
        <View style={commonStyles.rowCenter}>
          <VectorIcon
            icon="MaterialCommunityIcons"
            name="face-man-profile"
            size={40}
          />
          <View style={styles.textContainer}>
            <Typography title={'Nikul Solanki'} size={13} />
            <Typography
              title={'React Native Developer'}
              size={11}
              color={colors.silver}
            />
            <Typography
              title={'19 Minutes Edited'}
              size={11}
              color={colors.silver}
            />
          </View>
          <View style={commonStyles.rowCenter}>
            <Image
              resizeMode="contain"
              source={Images.plus}
              style={styles.connectIcon}
            />
            <Typography
              title={'Connect'}
              color={colors.navyBlue}
              ml={3}
              size={14}
            />
          </View>
        </View>
        {/* Body */}
        <View style={commonStyles.mv15}>
          <Typography title={'Turka Technology is hiring'} size={14} />
          <Typography
            title={'Send your CVs to sanket.spaceo@gmail.com'}
            size={14}
            mv={20}
          />
          <Typography
            title={
              '👉 hashtag#HTML_Developer (3 to 4 Years) \n 👉 hashtag#iOSDeveloper (2 to 4 Years) - Immediate hiring \n👉 hashtag#ReactNativeDeveloper (2 to 3 Yeas) - Immediate hiring '
            }
            size={12}
          />
          <Typography
            title={'Location : hashtag#Ahmedabad (On site)'}
            size={12}
            mv={15}
          />
          <View style={commonStyles.rowSpaceBetween}>
            <View style={commonStyles.rowCenter}>
              <VectorIcon icon={'FontAwesome'} name="thumbs-up" size={16} />
              <Typography
                title={'Parth Fadadu⚛️🇮🇳 and 2 others'}
                size={13}
                ml={5}
              />
            </View>
            <Typography title={'1 comment'} size={13} color={colors.silver} />
          </View>
        </View>
        <View style={styles.border} />
        {/* Footer */}
        <View style={commonStyles.rowSpaceBetween}>
          <FooterItem title="Like" iconName="thumbs-up" iconType="Feather" />
          <FooterItem
            title="Comment"
            iconName="comment-o"
            iconType="FontAwesome"
            onPress={handleOpenCommentSheet}
          />
          <FooterItem
            title="Repost"
            iconName="post-outline"
            iconType="MaterialCommunityIcons"
          />
          <FooterItem title="Send" iconName="send" iconType="Feather" />
        </View>
      </View>
      <Sheet ref={commentSheet}>
        <InputText title="Comment" placeholder="Comment here ...." />
        <Button title="Submit" onPress={handleCloseCommentSheet} />
      </Sheet>
    </Container>
  );
};

export default Home;

interface FooterItemProps extends TouchableOpacityProps {
  title: string;
  iconName: string;
  iconType: IconType;
}
const FooterItem: FC<FooterItemProps> = props => {
  const {title, iconName, iconType} = props;
  return (
    <TouchableOpacity style={commonStyles.rowCenter} {...props}>
      <VectorIcon icon={iconType} name={iconName} size={15} />
      <Typography title={title} size={13} ml={5} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    ...commonStyles.mt100,
    ...commonStyles.mh20,
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
    ...commonStyles.p10,
    width: '90%',
  },
  textContainer: {
    width: '63%',
    ...commonStyles.ml10,
  },
  connectIcon: {
    ...commonStyles.size(14),
    tintColor: colors.navyBlue,
  },
  border: {
    borderColor: colors.silver,
    borderWidth: StyleSheet.hairlineWidth,
    ...commonStyles.mb10,
  },
});

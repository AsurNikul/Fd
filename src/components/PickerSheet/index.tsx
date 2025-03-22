import React, {FC, ForwardedRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {moderateScale} from 'react-native-size-matters';
import Sheet from '../Sheet';
import Icon from '../VectorIcon';
import styles from './styles';
import Typography from '../Typography';
import {ImagePickerResponse} from '../../utils';
import {colors, commonStyles} from '../../theme';

interface PickerSheetProps {
  sheetRef: ForwardedRef<ActionSheetRef>;
  onSubmit?: () => void;
  onImagePickerPress?: (photo: ImagePickerResponse) => void;
}
const PickerSheet: FC<PickerSheetProps> = props => {
  const {sheetRef, onImagePickerPress} = props;

  const handleCameraPress = async () => {
    const photo = await ImageCropPicker.openCamera({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.6,
    });
    if (onImagePickerPress) {
      onImagePickerPress(photo as ImagePickerResponse);
    }
  };
  const handleGalleryPress = async () => {
    const photo = await ImageCropPicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.6,
    });
    if (onImagePickerPress) {
      onImagePickerPress(photo as ImagePickerResponse);
    }
  };
  return (
    <Sheet ref={sheetRef}>
      <View style={commonStyles.rowCenter}>
        <View style={styles.pickerItemContainer}>
          <TouchableOpacity
            style={styles.pickerItem}
            onPress={handleCameraPress}>
            <Icon
              name="camera"
              icon="AntDesign"
              color={colors.white}
              size={moderateScale(28)}
            />
          </TouchableOpacity>
          <Typography title={'Camera'} mt={10} size={16} />
        </View>
        <View style={styles.pickerItemContainer}>
          <TouchableOpacity
            style={styles.pickerItem}
            onPress={handleGalleryPress}>
            <Icon
              name="photo"
              icon="FontAwesome"
              color={colors.white}
              size={moderateScale(28)}
            />
          </TouchableOpacity>
          <Typography title={'Gallery'} mt={10} size={16} />
        </View>
      </View>
    </Sheet>
  );
};

export default PickerSheet;

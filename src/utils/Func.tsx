import {Platform} from 'react-native';
import axios from 'axios';
import {showGlobalModal} from '../components/ConfirmModalProvider/CustomModal';

const isIOS: boolean = Platform.OS === 'ios';

export const showPopupWithOk = (
  title: string,
  message?: string,
  okClicked?: () => void,
) => {
  showGlobalModal({
    title: !!title ? title : 'test',
    message: !!message ? message : '',
    onOkayClicked: () => okClicked && okClicked(),
  });
};

//Show Popup with ok and cancel
export const showPopupWithOkAndCancel = (
  title?: string,
  message?: string,
  okClicked?: () => void,
  cancelClicked?: () => void,
) => {
  showGlobalModal({
    title: !!title ? title : 'test',
    message: !!message ? message : '',
    onOkayClicked: () => okClicked && okClicked(),
    onCancelClicked: () => cancelClicked && cancelClicked(),
    showCancel: true,
  });
};

export const callAPI = async (url?: string, method?: string, data?: any) => {
  console.log(data, 'data');
  console.log(url, 'url');
  try {
    const res = await axios({
      url,
      method,
      data,
    });
    console.log(res, 'res');
    return res;
  } catch (error) {
    console.log('🚀 ~ callAPI ~ error:', error);
    showPopupWithOk('Test', error?.response?.data);
  }
};

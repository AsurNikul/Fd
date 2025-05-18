import {createSlice} from '@reduxjs/toolkit';
import {addBatchProps} from '../utils/types';

interface initialValType {
  cred: {
    email: string;
    password: string;
    isLoggedIn: boolean;
    confirmPassword?: string;
    mobileNumber?: string;
  };
  batchData: any[];
  userList: any[];
}

export const mainSliceInitialValue: initialValType = {
  cred: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  batchData: [],
  userList: [],
};

const MainSlice = createSlice({
  name: 'main',
  initialState: mainSliceInitialValue,
  reducers: {
    setCredentials: (state, action) => {
      state.cred = action.payload;
    },
    addUsers: (state, action) => {
      if (!state.userList) {
        state.userList = [];
      }
      state.userList.push(action.payload);
    },
    setAddBatchData: (state, action) => {
      if (!state.batchData) {
        state.batchData = [];
      }
      state.batchData.push(action.payload);
    },
    removeBatch: (state, action) => {
      const index = state.batchData.findIndex(
        item => item.batchNo === action.payload?.batchNo,
      );
      if (index !== -1) {
        state.batchData.splice(index, 1);
      }
    },
    editBatch: (state, action) => {
      const index = state.batchData.findIndex(
        item => item.batchNo === action.payload?.batchNo,
      );
      if (index !== -1) {
        state.batchData[index] = action.payload;
      }
    },
    removeAllBatch: state => {
      state.batchData = [];
    },
  },
});

export const {
  setCredentials,
  setAddBatchData,
  removeBatch,
  editBatch,
  removeAllBatch,
  addUsers,
} = MainSlice.actions;

export default MainSlice.reducer;

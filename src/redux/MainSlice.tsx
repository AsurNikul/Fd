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
  batchData: addBatchProps[];
}

export const mainSliceInitialValue: initialValType = {
  cred: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  batchData: [],
};

const MainSlice = createSlice({
  name: 'main',
  initialState: mainSliceInitialValue,
  reducers: {
    setCredentials: (state, action) => {
      state.cred = action.payload;
    },
    setAddBatchData: (state, action) => {
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
  },
});

export const {setCredentials, setAddBatchData, removeBatch, editBatch} =
  MainSlice.actions;

export default MainSlice.reducer;

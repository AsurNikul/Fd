import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  authDetails: {
    username: string;
    email: string;
    password: string;
    isAuthenticated: boolean;
  };
  selectedProduct: any[];
}

export const mainSliceInitialValue: initialValType = {
  authDetails: {
    username: '',
    email: '',
    password: '',
    isAuthenticated: false,
  },
  selectedProduct: [],
};

const MainSlice = createSlice({
  name: 'main',
  initialState: mainSliceInitialValue,
  reducers: {
    setAuthDetails: (state, action) => {
      state.authDetails = action.payload;
      state.selectedProduct = [];
    },
    addProductToCart(state, action) {
      const filteredData =
        state.selectedProduct.filter(
          (item: any) => item.id !== action.payload.id,
        ) || [];
      state.selectedProduct = [action.payload, ...filteredData];
    },
    removeProductFromCart(state, action) {
      const filteredData =
        state.selectedProduct.filter(
          (item: any) => item.id !== action.payload.id,
        ) || [];
      state.selectedProduct = filteredData;
    },
    removeAllProductFromCart(state) {
      state.selectedProduct = [];
    },
  },
});

export const {
  setAuthDetails,
  addProductToCart,
  removeProductFromCart,
  removeAllProductFromCart,
} = MainSlice.actions;

export default MainSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  selectedProduct: any[];
}

export const mainSliceInitialValue: initialValType = {
  selectedProduct: [],
};

const MainSlice = createSlice({
  name: 'main',
  initialState: mainSliceInitialValue,
  reducers: {
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
  addProductToCart,
  removeProductFromCart,
  removeAllProductFromCart,
} = MainSlice.actions;

export default MainSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  wallet: {};
  fundDetails: any;
  refreshDream: boolean;
  refreshReel: boolean;
  refreshSavedDream: boolean;
  hideDreamRefresh: boolean;
  ReelData: any;
  refreshProfile: boolean;
  callNotify: boolean;
}

export const mainSliceInitialValue: initialValType = {
  wallet: {},
  fundDetails: {},
  refreshDream: false,
  refreshReel: false,
  refreshSavedDream: false,
  hideDreamRefresh: false,
  ReelData: null,
  refreshProfile: true,
  callNotify: true,
};

const MainSlice = createSlice({
  name: 'auth',
  initialState: mainSliceInitialValue,
  reducers: {
    wallet(state, action) {
      state.wallet = action.payload;
    },
    SaveFund(state, action) {
      state.fundDetails = action.payload;
    },
    dreamRefresh(state, action) {
      state.refreshDream = action.payload;
    },
    reelRefresh(state, action) {
      state.refreshReel = action.payload;
    },
    savedDreamRefresh(state, action) {
      state.refreshSavedDream = action.payload;
    },
    hideDreamRefresh(state, action) {
      state.hideDreamRefresh = action.payload;
    },
    supportReel(state, action) {
      state.ReelData = action.payload;
    },
    refreshProfile(state, action) {
      state.refreshProfile = action.payload;
    },
    isNotifyAPI(state, action) {
      state.callNotify = action.payload;
    },
    mainLogout(state, action) {
      state.callNotify = action.payload;
      state.refreshProfile = action.payload;
    },
  },
});

export const {
  wallet,
  SaveFund,
  dreamRefresh,
  reelRefresh,
  hideDreamRefresh,
  savedDreamRefresh,
  supportReel,
  refreshProfile,
  isNotifyAPI,
  mainLogout,
} = MainSlice.actions;

export default MainSlice.reducer;

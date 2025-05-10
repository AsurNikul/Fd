import {RootState} from './store';

export const getAuth = (state: RootState) => state.main.cred;
export const getBatchData = (state: RootState) => state.main.batchData;

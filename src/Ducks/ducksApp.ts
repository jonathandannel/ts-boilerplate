import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../Services/types';

interface AppState {
  user: User | null;
  isMobile: boolean;
  loading: boolean;
}

const initialState: AppState = {
  user: null,
  isMobile: false,
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    setMobile: (state, { payload }: PayloadAction<boolean>) => {
      state.isMobile = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      console.log(`Loading: ${payload}`);
      state.isMobile = payload;
    },
  },
});

export const { setUser, setMobile, setLoading } = appSlice.actions;
export const appSelector = (state: { app: AppState }) => state.app;

export default appSlice.reducer;

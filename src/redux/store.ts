import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
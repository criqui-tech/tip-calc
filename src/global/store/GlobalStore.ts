import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import productsSlice from '../features/products/ProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from './api/categories.api';
import { registerApi } from './api/register.api';

export * from './api/categories.api';
export * from './api/register.api';


export const store = configureStore({
  reducer: {
  	[categoriesApi.reducerPath]: categoriesApi.reducer,
  	[registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(registerApi.middleware)
});

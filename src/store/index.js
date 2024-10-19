import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from './api/categories.api';
import { registerApi } from './api/register.api';
import { tasksApi } from './api/tasks.api';
import { tapApi } from './api/tap.api';

import { profileReducer } from './slice/register.slice';

export * from './slice/register.slice';
export * from './api/categories.api';
export * from './api/register.api';
export * from './api/tasks.api';
export * from './api/tap.api';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  	[categoriesApi.reducerPath]: categoriesApi.reducer,
  	[registerApi.reducerPath]: registerApi.reducer,
  	[tasksApi.reducerPath]: tasksApi.reducer,
  	[tapApi.reducerPath]: tapApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(registerApi.middleware)
      .concat(tasksApi.middleware)
      .concat(tapApi.middleware)
});

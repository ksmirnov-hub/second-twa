import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from './api/categories.api';
import { registerApi } from './api/register.api';
import { tasksApi } from './api/tasks.api';

export * from './api/categories.api';
export * from './api/register.api';
export * from './api/tasks.api';

export const store = configureStore({
  reducer: {
  	[categoriesApi.reducerPath]: categoriesApi.reducer,
  	[registerApi.reducerPath]: registerApi.reducer,
  	[tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(registerApi.middleware)
      .concat(tasksApi.middleware)
});

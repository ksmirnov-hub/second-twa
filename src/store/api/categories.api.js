import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithToken from './helpers/customFetchBase';

// const HEALTHAPP_URI = process.env.REACT_APP_BASE_URL;
const WEPAPP_URI = 'https://api.life-coin.ru';

const CATEGORIES = '/api/task-categories';

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: baseQueryWithToken,
	entityTypes: ["Categories", "Category"],
	endpoints: (builder) => ({
		fetchCategories: builder.query({
			query() {
				return {
                    url: WEPAPP_URI + CATEGORIES,
					method: 'GET',
				};
			  },
			providesTags: (result) => ["Categories"],
		}),
	}),
})

export const {
	useFetchCategoriesQuery,
} = categoriesApi;

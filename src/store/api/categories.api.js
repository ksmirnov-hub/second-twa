import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithToken from './helpers/customFetchBase';

// const HEALTHAPP_URI = process.env.REACT_APP_BASE_URL;
const WEPAPP_URI = 'https://api.life-coin.ru';

const CATEGORIES = '/api/task-categories';
const FAVORITES = '/api/fav-categories';

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: baseQueryWithToken,
	entityTypes: ["Categories", "Category"],
	endpoints: (builder) => ({
		fetchCategories: builder.query({
			query() {
				return {
                    url: WEPAPP_URI + CATEGORIES + '?user=' + (window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649'),
					method: 'GET',
				};
			  },
			providesTags: (result) => ["Categories"],
		}),
		fetchOneCategory: builder.query({
			query(id) {
				return {
                    url: WEPAPP_URI + CATEGORIES
						+ '?user=' + (window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649')
						+ '&category=' + id,
					method: 'GET',
				};
			  },
			providesTags: (result) => ["Categories"],
		}),
		addToFavorites: builder.mutation({
			query(category_id) {
				return {
                    url: WEPAPP_URI + FAVORITES,
					method: 'POST',
                    body: {
                        user: (window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649'),
                        categories: [category_id]
                    }
				};
			  },
			providesTags: (result) => ["Categories"],
		}),
	}),
})

export const {
	useFetchCategoriesQuery,
	useFetchOneCategoryQuery,
	useAddToFavoritesMutation
} = categoriesApi;

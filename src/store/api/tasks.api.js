import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithToken from './helpers/customFetchBase';

// const HEALTHAPP_URI = process.env.REACT_APP_BASE_URL;
const WEPAPP_URI = 'https://api.life-coin.ru';

const TASKS = '/api/tasks/all';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: baseQueryWithToken,
	entityTypes: ["Tasks"],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query(categoryId) {
                console.log('categoryId', categoryId)
                let user = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649';
                let parameters = ''
                if (categoryId) {
                    parameters = '?user=' + user + '&category=' + categoryId + 'is_completed=0'
                }
				return {
                    url: WEPAPP_URI + TASKS + parameters,
				};
			  },
			providesTags: (result) => ["Tasks"],
		}),
	}),
})

export const {
	useGetTasksQuery,
} = tasksApi;

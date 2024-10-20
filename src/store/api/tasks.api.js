import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithToken from './helpers/customFetchBase';

// const HEALTHAPP_URI = process.env.REACT_APP_BASE_URL;
const WEPAPP_URI = 'https://api.life-coin.ru';

const TASKS = '/api/tasks';
const TASK = '/api/task';
// Test
export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: baseQueryWithToken,
	entityTypes: ["Tasks"],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query(categoryId) {
                let user = window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649';
                let parameters = '?user=' + user  + '&is_completed=0'
                if (categoryId) {
                    parameters += '&category=' + categoryId;
                }
				return {
                    url: WEPAPP_URI + TASKS + parameters,
				};
			  },
			providesTags: (result) => ["Tasks"],
		}),
		getOneTask: builder.query({
			query(taskId) {
				return {
                    url: WEPAPP_URI + TASK + '/' + taskId,
				};
			  },
			providesTags: (result) => ["Task"],
		}),
		completeTask: builder.mutation({
			query(taskId) {
				console.log('taskId', taskId)
				return {
                    url: WEPAPP_URI + TASK + '/complete',
					method: 'POST',
                    body: {
                        task: taskId,
                        user: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649'
                    }
				};
			  },
			providesTags: (result) => ["Task"],
			invalidatesTags: (result) => ["Quote"],
		}),
		declineTask: builder.mutation({
			query(taskId) {
				console.log('taskId', taskId)
				return {
                    url: WEPAPP_URI + TASK + '/decline',
					method: 'POST',
                    body: {
                        task: taskId,
                        user: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649'
                    }
				};
			  },
			providesTags: (result) => ["Task"],
			invalidatesTags: (result) => ["Quote"],
		}),
		reviewTask: builder.mutation({
			query({ taskId, review }) {
				console.log('review', review)
				return {
                    url: WEPAPP_URI + TASK + '/review',
					method: 'POST',
                    body: {
                        task: taskId,
                        user: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649',
						review
                    }
				};
			  },
			providesTags: (result) => ["Task"],
		}),
		getQuote: builder.query({
			query() {
				return {
                    url: WEPAPP_URI + '/api/quotes/random',
					method: 'GET'
				};
			  },
			providesTags: (result) => ["Quote"],
		}),
	}),
})

export const {
	useGetTasksQuery,
	useGetOneTaskQuery,
	useCompleteTaskMutation,
	useReviewTaskMutation,
	useDeclineTaskMutation,
	useGetQuoteQuery
} = tasksApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithToken from './helpers/customFetchBase';

// const HEALTHAPP_URI = process.env.REACT_APP_BASE_URL;
const WEPAPP_URI = 'https://api.life-coin.ru';

const TAP = '/api/tap';

export const tapApi = createApi({
	reducerPath: 'tapApi',
	baseQuery: baseQueryWithToken,
	entityTypes: ["Tap"],
	endpoints: (builder) => ({
		registerTap: builder.mutation({
			query() {
				return {
                    url: WEPAPP_URI + TAP,
					method: 'POST',
                    body: {
                        user: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649'
                    }
				};
			  },
			providesTags: (result) => ["Tap"],
		}),
	}),
})

export const {
	useRegisterTapMutation,
} = tapApi;

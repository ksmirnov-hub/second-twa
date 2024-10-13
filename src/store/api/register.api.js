import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithToken from './helpers/customFetchBase';

// const HEALTHAPP_URI = process.env.REACT_APP_BASE_URL;
const WEPAPP_URI = 'https://api.life-coin.ru';

const REGISTER = '/api/register';

export const registerApi = createApi({
	reducerPath: 'registerApi',
	baseQuery: baseQueryWithToken,
	entityTypes: ["Register"],
	endpoints: (builder) => ({
		registerProfile: builder.mutation({
			query() {
				return {
                    url: WEPAPP_URI + REGISTER,
					method: 'POST',
                    body: {
                        name: window.Telegram?.WebApp?.initDataUnsafe?.user?.username,
                        telegram_id: window.Telegram?.WebApp?.initDataUnsafe?.user?.id
                    }
				};
			  },
			providesTags: (result) => ["Register"],
		}),
	}),
})

export const {
	useRegisterProfileMutation,
} = registerApi;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../../helpers';
// create slice

const name = 'register';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const profileActions = { ...slice.actions, ...extraActions };
export const profileReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        profile: {},
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_BACKEND_API}/register`;

    return {
        getProfile: getProfile(),
    };

    function getProfile() {
        const urlParams = new URLSearchParams(window.location.search);
        const start = urlParams.get('start');
    
        const params = {
            name: window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 'test_user',
            telegram_id: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '316601649',
            referral_code: start || ''
        }
        return createAsyncThunk(
            `${name}`,
			async () => await fetchWrapper.post(baseUrl, params)
        );
    }

}

function createExtraReducers() {
    return (builder) => {
        getAll();

        function getAll() {
            var { pending, fulfilled, rejected } = extraActions.getProfile;
            builder
                .addCase(pending, (state) => ({ loading: true }))
                .addCase(fulfilled, (state, action) => action.payload)
                .addCase(rejected, (state, action) => ({ error: action.error }));
        };

    }
}

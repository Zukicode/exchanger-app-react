import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPopupItem = createAsyncThunk(
	'currency/fetchPopupItem',
	async function () {
		const response = await fetch(`https://api.exchangerate.host/latest`);
		const data = response.json();

		return data;
	}
);

export const fetchConvert = createAsyncThunk(
	'currency/fetchConvert',
	async function (params) {
		const response = await fetch(
			`https://api.exchangerate.host/convert?from=${params.from}&to=${
				params.to
			}&amount=${params.amount === '0' ? '1' : params.amount}`
		);
		const data = response.json();

		return data;
	}
);

const initialState = {
	amount: '1.00',
	toValue: 'USD',
	fromValue: 'EUR',
	status: 'loading',
	statusResult: null,
	result: null,
	popupItem: [],
};

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		setAmount(state, action) {
			state.amount = action.payload;
		},

		setItemPopup(state, action) {
			state.popupItem = [...action.payload.rates];
		},

		setFromCurrency(state, action) {
			state.fromValue = action.payload;
		},

		setToCurrency(state, action) {
			state.toValue = action.payload;
		},

		transferButton(state, action) {
			state.toValue = action.payload.to;
			state.fromValue = action.payload.from;
		},
	},
	extraReducers: {
		[fetchPopupItem.pending]: state => {
			state.status = 'loading';
		},
		[fetchPopupItem.fulfilled]: (state, action) => {
			state.popupItem = action.payload.rates;
			state.status = 'succses';
		},
		[fetchPopupItem.rejected]: state => {
			state.status = 'failed';
		},

		[fetchPopupItem.pending]: state => {
			state.statusResult = 'loading';
		},
		[fetchConvert.fulfilled]: (state, action) => {
			state.result = action.payload;
			state.statusResult = 'succses';
		},
		[fetchPopupItem.rejected]: state => {
			state.statusResult = 'failed';
		},
	},
});

export const {
	setItemPopup,
	setFromCurrency,
	setToCurrency,
	transferButton,
	setAmount,
} = currencySlice.actions;

export default currencySlice.reducer;

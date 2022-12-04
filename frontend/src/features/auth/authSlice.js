/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};
//registerUser new user
export const registerUser = createAsyncThunk(
	"auth/register",
	async (user, thunkAPI) => {
		try {
			return await authService.register(user);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);
// LoginUser user
export const LoginUser = createAsyncThunk(
	"auth/login",
	async (user, thunkAPI) => {
		console.log(user);
	}
);
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null;
			});
		// .addCase(LoginUser.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(LoginUser.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isSuccess = true;
		// 	state.user = action.payload;
		// })
		// .addCase(LoginUser.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// 	state.user = null;
		// });
		// .addCase(logout.fulfilled, (state) => {
		// 	state.user = null;
		// });
	},
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;

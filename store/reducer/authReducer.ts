import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AuthState {
  isAuthenticated: boolean;
  user: any; // Define your user type
  token: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    // Add other actions like register, updateUser, etc. if needed
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

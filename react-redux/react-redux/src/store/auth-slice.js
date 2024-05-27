import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload;
      state.password = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = initialAuthState.email;
      state.password = initialAuthState.password;
    },
  },
});


export const authActions = authSlice.actions;

// export default authSlice;
export default authSlice.reducer;
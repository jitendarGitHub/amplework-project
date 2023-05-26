import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, inputValue } from "./Action";

const initialState = { add: 0, remove: 0, inputvalue: null, Amount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputvalue = action.payload;
      console.log("111111111", action?.payload);
    },
    add: (state, action) => {
      state.add += action.payload;
    },
    remove: (state, action) => {
      state.remove -= action.payload;
    },
    increment: (state, action) => {
      state.Amount += action.payload;
    },
    decrement: (state, action) => {
      if (state.Amount > 0) {
        state.Amount -= action.payload;
      }
    },
  },
  extraReducers: {
    [fetchUserData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    // [add.fulfilled]: (state, action) => {
    //   state.add += action.payload;
    // },
    // [remove.fulfilled]: (state, action) => {
    //   state.remove -= action.payload;
    // },
    // [inputValue.fulfilled]: (state, action) => {
    //   state.inputValue = action.payload;
    // },
    // "http://16.170.10.154/api/users/login"
  },
});
export const { setInputValue, add, remove, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;

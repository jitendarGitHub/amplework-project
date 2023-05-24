import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ fname: "Ram", lname: "", role: "" }];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    add: (state, action) => {
      // state.value += action.payload;
      console.log("action----------", action.payload);
    },
  },
});
export const { increment, decrement, incrementByAmount, add, remove } =
  cartSlice.actions;
export default cartSlice.reducer;

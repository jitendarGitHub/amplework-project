import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserChangePasswordData,
  fetchUserData,
  fetchUserForgetPasswordData,
  fetchUserLoginData,
  fetchUserResetPasswordData,
  fetchUserSendEmailOtpData,
  fetchUserSendOtpData,
  fetchUserSignUpData,
  fetchUserVerifyOtpData,
  inputValue,
} from "./Action";

const initialState = {
  add: 0,
  addto: [],
  inputvalue: null,
  count: 0,
  update: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputvalue = action.payload;
      console.log("111111111", action?.payload);
    },
    add: (state, action) => {
      state.count += action.payload;
    },
    remove: (state, action) => {
      state.count -= action.payload;
    },
    extra: (state, action) => {
      state.count += action.payload;
    },
    EvenOdd: (state, action) => {
      if (state.count % 2 == 0) {
        console.log("Even Number--", state.count);
      } else {
        console.log("odd Number---", state.count);
      }
    },
    addTodos: (state, action) => {
      state.addto.push(action.payload);
      return state;
    },
    addItem: (state, action) => {
      const newItemId = action.payload.id;
      const existingItem = state.addto.find((item) => item.id === newItemId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.addto.push(action.payload);
      }
    },
    updateItem: (state, action) => {
      console.log("action-------------->", action.payload);
      const countIndex = state.addto.findIndex(
        (item) => item.id == action.payload.id
      );
      console.log("countIndex", countIndex);
      if (countIndex == -1) {
        state.addto = action.payload;
      } else {
        console.log("index", state.id);
        state.addto.splice(countIndex, 1, action.payload);
      }
      state.update = action.payload;
    },

    deleteItem(state, action) {
      console.log("stateAction", action);
      state.addto = state.addto.filter((item) => item.id !== action.payload);
    },

    pop(state, action) {
      state.addto.pop(action.payload);
    },
  },

  extraReducers: {
    [fetchUserLoginData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserSignUpData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserChangePasswordData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserForgetPasswordData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserResetPasswordData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserSendEmailOtpData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserVerifyOtpData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
    [fetchUserSendOtpData.fulfilled]: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {
  setInputValue,
  add,
  remove,
  extra,
  addTodos,
  addItem,
  updateItem,
  deleteItem,
  pop,
  EvenOdd,
  increment,
  decrement,
} = cartSlice.actions;
export default cartSlice.reducer;

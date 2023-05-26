import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../apiService";
import {
  ADD_ELEMENT,
  API_ELEMENT,
  INPUT_ELEMENT_VALUE,
  REMOVE_ELEMENT,
} from "./type";

export const fetchUserData = createAsyncThunk(API_ELEMENT, async (data) => {
  const response = await API.login(data);
  return response.data;
});

export const add = createAsyncThunk(ADD_ELEMENT, async (data) => {
  return data;
});

export const remove = createAsyncThunk(REMOVE_ELEMENT, async (data) => {
  return data;
});
export const inputValue = createAsyncThunk(
  INPUT_ELEMENT_VALUE,
  async (data) => {
    return data;
  }
);

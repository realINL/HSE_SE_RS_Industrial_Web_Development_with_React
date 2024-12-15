import { Category } from "../data/Category";
import { createSlice } from "@reduxjs/toolkit";
import categoriesData from '../data/categories.json';

export const initialCategories: Category[] = categoriesData.categories;


  const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialCategories,
    reducers: {
    }
  });

  export default categoriesSlice.reducer;
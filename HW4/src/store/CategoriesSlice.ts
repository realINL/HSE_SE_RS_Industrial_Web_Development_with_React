import { Category } from "../data/Category";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import categoriesData from '../data/categories.json';

export const initialCategories: Category[] = categoriesData.categories;


  const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialCategories,
    reducers: {

      addCategory: (state, action: PayloadAction<Category>) => {
        state.push(action.payload);
      },

      updateCategory: (state, action: PayloadAction<Category>) => {
        const index = state.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      },

      deleteCategory: (state, action: PayloadAction<number>) => {
        return state.filter((p) => p.id !== action.payload);
      },
    }
  });

  export const { addCategory, updateCategory, deleteCategory } =categoriesSlice.actions;
  export default categoriesSlice.reducer;
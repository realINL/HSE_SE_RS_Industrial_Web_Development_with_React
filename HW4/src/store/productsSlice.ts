import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product} from "../data/Product";
import productsData from '../data/Products.json';

const initialProducts: Product[] = productsData.products;

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {

    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },

    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});




export const { addProduct, updateProduct, deleteProduct } = productsSlice.actions;


export default productsSlice.reducer;


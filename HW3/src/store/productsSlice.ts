import { createSlice } from "@reduxjs/toolkit";
import { Product} from "../data/Product";
import productsData from '../data/Products.json';

const initialProducts: Product[] = productsData.products;

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
  }
});

export default productsSlice.reducer;


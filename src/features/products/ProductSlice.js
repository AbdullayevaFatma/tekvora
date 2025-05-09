import { createSlice } from "@reduxjs/toolkit";
import products from "../../helpers/productsContent";

const initialState = {
  products,
  filteredProducts: products,
  searchTerm: "",
  selectedCategory: "All",
};
const filterProducts = (state) => {
  return state.products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
    const matchCategory =
      state.selectedCategory === "All" ||
      product.category.toLowerCase() === state.selectedCategory.toLowerCase();
    return matchSearch && matchCategory;
  });
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredProducts = filterProducts(state);
    },
    setSelectedCategory: (state,action) => {
      state.selectedCategory = action.payload
      state.filteredProducts = filterProducts(state)
    }
  },
});

export const { setSearchTerm, setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;

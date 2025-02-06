import React, { useState } from 'react';
import ProductMUICard from '../productCard/ProductMUICard.tsx';
import Grid from '@mui/material/Grid2';
import { Product } from '../../data/Product.tsx';

import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Pagination } from '@mui/material';
import { RootState } from '../../store/Store.ts';
import { Filters } from '../../data/Filters.tsx';
import { addProduct } from "../../store/productsSlice.ts";
import AddProductModal from '../modals/AddProductModal.tsx';



const ITEMS_PER_PAGE = 4;


const ProductList: React.FC<{ filters: Filters }> = ({ filters }) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [page, setPage] = useState(1);

  const products = useSelector((state: RootState) => state.products);
  const filteredProducts = products.filter((product) => {
    const nameMatch = new RegExp(filters.searchQuery, "i").test(product.name);

    const categoryMatch = filters.selectedCategory?.id ? Number(product.category.id) === Number(filters.selectedCategory.id) : true;

    const availableMatch = filters.onlyAvailable ? product.quantity > 0 : true;
    console.log("Product: ", product.name);
    console.log("Category Match: ", categoryMatch);
    console.log("Selected Category ID: ", filters.selectedCategory?.id);
    console.log("Product Category ID: ", product.category.id);


    return nameMatch && categoryMatch && availableMatch;
  });



  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const dispatch = useDispatch();

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  };

  const handleAdd = (product: Product) => {
    dispatch(addProduct(product));
  }


  if (filteredProducts.length == 0) {
    return (
      <h3>
        Таких товаров нет
      </h3>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center"}}>
      <Grid container mt={4} width={"80%"} justifyContent={"center"} spacing={10}>
        {paginatedProducts.map((product) => (
          <Grid key={product.id} size="auto">
            <ProductMUICard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} flexDirection={"row"} justifyContent="space-between" alignItems="center" width={"100%"}>

        <Pagination
          count={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ mt: 2 }}
        />


        <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={() => setOpenAddModal(true)}>
          Добавить товар
        </Button>

      </Box>
      <AddProductModal setOpenAddProductModal={setOpenAddModal} openEditProductModal={openAddModal} handelEdit={handleAdd} />

    </div>
  );
};

export default ProductList;


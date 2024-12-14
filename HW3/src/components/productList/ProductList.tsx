import React, { useState } from 'react';
import ProductMUICard from '../productCard/ProductMUICard.tsx';
import Grid from '@mui/material/Grid2';
import { products } from '../../data/products.tsx';
import { Product } from '../../data/Product.tsx';
import ModalMUI from '../modal/ModalMUI.tsx';

type Filters = {
  searchQuery: string;
  selectedCategory: string;
  onlyAvailable: boolean;
};

const ProductList: React.FC<{ filters: Filters }> = ({ filters }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    const nameMatch = new RegExp(filters.searchQuery, "i").test(product.name);

    const categoryMatch = filters.selectedCategory ? product.category === filters.selectedCategory : true;

    const availableMatch = filters.onlyAvailable ? product.quantity > 0 : true;

    return nameMatch && categoryMatch && availableMatch;
  });

  const onCloseModal = () => setSelectedProduct(null);


  return (
    <Grid container my={4} spacing={2} width={"80%"}>
      {filteredProducts.map((product) => (
        <Grid size={{ xs: 8, md: 4, lg: 3 }}>
          <div onClick={() => setSelectedProduct(product)}>
            <ProductMUICard product={product} />
          </div>

        </Grid>
      ))}
      <ModalMUI
        onOpen={!!selectedProduct}
        onClose={onCloseModal}
        product={selectedProduct!}
      />
    </Grid>

  );
};

export default ProductList;


import React, { useEffect, useState } from 'react';
import ProductMUICard from '../productCard/ProductMUICard.tsx';
import Grid from '@mui/material/Grid2';
import { Product } from '../../data/Product.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/Store.ts';
import { Filters } from '../../data/Filters.tsx';
import ModalMUI from '../modals/ModalMUI.tsx';



const ITEMS_PER_LOAD = 8;


const ProductList: React.FC<{ filters: Filters }> = ({ filters }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);


  const products = useSelector((state: RootState) => state.products);
  const filteredProducts = products.filter((product) => {
    const nameMatch = new RegExp(filters.searchQuery, "i").test(product.name);

    const categoryMatch = filters.selectedCategory?.id ? Number(product.category.id) === Number(filters.selectedCategory.id) : true;

    const availableMatch = filters.onlyAvailable ? product.quantity > 0 : true;


    return nameMatch && categoryMatch && availableMatch;
  });


  const onCloseModal = () => setSelectedProduct(null);


  useEffect(() => {
    setLoadedProducts(filteredProducts.slice(0, visibleCount));
  }, [filteredProducts, visibleCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  if (filteredProducts.length == 0) {
    return (
      <h3>
        Таких товаров нет
      </h3>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center" }}>
      <Grid container mt={4} width={"80%"} justifyContent={"center"} spacing={10}>
        {loadedProducts.map((product) => (
          <Grid key={product.id} size="auto">
            <div onClick={() => setSelectedProduct(product)}>
              <ProductMUICard key={product.id} product={product} />
            </div>
          </Grid>
        ))}
        <ModalMUI product={selectedProduct!} onOpen={!!selectedProduct} onClose={onCloseModal} />
      </Grid>
    </div>
  );
};

export default ProductList;


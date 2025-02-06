import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { Product } from "../data/Product";
import EditProductModal from "../components/modals/EditProductModal";
import { updateProduct, deleteProduct } from "../store/productsSlice";
import DeleteDialog from "../components/modals/DeleteDialog";

const noImage = '../../assets/inf.png';



const ProductDetails: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products);
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  
  
  
  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const editProduct = (product: Product) => {
    dispatch(updateProduct(product));
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const HandleDeleteProduct = () => {
    if (product) {
    dispatch(deleteProduct(product.id));
    navigate(-1)
    };
  };

  if (!product) {
    return <Typography variant="h5">Товар не найден</Typography>;
  }

  return (
    <Box sx={{ maxWidth: "80vw", mx: "auto", mt: 4, p: 2 }}>

      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate(-1)}>
        Назад
      </Button>

      <Grid container spacing={4} alignItems="top">

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src={product.image || noImage}
            alt={product.name}
            sx={{
              width: "100%",
              // minWidth: "1",
              maxHeight: "80vh",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>


        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6">
            <strong>Категория:</strong> {product.category.name}
          </Typography>
          <Typography variant="h6">
            <strong>Количество:</strong> {product.quantity} {product.unit}
          </Typography>
          <Typography variant="h4" sx={{ mt: 2, color: "primary.main" }}>
            {product.price} ₽
          </Typography>


          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" onClick={() => setOpenEditProductModal(true)} sx={{minWidth: 'auto'}}>
              Редактировать
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => setOpenDeleteDialog(true)} sx={{minWidth: 'auto'}}>
              Удалить
            </Button>
          </Box>
        </Grid>
      </Grid>

      <EditProductModal product={product} setOpenEditProductModal={setOpenEditProductModal} openEditProductModal={openEditProductModal} handelEdit={editProduct} />
      <DeleteDialog openDeleteModal={openDeleteDialog} setOpenDeleteModal={setOpenDeleteDialog} handleDelete={HandleDeleteProduct} text={"товар"} name={product!.name}/>
    </Box>


  );
};

export default ProductDetails;

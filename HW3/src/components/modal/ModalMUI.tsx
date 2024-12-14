import React from 'react';
import '../productBigCard/ProductBigCard';
import { Box, Modal, Typography } from '@mui/material';
import { Product } from '../../data/Product';

type ModalMUIProps = {
    onOpen: boolean;
    onClose: () => void;
    product: Product;
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20vw',
    height: '75vh',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // maxHeight:"80vh",
    overflowY: "scroll"
  };


const ModalMUI: React.FC<ModalMUIProps> = ({ onOpen, onClose, product}) => {
    if (!onOpen) return null;
    return (
    
        <Modal
            open={onOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {/* <img></img> */}
                {product.image && <img src={product.image} alt="Product" style={{ maxWidth: "100%", maxHeight: "80vh", display: "block", margin: "0" }} />}
                <Typography id="modal-modal-title" variant="h4" component="h4">
                    {product.name}
                </Typography>

                <Typography  sx={{ mt: 2 }} variant="h5">
                    Категория:
                </Typography>

                <Typography variant="body1">
                    {product.category}
                </Typography>

                <Typography  sx={{ mt: 2 }} variant="h5">
                    Количество:
                </Typography>

                <Typography variant="body1">
                    {product.quantity} {product.unit}
                </Typography>

                <Typography  sx={{ mt: 2 }} variant="h5">
                    Описание:
                </Typography>

                <Typography variant="body1">
                    {product.description}
                </Typography>

            </Box>
      </Modal>
    );
}

export default ModalMUI;
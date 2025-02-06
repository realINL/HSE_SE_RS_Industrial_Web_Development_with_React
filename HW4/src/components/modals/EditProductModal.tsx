import { Autocomplete, Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../data/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import Category from "../../data/Category";


type EditProductModalProps = {
    product: Product;
    setOpenEditProductModal: (_: boolean) => void;
    openEditProductModal: boolean;
    handelEdit: (product: Product) => void;
};

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 2,
    boxShadow: 24,
};

const EditProductModal: React.FC<EditProductModalProps> = ({ product, setOpenEditProductModal, openEditProductModal, handelEdit }) => {
    const [editedProductName, setEditedProductName] = useState(product.name);
    const [editedProductCategory, setEditedProductCategory] = useState<Category | null>(product.category);
    const [editedProductPrice, setEditedProductPrice] = useState(product.price);
    const [editedProductQuantity, setEditedProductQuantity] = useState(product.quantity);
    const [editedProductUnit, setEditedProductUnit] = useState(product.unit);
    const [editedProductDescription, setEditedProductDescription] = useState(product.description);
    const [editedProductImage, setEditedProductImage] = useState(product.image);

    const categories = useSelector((state: RootState) => state.categories);

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const checkFormValidity = () => {
        return (
            editedProductName.trim() !== "" &&
            editedProductCategory !== null &&
            editedProductPrice > 0 &&
            editedProductQuantity >= 0 &&
            editedProductUnit.trim() !== "" &&
            editedProductDescription.trim() !== ""
        );
    };

    useEffect(() => {
        setButtonDisabled(!checkFormValidity());
    }, [
        editedProductName,
        editedProductCategory,
        editedProductPrice,
        editedProductQuantity,
        editedProductUnit,
        editedProductDescription,
        editedProductImage
    ]);

    const onCloseModal = () => {
        const updatedProduct = {
            ...product,
            name: editedProductName,
            category: editedProductCategory!,
            price: editedProductPrice,
            quantity: editedProductQuantity,
            unit: editedProductUnit,
            description: editedProductDescription, 
            image: editedProductImage,
        };
        if (updatedProduct.category) {
            handelEdit(updatedProduct);
            setOpenEditProductModal(false);
            setEditedProductName(product.name);
            setEditedProductCategory(product.category);
            setEditedProductPrice(product.price);
            setEditedProductQuantity(product.quantity);
            setEditedProductUnit(product.unit);
            setEditedProductDescription(product.description);
            setEditedProductImage(product.image);
            setEditedProductQuantity(product.quantity);
            setEditedProductQuantity(product.quantity);
        };
    };

    const cancel = () => {
        setOpenEditProductModal(false);
        setEditedProductName(product.name);
        setEditedProductCategory(product.category);
        setEditedProductPrice(product.price);
        setEditedProductQuantity(product.quantity);
        setEditedProductUnit(product.unit);
        setEditedProductDescription(product.description);
        setEditedProductImage(product.image);
        setEditedProductQuantity(product.quantity);
        setEditedProductQuantity(product.quantity);
    };
    
    
    return (
        <Modal open={openEditProductModal} onClose={cancel}>
            <Box sx={{ ...modalStyle, width: 400 }}>
                <Typography variant="h5" gutterBottom fontWeight={"bold"}>
                    Редактировать товар
                </Typography>
                <TextField
                    label="Название товара"
                    fullWidth
                    required
                    value={editedProductName}
                    onChange={(e) => setEditedProductName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Autocomplete
                    value={editedProductCategory}
                    onChange={(e, newValue) => setEditedProductCategory(newValue ? newValue : null)}
                    disablePortal
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} label="Категория" />}
                    sx={{ marginBottom: 2 }}
                />


                <TextField
                    label="Количество"
                    fullWidth
                    required
                    type="number"
                    value={editedProductQuantity}
                    onChange={(e) => setEditedProductQuantity(Math.max(0, Number(e.target.value)))}
                    sx={{ marginBottom: 2 }}
                    inputProps={{ min: 0, style: { textAlign: "center", width: 40 } }}
                />


                <TextField
                    label="Стоимость"
                    fullWidth
                    required
                    value={editedProductPrice}
                    onChange={(e) => setEditedProductPrice(Number(e.target.value))}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Единицы измерения"
                    fullWidth
                    required
                    value={editedProductUnit}
                    onChange={(e) => setEditedProductUnit(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Описание"
                    fullWidth
                    required
                    multiline
                    value={editedProductDescription}
                    onChange={(e) => setEditedProductDescription(e.target.value)}
                    maxRows={3}
                    sx={{ marginBottom: 2,
                        "& .MuiInputBase-root": { overflow: "auto" }
                     }}
                />
                <TextField
                    label="Ссылка на изображение"
                    fullWidth
                    required
                    value={editedProductImage}
                    onChange={(e) => setEditedProductImage(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Box display={"flex"} flexDirection={'row'}>

                <Button variant="contained" color="primary" onClick={onCloseModal} disabled={buttonDisabled}>
                    Сохранить
                </Button>


                <Button variant="outlined" color="primary" onClick={cancel} sx={{ml: 2}}>
                    Отменить
                </Button>

                </Box>
            </Box>
        </Modal>
    );
};

export default EditProductModal;
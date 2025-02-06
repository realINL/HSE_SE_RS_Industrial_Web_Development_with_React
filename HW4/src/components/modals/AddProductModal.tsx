import { Autocomplete, Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../data/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import Category from "../../data/Category";


type EditProductModalProps = {
    setOpenAddProductModal: (_: boolean) => void;
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

const AddProductModal: React.FC<EditProductModalProps> = ({ setOpenAddProductModal, openEditProductModal, handelEdit }) => {
    const [editedProductName, setEditedProductName] = useState("");
    const [editedProductCategory, setEditedProductCategory] = useState<Category | null>(null);
    const [editedProductPrice, setEditedProductPrice] = useState(0);
    const [editedProductQuantity, setEditedProductQuantity] = useState(0);
    const [editedProductUnit, setEditedProductUnit] = useState("");
    const [editedProductDescription, setEditedProductDescription] = useState("");
    const [editedProductImage, setEditedProductImage] = useState("");

    const categories = useSelector((state: RootState) => state.categories);

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const checkFormValidity = () => {
        return (
            editedProductName.trim() !== "" &&
            editedProductCategory !== null &&
            editedProductPrice > 0 &&
            editedProductQuantity > 0 &&
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

    const onAdd = () => {
        const newProduct = {
            id: crypto.randomUUID(),
            name: editedProductName,
            category: editedProductCategory!,
            price: editedProductPrice,
            quantity: editedProductQuantity,
            unit: editedProductUnit,
            description: editedProductDescription,
            image: editedProductImage,
        };
        if (newProduct.category) {
            handelEdit(newProduct);
            setOpenAddProductModal(false);
            setEditedProductName("");
            setEditedProductCategory(null);
            setEditedProductPrice(0);
            setEditedProductQuantity(0);
            setEditedProductUnit("");
            setEditedProductDescription("");
            setEditedProductImage("");
        };
    };

    const cancel = () => {
        setOpenAddProductModal(false);
        setEditedProductName("");
        setEditedProductCategory(null);
        setEditedProductPrice(0);
        setEditedProductQuantity(0);
        setEditedProductUnit("");
        setEditedProductDescription("");
        setEditedProductImage("");
    };


    return (
        <Modal open={openEditProductModal} onClose={cancel}>
            <Box sx={{ ...modalStyle, width: 400 }}>
                <Typography variant="h5" gutterBottom fontWeight={"bold"}>
                    Добавить товар
                </Typography>
                <TextField
                    label="Название товара"
                    required
                    fullWidth
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
                    inputProps={{ min: 1, style: { textAlign: "center", width: 40 } }}
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
                    sx={{
                        marginBottom: 2,
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

                    <Button variant="contained" color="primary" onClick={onAdd} disabled={buttonDisabled}>
                        Добавить товар
                    </Button>


                    <Button variant="outlined" color="primary" onClick={cancel} sx={{ ml: 2 }}>
                        Отменить
                    </Button>

                </Box>
            </Box>
        </Modal>
    );
};

export default AddProductModal;
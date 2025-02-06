import React, { useEffect, useState } from 'react';
import { Button, Box, Modal, TextField, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Category } from '../data/Category';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { useDispatch } from "react-redux";
import { addCategory, updateCategory, deleteCategory } from "../store/CategoriesSlice";
import DeleteDialog from '../components/modals/DeleteDialog';


const CategoriesPage: React.FC = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editedCategoryName, setEditedCategoryName] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null);

  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    const newCategory: Category = {
      id: Date.now(),
      name: newCategoryName,
    };

    dispatch(addCategory(newCategory));
    setNewCategoryName('');
    setOpenAddModal(false);
  };


  const handleEditCategory = () => {
    dispatch(updateCategory({ id: editingCategoryId!, name: editedCategoryName }))
    setEditedCategoryName('');
    setEditingCategoryId(null);
    setOpenEditModal(false);
  };


  const handleDeleteCategory = () => {
    dispatch(deleteCategory(categoryToDelete!.id));
    setOpenDeleteDialog(false);
  };

  const [buttonEditDisabled, setButtonEditDisabled] = useState(true);
  const checkEditFormValidity = () => {
    return (editedCategoryName.trim() !== "");
  };


  useEffect(() => {
    setButtonEditDisabled(!checkEditFormValidity());
  }, [
    editedCategoryName
  ]);

  const [buttonAddDisabled, setButtonAddDisabled] = useState(true);
  const checkAddFormValidity = () => {
    return (newCategoryName.trim() !== "");
  };


  useEffect(() => {
    setButtonAddDisabled(!checkAddFormValidity());
  }, [
    newCategoryName
  ]);



  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Управление категориями
      </Typography>


      <Button sx={{ width: "60%", ml: "40%" }} variant="contained" color="primary" onClick={() => setOpenAddModal(true)}>
        Добавить категорию
      </Button>


      <List>
        {categories.map((category) => (
          <ListItem key={category.id} secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => {
                setEditingCategoryId(category.id);
                setEditedCategoryName(category.name);
                setOpenEditModal(true);
              }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => {
                setCategoryToDelete(category);
                setOpenDeleteDialog(true);
              }}>
                <DeleteIcon />
              </IconButton>
            </>
          }
            sx={{
              border: '1px solid #ccc',
              borderRadius: 2,
              marginBottom: 1,
              padding: 1,
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }
            }>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>


      <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <Box
          sx={{ ...modalStyle, width: "40vw" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography variant="h6" gutterBottom align='center'>
            Добавить категорию
          </Typography>
          <TextField
            label="Название категории"
            fullWidth
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" disabled={buttonAddDisabled} onClick={handleAddCategory}>
            Добавить
          </Button>
        </Box>
      </Modal>


      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Box sx={{ ...modalStyle, width: 400 }}>
          <Typography variant="h6" gutterBottom>
            Редактировать категорию
          </Typography>
          <TextField
            label="Название категории"
            fullWidth
            required
            value={editedCategoryName}
            onChange={(e) => setEditedCategoryName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" disabled={buttonEditDisabled} onClick={handleEditCategory}>
            Сохранить
          </Button>
        </Box>
      </Modal>

      <DeleteDialog openDeleteModal={openDeleteDialog} setOpenDeleteModal={setOpenDeleteDialog} handleDelete={handleDeleteCategory} text={"категорию"} name={categoryToDelete ? categoryToDelete.name : ""} />
    </Box>
  );
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

export default CategoriesPage;

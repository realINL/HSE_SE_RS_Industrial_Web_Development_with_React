import { Dialog, DialogTitle, Typography, DialogContent, DialogActions, Button } from "@mui/material";
import React from "react";

type DeleteModalProps= {
    openDeleteModal: boolean;
    setOpenDeleteModal: (_: boolean) => void;
    handleDelete: () => void;
    text: string;
    name: string
};

const DeleteDialog: React.FC<DeleteModalProps> = ({openDeleteModal, setOpenDeleteModal, handleDelete, text, name}) => {

return(
    <Dialog open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
    <DialogTitle>Удалить категорию</DialogTitle>
    <DialogContent>
      <Typography>
        Вы уверены, что хотите удалить {text} "{name}"?
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpenDeleteModal(false)} color="primary">
        Отмена
      </Button>
      <Button onClick={handleDelete} color="primary">
        Удалить
      </Button>
    </DialogActions>
  </Dialog>
);
};

export default DeleteDialog;
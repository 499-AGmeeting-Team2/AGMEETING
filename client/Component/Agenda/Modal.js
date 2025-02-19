import React, { useState } from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";
// import getInitials from '../../../utils/getInitials';

const Modal = (props) => {
  const { authorAvatar, authorName, onApply, onClose, open, ...other } = props;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleApply = () => {
    toast.success("Request sent!");

    if (onApply) {
      onApply();
    }
  };

  return (
    <Dialog maxWidth="lg" onClose={onClose} open={open} {...other}>
      <Box sx={{ p: 3 }}>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          Add new agenda for the meeting
        </Typography>
        <Typography align="center" color="textSecondary" variant="subtitle2">
          Add new agenda by filling all the indicated fields. Please be specific and professional about the agenda
          you want to share.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField
            autoFocus
            FormHelperTextProps={{
              sx: {
                textAlign: "right",
                mr: 0,
              },
            }}
            fullWidth
            helperText={`${200 - value.length} characters left`}
            label="Short Note"
            multiline
            onChange={handleChange}
            placeholder="What excites you about this project?"
            rows={5}
            value={value}
            variant="outlined"
          />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              mt: 6,
            }}
          >
            <Avatar></Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                Authorname
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Author note: Please remember to include your soft skills.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mt: 3,
            p: 3,
          }}
        >
          <Button
            color="primary"
            fullWidth
            onClick={handleApply}
            variant="contained"
          >
            Apply for a role
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

Modal.propTypes = {
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default Modal;

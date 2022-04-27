import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PencilAltIcon from "../../icons/PencilAlt";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import validator from "validator";
import axios from "axios";
import {userService} from "../../../server/services/user.service"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function AddModal() {
    const [open, setOpen] = React.useState(false);
    const [updateError, setUpdateError] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");
        const role = data.get("role");
        const name = data.get("name");
        // make sure email is valid
        if (email && !validator.isEmail(data.get("email"))) {
            setUpdateError("Enter valid Email!");
            return;
        }
        else {
            await userService.updateById(id, email, password, role, name)
                .then(response => {
                    console.log(response);
                    setUpdateError(response);
                })
                .catch(error => {
                    setUpdateError("Email has been used. Please try a different email or forget password.");
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <PencilAltIcon onClick={handleOpen} fontSize="small"/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={style} component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h8">
                            Update User
                        </Typography>
                        <Typography variant="h11">
                            *Leave field empty to keep current value
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                name="name"
                                label="Full Name"
                                type="name"
                                id="name"
                                autoComplete="name"
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                select
                                name="role"
                                label="Role"
                                type="role"
                                id="role"
                            >
                                <MenuItem value="user">User</MenuItem>
                                <MenuItem value="moderator">Moderator</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                            </TextField>
                            <Typography component="h3" variant="h8" color={"#b30000"}>
                                {updateError}
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Update user
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Modal>
        </div>
    );
}
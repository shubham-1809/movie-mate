import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin, sendAuthRequest } from "../../helpers/api-helpers";
import { useDispatch } from "react-redux";
import { adminActions } from "../../store/admin-slice";
const labelSx = { marginRight: "auto", mt: 1, mb: 1 };
const AdminAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const onClose = () => {
    setOpen(false);
    navigate("/");
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onRequestSent = (val) => {
    localStorage.removeItem("userId");
    localStorage.setItem("adminId", val.id);
    localStorage.setItem("token", val.token);
    dispatch(adminActions.login());
    setOpen(false);
    navigate("/");

     // Show success notification
     toast.success("Login successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    if (!inputs.email || !inputs.password) {
      // Use toast.error directly here
      toast.error("Email and password cannot be empty");
      return;
    }

    if (inputs.password.length < 6) {
      toast.error("Password length should be at least 6 characters");
      return;
    }

    adminLogin(inputs)
      .then(onRequestSent)
      .catch((err) => {
        // Show error notification for incorrect password or other errors
        toast.error("Incorrect email or password");
        console.log(err);
      });
      //.catch((err) => console.log(err));
    setInputs({ name: "", email: "", password: "" });
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={open}>
      <Box sx={{ marginLeft: "auto", padding: 1 }}>
        <IconButton onClick={onClose}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {"Login"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box
          alignItems={"center"}
          width={400}
          padding={6}
          margin="auto"
          display="flex"
          flexDirection={"column"}
        >
          <FormLabel sx={labelSx}>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
            placeholder="Email"
          />
          <FormLabel sx={labelSx}>Password</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type={"password"}
            variant="standard"
            fullWidth
            margin="normal"
            placeholder="Password"
          />
          <Button
            sx={{ borderRadius: 10, mt: 2, bgcolor: "#2b2d42" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {"Login"}
          </Button>
        </Box>
      </form>
      <ToastContainer />
    </Dialog>
  );
};

export default AdminAuth;

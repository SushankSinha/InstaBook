import React, { useState} from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import {BASE_URL} from "./global";
import { useNavigate, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function EditUser() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [allowed, setAllowed] = useState(true);
  const [open, setOpen] = useState(false);
  const {id} = useParams();
  
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate();

  const updateDetails = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/edit-user/${id}`, {name, email});
      if(response.status===201){
        handleClick();
        setTimeout(()=>{
          navigate("/users")
        }, 3000)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
    maxWidth="sm"
    style={{
      margin: "5% auto",
      textAlign: "center",
      justifyContent: "center",
    }}
  >
    <Typography variant="h4" gutterBottom>
      Update User
    </Typography>
    <form method="PUT">
    <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                label="User Name"
                variant="outlined"
                type="text"
                autoComplete="on"
                required={true}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setAllowed(false);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email Id"
                variant="outlined"
                required={true}
                type="email"
                autoComplete="on"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setAllowed(false);
                }}
              />
            </Grid>
            
            <Grid style={{ margin: "10px" }} item xs={12}>
                <Button color="success" variant="contained" onClick={()=>{updateDetails()}} disabled={allowed} style={{ marginLeft: "5%", marginRight: "15%", fontWeight: "bold"}}>
                  Update User
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Details Updated Successfully!
                  </Alert>
                </Snackbar>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate(-1);
                }}
                style={{
                  marginLeft: "15%",
                  marginRight: "5%",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Back
              </Button>
            </Grid>
          </Grid>
    </form>
    </Container>
  );
}

export default EditUser;
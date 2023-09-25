import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./global";

function Profile() {

  const [user, setUser] = useState([]);
  const {id} = useParams()

  const userDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile/${id}`);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userDetails();
    // eslint-disable-next-line 
  }, []);

  const navigate = useNavigate();

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/user/${id}`);
      if(response.status===204){
        alert('User Deleted')
        navigate('/users')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card sx={{ width: 350, margin: "6% auto", textAlign : 'center', justifyContent : 'center' }}>
          <CardMedia
          component="img"
          height="300"
        sx={{ padding : "5px auto", objectFit : 'contain', marginTop : '10px' }}
        image={`${user.profilePhoto}`}
        title= {user.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong> Age : {user.age} </strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong> Blood Group : {user.bloodGroup} </strong>
        </Typography>
      </CardContent>
        <Button color='warning' style={{margin : '2%'}} variant="outlined" startIcon={<EditIcon/>} onClick = {()=>{navigate(`/edit-user/${id}`)}} size="small">User</Button>
        <Button color='warning' style={{margin : '2%'}} variant="outlined" startIcon={<EditIcon/>} onClick={()=>{navigate(`/edit-profile/${id}`)}} size="small">Profile</Button>
        <Button color='error' style={{margin : '2%'}} variant="outlined" startIcon={<DeleteIcon/>} onClick={()=>{deleteUser()}} size="small">User</Button>
      
    </Card>
  );
}

export default Profile;
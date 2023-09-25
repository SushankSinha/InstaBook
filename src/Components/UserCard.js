import React from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Button, Paper} from '@mui/material';

function UserCard({user}) {

  const navigate = useNavigate();

  return (
    <Button onClick = {()=>{navigate(`/profile/${user._id}`)}}>
      <Paper style={{ width: 300, margin: "3% auto", textAlign : 'center', padding : '5px', display : 'flex', flexDirection : 'row' }}>
      <Avatar style = {{margin :'2%'}} alt={user.name} src={`${user.profilePhoto}`} /> 
      <Typography style = {{margin :'2%'}} variant="h6" color="text.secondary">
      {user.name}
      </Typography>
      </Paper>
    </Button>
  );
}

export default UserCard;


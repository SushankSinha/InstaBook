import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./global";
import UserCard from "./UserCard";
import { Container, Typography } from "@mui/material";

function ListUsers() {
  const [user, setUser] = useState([]);

  const userDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <Container maxWidth="sm" style={{ margin: "5% auto", textAlign : 'center', justifyContent : 'center' }}>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "2% auto",
          justifyContent : 'center'

        }}
      >
        {user.map((data, index) => {
          return <UserCard key={index} id={data._id} user={data} />;
        })}
      </div>
    </Container>
  );
}

export default ListUsers;

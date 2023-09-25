import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ListUsers from './Components/ListUsers';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<ListUsers/>} />
        <Route path="/create-user" element={<CreateUser/>} />
        <Route path="/edit-user/:id" element={<EditUser/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/edit-profile/:id" element={<EditProfile/>} />
    </Routes>
    </>
  );
}

export default App;

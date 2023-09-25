import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box>
      <AppBar position="absolute">
        <Toolbar>
          <Link
            style={{ display: "flex", flexDirection: "row", color : 'white', textDecoration : 'none' }}
            className="navbar-brand"
            to="/"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            > InstaBook
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              style={{ color: "white" }}
              className="nav-link mx-2 p-2"
              to="/"
            >
              <IconButton size="small" color="inherit">
                <Badge color="error">Home</Badge>
              </IconButton>
            </Link>
            <Link
              style={{ color: "white" }}
              className="nav-link mx-3 p-2"
              to="/users"
            >
              <IconButton size="small" color="inherit">
                <Badge color="error">Users</Badge>
              </IconButton>
            </Link>
            <Link
              style={{ color: "white" }}
              className="nav-link mx-3 p-2"
              to="/create-user"
            >
              <IconButton size="small" color="inherit">
                <Badge color="error">Add User</Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;





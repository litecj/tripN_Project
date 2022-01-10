import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { SidebarData } from "..";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ margin: "10vh" }}>
          <Profile />
          <Box
            sx={{
              bgcolor: "#3F51B5",
              height: "36vh",
              width: "25vh",
              alignItems: "center",
            }}
            style={{ minWidth: "200px", minHeight: "300px" }}
          >
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { SidebarData } from "../SidebarData";

export default function Navi() {
  return (
    <>
      <Box sx={{ bgcolor: "#291C79", height: "50vh", width: "25vh" }}>
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
    </>
  );
}

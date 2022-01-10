import * as React from "react";
import { AppBar, Toolbar, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            bgcolor: "#3c495e",
            color: "white",
          }}
        >
          <Box sx={{ justifyContent: "flex-start" }}>
            <Link
              component={RouterLink}
              variant="h4"
              underline="none"
              color="inherit"
              to="/home"
            >
              {"Trip N Admin"}
            </Link>
          </Box>
          <Box sx={{ justifyContent: "flex-end" }}>
            <span sx={{ margin: 2 }}>
              {" "}
              <Link
                component={RouterLink}
                variant="h6"
                underline="none"
                color="inherit"
                to="/an/dash-board"
              >
                {"DashBoard"}
              </Link>
            </span>
            <span sx={{ margin: 2 }}>
              {" "}
              <Link
                component={RouterLink}
                variant="h6"
                underline="none"
                color="inherit"
                to="/an/user-list"
              >
                {"User List"}
              </Link>
            </span>
            <span sx={{ margin: 2 }}>
              {" "}
              <Link
                component={RouterLink}
                variant="h6"
                underline="none"
                color="inherit"
                to="/an/sales-management"
              >
                {"Sales Management"}
              </Link>
            </span>
            <span sx={{ margin: 2 }}>
              {" "}
              <Link
                component={RouterLink}
                variant="h6"
                underline="none"
                color="inherit"
                to="/an/financial-reports"
              >
                {"Financial Reports"}
              </Link>
            </span>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

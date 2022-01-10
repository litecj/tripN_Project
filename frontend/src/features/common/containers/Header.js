import * as React from "react";
import { Link, Box, AppBar, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "features/user/components/Logout";

const rightLink = {
  fontSize: 15,
  color: "common.black",
  ml: 6,
};

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", margin: "40px" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h4"
            underline="none"
            color="common.black"
            component={RouterLink}
            to="/"
          >
            {"Trip N"}
          </Link>
          <Box sx={{ flex: 20, display: "flex", justifyContent: "flex-end" }}>
            {localStorage.getItem("sessionUser") == null ? (
              <span>
                <Link
                  variant="h6"
                  underline="none"
                  component={RouterLink}
                  to="/join"
                  sx={{ ...rightLink }}
                >
                  {"JOIN"}
                </Link>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  component={RouterLink}
                  to="/login"
                  sx={rightLink}
                >
                  {"LOGIN"}
                </Link>

                <Link
                  variant="h6"
                  underline="none"
                  component={RouterLink}
                  to="/an/admin-login"
                  sx={{ ...rightLink }}
                >
                  {"ADMIN"}
                </Link>
              </span>
            ) : (
              <>
                <span>
                  <Link
                    color="inherit"
                    variant="h6"
                    underline="none"
                    component={RouterLink}
                    to="/mypage"
                    sx={rightLink}
                  >
                    {"MYPAGE"}
                  </Link>

                  <Link
                    variant="h6"
                    underline="none"
                    component={RouterLink}
                    to="/an/admin-login"
                    sx={{ ...rightLink }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      localStorage.clear(e);
                      alert(
                        localStorage.length == 0
                          ? "로그아웃 되었습니다"
                          : "로그아웃 실패"
                      );
                      navigate("/");
                    }}
                  >
                    {"LOGOUT"}
                  </Link>

                  <Link
                    variant="h6"
                    underline="none"
                    component={RouterLink}
                    to="/an/admin-login"
                    sx={{ ...rightLink }}
                  >
                    {"ADMIN"}
                  </Link>
                </span>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;

import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        localStorage.clear(e);
        alert(
          localStorage.length == 0 ? "로그아웃 되었습니다" : "로그아웃 실패"
        );
        navigate("/");
      }}
    >
      로그아웃
    </button>
  );
}

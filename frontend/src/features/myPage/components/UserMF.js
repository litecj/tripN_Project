import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  Stack,
  Link,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "40vh",
  flexDirection: "column",
  justifyContent: "center",
}));

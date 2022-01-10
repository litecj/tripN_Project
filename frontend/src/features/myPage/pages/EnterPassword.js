import React, { useState } from "react";
import UserMF from "../components/UserMF";
import { MyLayout } from "features/common";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  avatarGroupClasses,
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

export default function EnterPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      if (userPassword == checkPassword) {
        alert("비밀번호가 맞습니다");
        navigate("/userModify");
      } else {
        alert("비밀번호가 틀렸습니다");
      }
    },
  });
  const { errors, touched, values, handleSubmit, getFieldProps } = formik;
  console.log("체크한 패스워드 얍얍" + values["password"]);

  const userPassword = JSON.parse(window.localStorage.getItem("sessionUser"))[
    "password"
  ];
  const checkPassword = values["password"];

  return (
    <>
      <MyLayout>
        <Box sx={{ width: "100vh", height: "40vh" }}>
          <Grid item sm="auto">
            <ContentStyle>
              <Box sx={{ mb: 10 }} />
              <Typography variant="h4">회원정보 수정</Typography>
              <Box sx={{ mb: 2 }} />
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label="비밀번호 확인"
                      {...getFieldProps("password")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              <Icon
                                icon={showPassword ? eyeFill : eyeOffFill}
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={Boolean(touched.password && errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Stack>
                  <Stack sx={{ my: 2 }} />
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    확인
                  </LoadingButton>
                </Form>
              </FormikProvider>
            </ContentStyle>
          </Grid>
        </Box>
      </MyLayout>
    </>
  );
}

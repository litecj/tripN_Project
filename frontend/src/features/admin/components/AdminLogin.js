import React from "react";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { AdminLayout } from "features/common";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import {
  Container,
  Typography,
  Divider,
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: 0,
}));

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "admin",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // values.preventDefault();
      // values.stopPropagation();
      alert(JSON.stringify(values));

      // await dispatch(login(values));
      alert(JSON.stringify(values.name) + "님 환영합니다.");
      navigate("/an/dash-board");
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <AdminLayout>
        {/* <Helmet>
          <title>TripN Admin</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: "background.default",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
          }}
        >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: "demo@tripn.shop",
              password: "Password123",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(55)
                .required("Email is required"),
              password: Yup.string().max(25).required("Password is required"),
            })}
            onSubmit={() => {
              navigate("/an/dash-board", { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Admin Page
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12} md={6}></Grid>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3,
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    Login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
        </Box> */}

        {/* ---------------- */}
        <Container>
          <ContentStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Admin Login
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your details below.
              </Typography>
            </Stack>

            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    autoComplete="username"
                    type="email"
                    label="Email address"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    {...getFieldProps("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...getFieldProps("remember")}
                        checked={values.remember}
                      />
                    }
                    label="Remember me"
                  />
                  <Link
                    component={RouterLink}
                    variant="subtitle2"
                    to="/forgotPassword"
                  >
                    Forgot password?
                  </Link>
                </Stack>
                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  Login
                </LoadingButton>
              </Form>
            </FormikProvider>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="/join">
                Get started
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </AdminLayout>
    </>
  );
}

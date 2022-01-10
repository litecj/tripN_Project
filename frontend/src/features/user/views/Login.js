import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { login } from "features/user/reducer/userSlice";
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
import { EmailApi } from "..";
import { TripLayout } from "features/common";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: 0,
}));

export default function Login() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("ID required"),
    // email: Yup.string()
    //   .email("id must be a valid email address")
    //   .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "admin",
      password: "admin",
      remember: true,
    },
    validationSchema: LoginSchema,
    // -onSubmit: async (values) => {
    // values.preventDefault();
    // values.stopPropagation();
    // alert(JSON.stringify(values));

    // -alert(JSON.stringify(values.username) + "님 환영합니다.");
    // -await dispatch(login(values));
    // navigate("/home");
    // },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    alert(JSON.stringify(values));

    await dispatch(login(values));
  };

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <>
      <TripLayout>
        <Container>
          <ContentStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Enter your details below.
              </Typography>
            </Stack>
            <EmailApi />
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                OR{" "}
              </Typography>
            </Divider>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    type="string"
                    text="userName" //
                    label="ID"
                    {...getFieldProps("userName")}
                    error={Boolean(touched.userName && errors.userName)}
                    helperText={touched.userName && errors.userName}
                  />
                  <TextField
                    fullWidth
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
      </TripLayout>
    </>
  );
}

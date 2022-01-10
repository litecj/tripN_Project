import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Stack,
  Link,
  Typography,
  TextField,
  IconButton,
  InputLabel,
  NativeSelect,
  InputAdornment,
  Button,
  FormControl,
  Divider,
  Radio,
} from "@mui/material";
import { useFormik, Form, FormikProvider } from "formik";
import { useDispatch } from "react-redux";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { userModify } from "features/user/reducer/userSlice";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function UserModifyCom() {
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e) => {
  //   setCardCompany({ [e.target.nam]: e.target.val });
  // };
  // const [cardCompany, setCardCompany] = useState("");
  // console.log(JSON.stringify(cardCompany));
  // const [cardCompany] = cardCompany;

  // const handleChange = (e) => {
  //   setCardCompany({ [e.target.nam]: e.target.val });
  // };
  const user = JSON.parse(window.localStorage.getItem("sessionUser"));
  // console.log(user["userId"]);

  const formik = useFormik({
    initialValues: {
      userId: user["userId"],
      password: "admin",
      checkPassword: "admin",
      name: "admin",
      last_name: "admin",
      first_name: "admin",
      phone_number: "01012345678",
      email: "admin@gmail.com",
      address: "서울 강남구",
      passport: "m12345678",
      birth: "211225",
      gender: "여자",
      card_company: "visa",
      card_number: "000000000000",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // console.log(JSON.stringify(values));

    alert(JSON.stringify(values));

    await dispatch(userModify(values));
  };

  const { errors, touched, values, isSubmitting, getFieldProps } = formik;

  // const handleChange = (event, newValue) => {
  // setValue(newValue);
  // setphoneNumber(event.target.value);
  // setSelectedValue(event.target.value);
  // };
  // const [phoneNumber, setphoneNumber] = React.useState("");
  // const [selectedValue, setSelectedValue] = React.useState("a");

  return (
    <>
      <Box sx={{ width: "100vh", height: "130vh" }}>
        <ContentStyle>
          <Box sx={{ mb: -5 }} />
          <Typography variant="h4">회원정보 수정</Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="subtitle1" fontWeight="Bold" align="left" />
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  label="비밀번호"
                  {...getFieldProps("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "checkPassword"}
                  label="비밀번호 확인"
                  {...getFieldProps("checkPassword")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Stack>
              <Grid>
                <Stack spacing={3}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="Bold"
                    align="left"
                  ></Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="성명"
                      text="name"
                      {...getFieldProps("name")}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="영문 성"
                      text="last_name"
                      {...getFieldProps("last_name")}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      fullWidth
                      label="영문 성 "
                      text="first_name"
                      {...getFieldProps("first_name")}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Stack>
                  <TextField
                    fullWidth
                    type="text"
                    label="주소"
                    text="address"
                    {...getFieldProps("address")}
                  />
                  <TextField
                    fullWidth
                    type="text"
                    label="여권번호"
                    text="passport"
                    {...getFieldProps("passport")}
                  />

                  <TextField
                    fullWidth
                    type="text"
                    label="생년월일"
                    text="birth"
                    {...getFieldProps("birth")}
                  />

                  {/* 결제 수단 관리 */}
                  <Typography
                    variant="subtitle1"
                    fontWeight="Bold"
                    align="left"
                  >
                    결제 수단
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Box sx={{ minWidth: 100 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          variant="standard"
                          htmlFor="uncontrolled-native"
                        ></InputLabel>
                        <NativeSelect
                          defaultValue={"visa"}
                          // value={cardCompany}
                          // onChange={handleChange}
                          // name="cardCompany"
                          // value={card_company}
                          label="card_company"
                          text="card_company"

                          // name="card_company"
                          // values={card_company}
                          // values={card_company}
                          // --------
                          // text=card_company
                        >
                          <option value="visa">Visa</option>
                          <option value="master">Master</option>
                          <option value="union">Union</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                    <TextField
                      fullWidth
                      type="text"
                      label="카드번호"
                      text="card_number"
                      {...getFieldProps("card_number")}
                    />
                  </Stack>
                </Stack>
              </Grid>
              <Typography
                variant="subtitle2"
                sx={{ mt: 3, textAlign: "center" }}
              >
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  회원정보 수정 완료
                </Button>
              </Typography>
            </Form>
          </FormikProvider>
        </ContentStyle>
      </Box>
    </>
  );
}

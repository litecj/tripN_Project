import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Stack, Link, Container, Typography, TextField, Grid, Button } from '@mui/material';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { LoadingButton } from '@mui/lab';
import { TripLayout } from 'features/common';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 0
}));

export default function ForgotPassword() {

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    number: Yup.number().required('PhoneNumber is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      number: '',
      text: '',
      remember: true
    },
    validationSchema: LoginSchema,
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (<>
  <TripLayout>
    <Container >
    <ContentStyle>
      <Stack sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom>
        Forgot your Password?
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
        가입시 입력하신 이메일로 비밀번호를 보내드리겠습니다.</Typography>
      </Stack>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="아이디 (이메일 입력)"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          </Stack>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}> 
            이메일로 링크 보내기 
          </LoadingButton>
        </Form>
      </FormikProvider>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          홈페이지로 돌이가기 &nbsp;
        <Link variant="subtitle2" component={RouterLink} to="/home">
          Click! 
        </Link>
      </Typography>
    </ContentStyle>
    </Container>
    </TripLayout>
    </>
  );
}
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
// import twitterFill from '@iconify/icons-eva/twitter-fill';
// import facebookFill from '@iconify/icons-eva/facebook-fill';
// import Page from './Page';
// import AuthLayout from 'pages/AuthLayout';
import ReactTooltip from 'react-tooltip';
// material
import { Stack, Button, Divider, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" spacing={2}>
                <Button fullWidth size="large" color="inherit" variant="outlined">
                <Icon icon={googleFill} color="#DF3E30" height={24} />                
                </Button>
                
                
                
                <Button fullWidth size="large" color="inherit" variant="outlined"
                data-tip="구현하지 않는 기능입니다">
                <Icon icon="simple-icons:naver" color="#1ec800" height={24} />
                </Button>
                <ReactTooltip place="bottom" type="dark" effect="float"/>

                <Button fullWidth size="large" color="inherit" variant="outlined"
                data-tip="구현하지 않는 기능입니다">
                <Icon icon="ri:kakao-talk-fill"  color="#553830" height={32} />
                </Button>
                <ReactTooltip place="bottom" type="dark" effect="float"/>
            </Stack>

            <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
                </Typography>
            </Divider>
    </>
  );
}
import React from 'react'
import { Box, Button, CardContent, Typography } from '@material-ui/core';
import mickey from 'img/mickey.png'
import { Icon } from '@iconify/react';


export default function Profile  (props) {
    const user = {
        city: 'Los Angeles',
        userId: '이메일(아이디)',
        name: '회원 이름',
      };
    const [value, setValue] = React.useState(new Date());
   
    return(<>
    <Box sx={{ bgcolor: '#ffff', height: '40vh' }}>
    
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <img
              src={mickey}
              height= "100px" width="100px"
            />
            <Box sx={{ bgcolor: '#ffff', height: '3vh' }} />
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              {user.name}
            </Typography>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="body1"
            >
              {user.userId}
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ bgcolor: '#003f6b', height: '5vh' }}>
          <Button  >
          &nbsp;&nbsp;&nbsp;&nbsp;프로필 사진 변경&nbsp;&nbsp;&nbsp;
            <Icon icon="fluent:picture-in-picture-exit-20-regular"  
            color="#553830" height={30} />
          </Button>
          </Box>
      </Box>
  </>)
};

import React from "react";
import { Icon } from "@iconify/react";
import { Stack, Button } from "@mui/material";

export default function EmailApi() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        {/* <Button fullWidth size="large" color="inherit" variant="outlined">
                    <Icon icon={googleFill} color="#DF3E30" height={24} />                
                </Button> */}
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Icon icon="simple-icons:naver" color="#1ec800" height={23} />
        </Button>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          data-tip="구현하지 않는 기능입니다"
        >
          <Icon icon="ri:kakao-talk-fill" color="#553830" height={30} />
        </Button>
      </Stack>
    </>
  );
}

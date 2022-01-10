import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FAQPagination } from '..';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQcom() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{width:'80%'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>예약했는데 예약 확인은 어떻게 하나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          예약 내역은 마이페이지의 예약내역관리에서 확인 가능합니다. <br/>
            ※ 홈페이지 확인 경로<br/>
            TripN 우측 상단 '로그인' 클릭 후<br/>
            ■ 회원 로그인 → 마이페이지 → 예약내역 관리에서 확인<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>정상참작이 가능한 상황 정책 및 코로나바이러스감염증-19(코로나19)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         2020년 3월 11일, 세계보건기구(WHO)는 코로나바이러스감염증-19(코로나19)의 확산을 세계적 대유행(팬데믹)으로 선포했습니다.<br/>
         WHO 발표 이후 각국 정부가 코로나19 확산을 늦추기 위해 신속한 대응 정책을 펼치고 있음에도 불구하고 감염자 수는 빠르게 늘고 있습니다.<br/>
         Trip N팀은 여행자의 안전을 보호하고 조금이나마 불안감을 덜어드릴 수 있도록 코로나19로 인한 정상참작이 가능한 상황 정책의 적용 범위를 다음과 같이 제시하고 있습니다.<br/>
         정책 보장 범위에 대한 업데이트 사항을 이 페이지에서 확인해주세요.<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>비밀번호 변경 또는 재설정</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         비밀번호를 잊어버렸거나 로그인하는 데 문제가 있나요? 누구에게나 한 번쯤 일어나는 일이죠. 그럴 땐 비밀번호를 재설정하세요.<br/>
         <br/>
         계정, 로그인 및 보안으로 가세요.<br/>
         비밀번호 옆의 변경을 클릭하세요.<br/>
         현재 비밀번호를 입력하세요.<br/>
         새 비밀번호를 2회 입력하세요.<br/>
         비밀번호 변경을 클릭하세요.<br/>
         Trip N에서 직접 로그인하기 위한 비밀번호 설정<br/>
         페이스북, 구글, Apple 계정과 연결하거나 전화번호를 이용해 Trip N 계정을 만들었다면, 비밀번호를 따로 설정할 필요가 없었을 것입니다. 하지만 비밀번호를 설정해 Trip N에서 직접 로그인하는 방법도 있습니다. 방법은 다음과 같습니다. <br/>
         Trip N 계정에서 로그아웃하세요.<br/>
         위에 안내된 비밀번호 재설정 단계를 따르세요.<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={{alignItems:'center'}}>
      <FAQPagination/>
      </div>
    </div>
  );
}
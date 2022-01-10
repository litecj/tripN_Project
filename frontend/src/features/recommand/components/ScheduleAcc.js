import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function ScheduleAcc() {
  return (
    <div>
      <h2> Travel Plan </h2>
      <Box component={Paper} sx={{ width: "100%", typography: "body1" }}>
        <Accordion sx={{ minWidth: 700 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              DAY 1<button>지도보기</button>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1일차에 대한 여행 일정 ! 제주도 간닿닿닿닿닿
              <br />
              비행기 탄닿닿닿닿닿
              <br />
              렌트카 빌렸닿닿닿
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              DAY 2<button>지도보기</button>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              2일차에 대한 여행 일정 ! 제주도에서 먹는 전복복복
              <br />
              우도 관광광광광광광우럭따
              <br />
              저녁은 흑돼지댜댜댜
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </Box>
    </div>
  );
}

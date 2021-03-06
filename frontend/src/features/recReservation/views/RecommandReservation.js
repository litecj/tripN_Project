import * as React from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from "react";
import { TripLayout } from "features/common";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import {
  Button,
  Typography,
  Container,
  Box,
  Paper,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import styles from "features/recReservation/styles/RecReservation.module.scss";
import { recommandSave } from "features/recommand/reducer/recommandSlice";
import EventMarkerContainer from "../components/EventMarkerContainer";

export function RecommandReservation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const recommandlist = useSelector(state=>state.recommandSlice.recommandState[0])
  console.log(`recommandlist====${JSON.stringify(recommandlist)}`)
  const plane = recommandlist[0]['plane']
  const acc = recommandlist[1]['acc'][0]
  const activity = recommandlist[2]['activity']
  const plan = recommandlist[3]
  console.log(`activity ========================= ${JSON.stringify(activity)}`)
  console.log(`plan ==================== ${JSON.stringify(plan[`day-${activity[0]}`])}`)
  console.log(`plane ==================== ${JSON.stringify(plane)}`)
  console.log(`acc ==================== ${JSON.stringify(acc)}`)
  // console.log(`${`day-${acc['name']}`} 0=============${JSON.stringify(plan[`0day-${acc['name']}`][0])}`)
  // console.log(`${`day-${acc['name']}`} 1=============${JSON.stringify(plan[`0day-${acc['name']}`][1])}`)
  // console.log(`${`day-${acc['name']}`} 2=============${JSON.stringify(plan[`0day-${acc['name']}`][2])}`)
  // console.log(`${`day-${acc['name']}`} 3=============${JSON.stringify(plan[`0day-${acc['name']}`][3])}`)
  
  
  console.log(`${`day-${activity[0]}`} 0=============${JSON.stringify(plan[`day-${activity[0]}`][0])}`)
  console.log(`${`day-${activity[0]}`} 1=============${JSON.stringify(plan[`day-${activity[0]}`][1])}`)
  console.log(`${`day-${activity[0]}`} 2=============${JSON.stringify(plan[`day-${activity[0]}`][2])}`)
  console.log(`${`day-${activity[0]}`} 3=============${JSON.stringify(plan[`day-${activity[0]}`][3])}`)
  console.log(`${`day-${activity[0]}`} 3=============${JSON.stringify(plan[`day-${activity[0]}`][3])}`)
  
  useEffect(() => {
    dispatch(recommandSave({
      "date1": localStorage.getItem("start"),
      "date2": localStorage.getItem("end"),
      "start": localStorage.getItem("airstart"),
      "Number": localStorage.getItem("number"),
      "user": 5,
      "mbti": "iiesnsfttppp",
      "relationship": localStorage.getItem("relationship"),
      "plane": [localStorage.getItem("depplane"), localStorage.getItem("arrplane")],
      "acc": localStorage.getItem("acc"),
      "activty": [localStorage.getItem("activty1"),localStorage.getItem("activty2")],
      "olle": []
    }));
  }, []);
  const [isOpen, setIsOpen] = useState(false)
  const [map, setMap] = useState()
  let points = plan[`0day-${acc['name']}`].map(
    x => {return {content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
                  latlng: {lat: x.lat, lng:x.log}}})

  let points1 = plan[`day-${activity[0]}`].map(
    x => {return {content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
                  latlng: {lat: x.lat, lng:x.log}}})

  let points2 = plan[`day-${activity[1]}`].map(
    x => {return {content: <div style={{ padding: "5px", color: "#000" }}>{x.name}</div>,
                  latlng: {lat: x.lat, lng:x.log}}})
  return (

    <>
      <br />
      <br />
      <TripLayout>
        {/* <VoucherTab /> */}
        <div>
          <h1> Travel Plan </h1>
          <Box component={Paper} sx={{ width: "100%", typography: "body1" }}>
          <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Plane</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                    ????????? <br />
                    ???????????? : {plane[0]['vihicleId']}<br />
                    ???????????? : {plane[0]['depPlandTime']} - {plane[0]['arrPlandTime']} <br />
                    ?????? : ??? {(plane[0]['economyCharge']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <br />
                    ?????? : {window.localStorage.getItem("number")} ?????? <br />
                    <br />
                    ?????????<br />
                    ????????????: {plane[1]['vihicleId']}<br />
                    ????????????: {plane[1]['depPlandTime']} - {plane[1]['arrPlandTime']} <br />
                    ??????:  ??? {(plane[1]['economyCharge']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <br />
                    ?????? : {window.localStorage.getItem("number")} ?????? <br />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography>ACC</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                {"??????"}
                  ?????? : {acc['image_id']}<br />
                  ?????? : {acc['name']}<br />
                  ?????? : {acc['loc']}<br />
                  {acc['standard_number']}?????? ???????????? : {(acc['price'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}???/??? <br />
                  ?????? : {window.localStorage.getItem('day')} ??? ,  {window.localStorage.getItem("number")} ???<br />
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>
          <br/>
          <br/>
          <Box component={Paper} sx={{ width: "100%", typography: "body1" }}>

            <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DAY 1</Typography>
                </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                <>
                  <Map
                      center={{
                        lat: acc['lat'],
                        lng: acc['log'],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={7}
                      onCreate={setMap}
                    >
                        <MapMarker
                        position={{lat: acc['lat'], lng:acc['log']}}
                        // title='?????? ??????'
                        image={{
                            // ?????? ?????????????????? ??????: https://www.flaticon.com/kr/
                            // src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95", 
                            src: 'https://cdn-icons-png.flaticon.com/512/5717/5717316.png',
                            size: {
                              width: 45,
                              height: 45,
                            }, 
                            options: {
                              offset: {
                                x: 25,
                                y: 45,
                              }, 
                            },
                          }}

                          onClick={(marker) => map.panTo(marker.getPosition())}
                          onMouseOver={() => setIsOpen(true)}
                          onMouseOut={() => setIsOpen(false)}
                        >{isOpen && <div style={{ padding: "5px", color: "#000" }}>?????? ??????</div>}</MapMarker>
                        {points.map((value) => (
                          <EventMarkerContainer
                            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                            position={value.latlng}
                            content={value.content}
                          />
                        ))}
                    </Map>
                </>
                
                  <div className={styles.activity}>
                    <div>
                      <h4>?????? ?????? 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`0day-${acc['name']}`][0]['name']}<br />
                      ?????? : {plan[`0day-${acc['name']}`][0]['loc']}<br />
                      ?????? ?????? : {plan[`0day-${acc['name']}`][0]['recommend']}<br />
                    </div>
                    <div>
                      <h4>?????? ?????? 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`0day-${acc['name']}`][1]['name']}<br />
                      ?????? : {plan[`0day-${acc['name']}`][1]['loc']}<br />
                      ?????? ?????? : {plan[`0day-${acc['name']}`][1]['recommend']}<br />
                    </div>
                  </div>

                  <div className={styles.restaurant}>
                    <div>
                      <h4>?????? ????????? 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`0day-${acc['name']}`][2]['name']}<br />
                      ?????? : {plan[`0day-${acc['name']}`][2]['address']}<br />
                      ?????? : {plan[`0day-${acc['name']}`][2]['explanation']}<br />
                    </div>
                    <div>
                      <h4>?????? ????????? 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`0day-${acc['name']}`][3]['name']}<br />
                      ?????? : {plan[`0day-${acc['name']}`][3]['address']}<br />
                      ?????? : {plan[`0day-${acc['name']}`][3]['explanation']}<br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DAY 2</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                <>
                  <Map
                      center={{
                        lat: acc['lat'],
                        lng: acc['log'],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={9}
                      onCreate={setMap}
                    >
                        <MapMarker
                        position={{lat: acc['lat'], lng:acc['log']}}
                        // title='?????? ??????'
                        image={{
                            // ?????? ?????????????????? ??????: https://www.flaticon.com/kr/
                            // src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95", 
                            src: 'https://cdn-icons-png.flaticon.com/512/5717/5717316.png',
                            size: {
                              width: 45,
                              height: 45,
                            }, 
                            options: {
                              offset: {
                                x: 25,
                                y: 45,
                              }, 
                            },
                          }}
                          onClick={(marker) => map.panTo(marker.getPosition())}
                          onMouseOver={() => setIsOpen(true)}
                          onMouseOut={() => setIsOpen(false)}
                        >{isOpen && <div style={{ padding: "5px", color: "#000" }}>?????? ??????</div>}</MapMarker>
                        {points1.map((value) => (
                          <EventMarkerContainer
                            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                            position={value.latlng}
                            content={value.content}
                          />
                        ))}
                    </Map>
                </>
                  <div className={styles.activity}>
                    <h4>?????? ??????</h4>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center 40%",
                        // backgroundImage: `url(${image.url})`,
                        // marginTop: '-30px'
                      }}
                    />
                    ?????? : {plan[`day-${activity[0]}`][0]['name']}<br />
                    ???????????? : {plan[`day-${activity[0]}`][0]['start_business_time']} - {plan[`day-${activity[0]}`][0]['end_business_time']} <br />
                    ???????????? : {plan[`day-${activity[0]}`][0]['time']}<br />
                    ?????? : {plan[`day-${activity[0]}`][0]['loc']}<br />
                    ?????? : ??? {(plan[`day-${activity[0]}`][0]['price']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / ??????<br />
                  </div>

                  <div className={styles.restaurant}>
                    <div>
                      <h4>?????? ?????? 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[0]}`][1]['name']}<br />
                      ?????? : {plan[`day-${activity[0]}`][1]['loc']}<br />
                      ?????? ?????? : {plan[`day-${activity[0]}`][1]['recommend']}<br />
                    </div>
                    <div>
                      <h4>?????? ?????? 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[0]}`][2]['name']}<br />
                      ?????? : {plan[`day-${activity[0]}`][2]['loc']}<br />
                      ?????? ?????? : {plan[`day-${activity[0]}`][2]['recommend']} <br />
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div>
                      <h4>?????? ????????? 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[0]}`][3]['name']}<br />
                      ?????? : {plan[`day-${activity[0]}`][3]['address']}<br />
                      ?????? : {plan[`day-${activity[0]}`][3]['explanation']}<br />
                    </div>
                    <div>
                      <h4>?????? ????????? 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[0]}`][4]['name']}<br />
                      ?????? : {plan[`day-${activity[0]}`][4]['address']}<br />
                      ?????? : {plan[`day-${activity[0]}`][4]['explanation']}<br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ minWidth: 700 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DAY 3</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <div className={styles.accor_container}>
                <>
                  <Map
                      center={{
                        lat: acc['lat'],
                        lng: acc['log'],
                      }}
                      style={{
                        width: "1000px",
                        height: "600px",
                      }}
                      level={9}
                      onCreate={setMap}
                    >
                        <MapMarker
                        position={{lat: acc['lat'], lng:acc['log']}}
                        // title='?????? ??????'
                        image={{
                            // ?????? ?????????????????? ??????: https://www.flaticon.com/kr/
                            // src: "https://cdn-icons.flaticon.com/png/512/5693/premium/5693914.png?token=exp=1637741898~hmac=fada3fe37d0197cf397c5d7713400e95", 
                            src: 'https://cdn-icons-png.flaticon.com/512/5717/5717316.png',
                            size: {
                              width: 45,
                              height: 45,
                            }, 
                            options: {
                              offset: {
                                x: 25,
                                y: 45,
                              }, 
                            },
                          }}
                          onClick={(marker) => map.panTo(marker.getPosition())}
                          onMouseOver={() => setIsOpen(true)}
                          onMouseOut={() => setIsOpen(false)}
                        >{isOpen && <div style={{ padding: "5px", color: "#000" }}>?????? ??????</div>}</MapMarker>
                        {points2.map((value) => (
                          <EventMarkerContainer
                            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
                            position={value.latlng}
                            content={value.content}
                          />
                        ))}
                    </Map>
                </>
                  <div className={styles.activity}>
                    <h4>?????? ??????</h4>
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center 40%",
                        // backgroundImage: `url(${image.url})`,
                        // marginTop: '-30px'
                      }}
                    />
                    ?????? : {plan[`day-${activity[1]}`][0]['name']}<br />
                    ???????????? : {plan[`day-${activity[1]}`][0]['start_business_time']} - {plan[`day-${activity[1]}`][0]['end_business_time']} <br />
                    ???????????? : {plan[`day-${activity[1]}`][0]['time']}<br />
                    ?????? : {plan[`day-${activity[1]}`][0]['loc']}<br />
                    ?????? : ??? {(plan[`day-${activity[1]}`][0]['price']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / ??????<br />
                  </div>

                  <div className={styles.restaurant}>
                    <div>
                      <h4>?????? ?????? 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[1]}`][1]['name']}<br />
                      ?????? : {plan[`day-${activity[1]}`][1]['loc']}<br />
                      ?????? ?????? : {plan[`day-${activity[1]}`][1]['recommend']}<br />
                    </div>
                    <div>
                      <h4>?????? ?????? 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[1]}`][2]['name']}<br />
                      ?????? : {plan[`day-${activity[1]}`][2]['loc']}<br />
                      ?????? ?????? : {plan[`day-${activity[1]}`][2]['recommend']} <br />
                    </div>
                  </div>

                  <div className={styles.tourist}>
                    <div>
                      <h4>?????? ????????? 1</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[1]}`][3]['name']}<br />
                      ?????? : {plan[`day-${activity[1]}`][3]['address']}<br />
                      ?????? : {plan[`day-${activity[1]}`][3]['explanation']}<br />
                    </div>
                    <div>
                      <h4>?????? ????????? 2</h4>
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center 40%",
                          // backgroundImage: `url(${image.url})`,
                          // marginTop: '-30px'
                        }}
                      />
                      ?????? : {plan[`day-${activity[1]}`][4]['name']}<br />
                      ?????? : {plan[`day-${activity[1]}`][4]['address']}<br />
                      ?????? : {plan[`day-${activity[1]}`][4]['explanation']}<br />
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion> */}
        
          </Box>


        {/* <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 9,
          }}
        > */}
        <div style={{alignItems: "center"}}>
          <Button
            onClick={()=>{navigate("/invoice")}}
            // component={Link}
            // to="/invoice"
            sx={{
              border: "4px solid currentColor",
              borderRadius: 0,
              alignItems: "center",
              height: "auto",
              py: 2,
              px: 5,
            }}
          >
            <Typography variant="h4" component="span">
              ????????????
            </Typography>
          </Button>
          <Typography variant="subtitle1" sx={{ my: 3 }}>
            ????????? ???????????? ??????????????? ???????????????.
          </Typography>
        {/* </Container> */}
        </div>
        </div>
      </TripLayout>
    </>
  );
}
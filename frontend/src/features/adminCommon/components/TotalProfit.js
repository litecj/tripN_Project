import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import { totalProfit } from "../reducer/adminSlice";

const TotalProfit2 = () => {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.admin.totalProfitState["price__sum"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  useEffect(() => {
    dispatch(totalProfit());
    // console.log("보낸다");
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              총매출액
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {total}원
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: indigo[600],
                height: 56,
                width: 56,
              }}
            ></Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TotalProfit2;

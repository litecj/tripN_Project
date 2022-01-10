import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            예상방문객수
          </Typography>
          <Typography color="textPrimary" variant="h4">
            100명
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

export default TotalProfit;

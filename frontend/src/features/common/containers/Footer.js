import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LANGUAGES = [
  {
    code: "ko-KR",
    name: "한국어",
  },
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "ch-CH",
    name: "中文",
  },
];

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" component={RouterLink} to="/">
        https://tripn.shop
      </Link>
      <br />
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Box m="auto">
      <Typography component="footer" sx={{ display: "flex" }}>
        <Container sx={{ my: 3, display: "flex" }}>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4} md={7}>
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                spacing={2}
                sx={{ height: 120 }}
              >
                <Grid item>
                  <Copyright />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <Typography variant="h6" marked="left" gutterBottom>
                Legal
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link
                    component={RouterLink}
                    to="/premium-themes/onepirate/terms/"
                  >
                    Terms
                  </Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link
                    component={RouterLink}
                    to="/premium-themes/onepirate/privacy/"
                  >
                    Privacy
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Language
              </Typography>
              <TextField
                select
                size="medium"
                variant="standard"
                SelectProps={{
                  native: true,
                }}
                sx={{ mt: 1, width: 150 }}
              >
                {LANGUAGES.map((language) => (
                  <option value={language.code} key={language.code}>
                    {language.name}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </Box>
  );
}

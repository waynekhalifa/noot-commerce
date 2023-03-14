import { Box, Container, Grid, Typography } from "@mui/material";

import dashboard from "@images/noot-dashboard.png";
import AboutSuccessBtn from "../AboutSuccessBtn";
import Section from "../UI/Section";
import CenterTitle from "../UI/CenterTitle";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  return (
    <Section background="transparent">
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Container maxWidth="lg">
          {/* <Grid container>
            <Grid item xs={12}>
              <CustomTitle>Best Platform for the Technological Era</CustomTitle>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
              </Typography>
              <AboutSuccessBtn />
            </Grid>
            <Grid item xs={12} sx={{ pt: { xs: 8, md: 0 } }}>
              <Box
                component="img"
                src={dashboard.src}
                alt="noot"
                sx={{ display: "block", height: "auto", maxWidth: "100%" }}
              />
            </Grid>
          </Grid> */}
          {/* ------------- on small screens--------------- */}
          <Box
            sx={{
              display: {
                md: "none",
                lg: "none",
                xs: "block"
              }
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6} lg={6} sx={{ pt: { xs: 8, md: 0 } }}>
                <CenterTitle>
                  Best Platform for the Technological Era
                </CenterTitle>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet
                </Typography>
                <AboutSuccessBtn />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Box
                  component="img"
                  src={dashboard.src}
                  alt="noot"
                  sx={{ display: "block", height: "auto", maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* ------------- on large screens--------------- */}
          <Box
            sx={{
              display: {
                md: "block",
                lg: "block",
                xs: "none"
              }
            }}
          >
            <Grid container>
              <Grid
                item
                md={6}
                lg={5}
                sx={{
                  pt: { xs: 8, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start"
                }}
              >
                <CenterTitle>
                  Best Platform for the
                  <br /> Technological Era
                </CenterTitle>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet
                </Typography>
                <AboutSuccessBtn />
              </Grid>
              <Grid item md={6} lg={7}>
                <Box
                  component="img"
                  src={dashboard.src}
                  alt="noot"
                  sx={{ display: "block", height: "auto", maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Section>
  );
};

export default CreateWebsite;

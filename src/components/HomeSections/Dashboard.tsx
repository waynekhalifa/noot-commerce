import { Box, Container, Grid, Typography } from "@mui/material";

import dashboard from "@images/noot-dashboard.png";
import AboutSuccessBtn from "../AboutSuccessBtn";
import Section from "../UI/Section";
import CenterTitle from "../UI/CenterTitle";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  return (
    <Section background="transparent">
      <Box sx={{ position: "relative", overflow: "hidden", zIndex: "10" }}>
        <Container maxWidth="lg">
          {/* ------------- on small screens--------------- */}
          <Box
            sx={{
              display: {
                md: "none",
                lg: "none",
                xs: "block",
              },
            }}
          >
            <Grid container sx={{ position: "relative", margin: "1rem 0rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background:
                    "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  borderRadius: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  width: "36%",
                  height: "40%",
                  transform: "rotate(150deg)",
                  zIndex: "-1",
                  left: "6rem",
                  top: "21rem",
                  opacity: "0.31",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background:
                    "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  borderRadius: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  width: "36%",
                  height: "40%",
                  transform: "rotate(150deg)",
                  zIndex: "-1",
                  left: "7rem",
                  top: "22rem",
                  opacity: "0.31",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background:
                    "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  borderRadius: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  width: "36%",
                  height: "40%",
                  transform: "rotate(150deg)",
                  zIndex: "-1",
                  left: "6rem",
                  top: "22rem",
                  opacity: "0.41",
                }}
              />
              <Grid item xs={12} md={6} lg={6} sx={{ pt: { md: 0 } }}>
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
                xs: "none",
              },
            }}
          >
            <Grid container sx={{ margin: "5rem 0rem" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background: {
                    lg: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                    md: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  },
                  borderRadius: {
                    md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                    lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  },

                  width: {
                    md: "20%",
                    lg: "15%",
                  },
                  height: {
                    md: "70%",
                    lg: "78%",
                  },

                  transform: "rotate(35deg)",
                  zIndex: "-1",
                  left: {
                    lg: "67rem",
                    md: "47rem",
                  },
                  top: {
                    lg: "3rem",
                    md: "5rem",
                  },
                  opacity: "0.31",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background: {
                    lg: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                    md: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  },
                  borderRadius: {
                    md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                    lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  },

                  width: {
                    md: "20%",
                    lg: "16%",
                  },
                  height: {
                    md: "70%",
                    lg: "78%",
                  },
                  clipPath: {
                    md: "none",
                    lg: "none",
                  },
                  transform: "rotate(35deg)",
                  zIndex: "-1",
                  left: {
                    md: "45rem",
                    lg: "65rem",
                  },
                  top: {
                    md: "5.8rem",
                    lg: "2.7rem",
                  },
                  opacity: "0.31",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background: {
                    lg: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                    md: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  },
                  borderRadius: {
                    md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                    lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  },

                  width: {
                    md: "20%",
                    lg: "13%",
                  },
                  height: {
                    md: "70%",
                    lg: "78%",
                  },
                  clipPath: {
                    md: "none",
                    lg: "none",
                  },
                  transform: "rotate(35deg)",
                  zIndex: "-1",
                  left: {
                    md: "46rem",
                    lg: "66rem",
                  },
                  top: {
                    md: "5rem",
                    lg: "2.4rem",
                  },
                  opacity: "0.31",
                }}
              />
              <Grid
                item
                md={6}
                lg={5}
                sx={{
                  pt: { xs: 8, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
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

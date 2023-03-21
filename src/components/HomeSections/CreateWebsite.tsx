import { Box, Container, Grid, Typography } from "@mui/material";

import websiteTemplate from "@images/website-template.png";
import CenterTitle from "../UI/CenterTitle";
import AboutSuccessBtn from "../AboutSuccessBtn";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        paddingTop: "2rem",
        zIndex: "10",
      }}
    >
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
          <Grid container>
            {/* --------------- */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                width: " 100%",
                height: "100%",
                clipPath: "circle(30%)",
                zIndex: "-1",
                left: "12rem",
                opacity: "0.31",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                background:
                  "linear-gradient(150deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                width: " 100%",
                height: "100%",
                clipPath: "circle(30%)",
                zIndex: "-1",
                left: "10rem",
                top: "0.9rem",
                opacity: "0.43",
              }}
            />
            {/* --------------- */}
            <Grid item xs={12} md={6} lg={6}>
              <CenterTitle>
                CREATE A
                <br />
                WEBSITE
              </CenterTitle>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
              </Typography>
              <AboutSuccessBtn />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                component="img"
                src={websiteTemplate.src}
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
          <Grid container>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                background: {
                  lg: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  md: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                },
                borderRadius: {
                  md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                },

                width: {
                  md: "22%",
                  lg: "18%",
                },
                height: {
                  md: "100%",
                  lg: "100%",
                },
                clipPath: {
                  md: "none",
                  lg: "none",
                },
                transform: "rotate(45deg)",
                zIndex: "-1",
                left: {
                  md: "-11rem",
                  lg: "-13rem",
                },
                top: {
                  md: "4rem",
                  lg: "2rem",
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
                  lg: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  md: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                },
                borderRadius: {
                  md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                },

                width: {
                  md: "22%",
                  lg: "18%",
                },
                height: {
                  md: "100%",
                  lg: "100%",
                },
                clipPath: {
                  md: "none",
                  lg: "none",
                },
                transform: "rotate(45deg)",
                zIndex: "-1",
                left: {
                  md: "-13rem",
                  lg: "-15rem",
                },
                top: {
                  md: "4rem",
                  lg: "2rem",
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
                  lg: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                  md: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
                },
                borderRadius: {
                  md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                  lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
                },

                width: {
                  md: "22%",
                  lg: "18%",
                },
                height: {
                  md: "100%",
                  lg: "100%",
                },
                clipPath: {
                  md: "none",
                  lg: "none",
                },
                transform: "rotate(45deg)",
                zIndex: "-1",
                left: {
                  md: "-15rem",
                  lg: "-17rem",
                },
                top: {
                  md: "4rem",
                  lg: "2rem",
                },
                opacity: "0.31",
              }}
            />
            <Grid item md={6} lg={8}>
              <Box
                component="img"
                src={websiteTemplate.src}
                alt="noot"
                sx={{ display: "block", height: "auto", maxWidth: "100%" }}
              />
            </Grid>
            <Grid
              item
              md={6}
              lg={4}
              sx={{
                pt: { xs: 8, md: 0 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <CenterTitle>
                CREATE A
                <br />
                WEBSITE
              </CenterTitle>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
              </Typography>
              <AboutSuccessBtn />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateWebsite;

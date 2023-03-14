import { Box, Container, Grid, Typography } from "@mui/material";

import websiteTemplate from "@images/website-template.png";
import CenterTitle from "../UI/CenterTitle";
import AboutSuccessBtn from "../AboutSuccessBtn";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", paddingTop: "2rem" }}>
      <Container maxWidth="lg">
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
              xs: "none"
            }
          }}
        >
          <Grid container>
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
                alignItems: "start"
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

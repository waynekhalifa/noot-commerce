import { Box, Container, Grid, Typography } from "@mui/material";

import websiteTemplate from "@images/website-template.png";
import CustomTitle from "../UI/CustomTitle";
import AboutSuccessBtn from "../AboutSuccessBtn";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box
              component="img"
              src={websiteTemplate.src}
              alt="noot"
              sx={{ display: "block", height: "auto", maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sx={{ pt: { xs: 8, md: 0 } }}>
            <CustomTitle>
              CREATE A
              <br />
              WEBSITE
            </CustomTitle>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </Typography>
            <AboutSuccessBtn />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CreateWebsite;

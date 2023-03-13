import { Box, Container, Grid, Typography } from "@mui/material";

import Section from "../UI/Section";
import CustomTitle from "../UI/CustomTitle";
import AboutUsBtn from "../AboutUsBtn";

interface NumberingTitleProps {
  title: string;
  subtitle: string;
}

const NumberingTitle: React.FC<NumberingTitleProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: 48,
          height: 48,
          color: "common.white",
          backgroundColor: "primary.light",
          borderRadius: "50%",
          mb: 1,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
      </Grid>
      <Typography paragraph color="text.secondary" sx={{ mb: 1 }}>
        {subtitle}
      </Typography>
      <Box sx={{ width: 80, height: 4, backgroundColor: "primary.main" }} />
    </Box>
  );
};

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <Section background="transparent">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <CustomTitle>
              Acceleration Process to
              <br />
              Grow Your Business
            </CustomTitle>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </Typography>
            <AboutUsBtn />
          </Grid>
          <Grid item xs={12} sx={{ pt: { xs: 8, md: 0 } }}>
            <Grid container>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <NumberingTitle title="1" subtitle="Market Research" />
                <Typography>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <NumberingTitle title="2" subtitle="Market Research" />
                <Typography>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <NumberingTitle title="3" subtitle="Market Research" />
                <Typography>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;

import { Box, Container, Grid, Typography } from "@mui/material";

import Section from "../UI/Section";
import LinearGradientBtn  from "../LinearGradientBtn";
import CenterTitle from "../UI/CenterTitle";

interface NumberingTitleProps {
  title: string;
}

const NumberingTitle: React.FC<NumberingTitleProps> = ({ title }) => {
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
          mb: 1
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Box
          sx={{
            width: "3px",
            height: "90%",
            backgroundColor: "primary.main",
            borderRadius: "4px"
          }}
        />
      </Box>
    </Box>
  );
};

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <Section background="transparent">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <CenterTitle>
              Acceleration Process to
              <br />
              Grow Your Business
            </CenterTitle>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "start",
                  lg: "start"
                }
              }}
            >
              <LinearGradientBtn content={'About Us'} />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ pt: { xs: 8, md: 0 } }}>
            <Grid container>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <Box sx={{ display: "flex" }} gap={3}>
                  <NumberingTitle title="1" />
                  <Box>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{
                        mb: 1,
                        color: "#06B712",
                        fontWeight: "700",
                        fontSize: "1.4rem"
                      }}
                    >
                      Market Research
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <Box sx={{ display: "flex" }} gap={3}>
                  <NumberingTitle title="2" />
                  <Box>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{
                        mb: 1,
                        color: "#06B712",
                        fontWeight: "700",
                        fontSize: "1.4rem"
                      }}
                    >
                      Market Research
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <Box sx={{ display: "flex" }} gap={3}>
                  <NumberingTitle title="3" />
                  <Box>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{
                        mb: 1,
                        color: "#06B712",
                        fontWeight: "700",
                        fontSize: "1.4rem"
                      }}
                    >
                      Market Research
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;

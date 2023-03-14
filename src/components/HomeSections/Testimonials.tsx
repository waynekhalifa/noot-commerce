import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import CustomTitle from "../UI/CustomTitle";
import Section from "../UI/Section";
import AboutUsBtn from "../AboutUsBtn";

import placeholder from "@images/shutterstock_45.png";
import { excerpt } from "@/helpers/utils";

interface Props {}

const Testimonials: React.FC<Props> = ({}) => {
  return (
    <Section background="transparent">
      <Box sx={{ position: "relative", overflow: "hidden", pb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box
                    component="img"
                    src={placeholder.src}
                    alt="noot"
                    sx={{ display: "block", height: "auto", maxWidth: "100%" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography>Florrie Jacobs</Typography>
                  <Typography color="text.secondary">CEO of Company</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{
                      maxWidth: {
                        lg: "70%",
                        md: "80%",
                        xs: "100%"
                      }
                    }}
                  >
                    {excerpt(
                      `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat`,
                      100
                    )}
                  </Typography>
                  <Box>
                    <StarIcon sx={{ color: "#CB48F9" }} />
                    <StarIcon sx={{ color: "#CB48F9" }} />
                    <StarIcon sx={{ color: "#CB48F9" }} />
                    <StarIcon sx={{ color: "#CB48F9" }} />
                    <StarIcon sx={{ color: "#CB48F9" }} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} md={6} sx={{ pt: { xs: 8, md: 0 } }}>
              <CustomTitle>
                Grow Your Business and
                <br />
                Join Our Happy Users
              </CustomTitle>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet
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
                <AboutUsBtn />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};

export default Testimonials;

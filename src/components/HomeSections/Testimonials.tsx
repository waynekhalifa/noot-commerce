import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import CustomTitle from "../UI/CustomTitle";
import Section from "../UI/Section";
import LinearGradientBtn from "../LinearGradientBtn";

import placeholder from "@images/shutterstock_45.png";
import { excerpt } from "@/helpers/utils";
import Numbers from "./Numbers";

interface Props {}

const Testimonials: React.FC<Props> = ({}) => {
  return (
    <Section background="transparent">
      <Box
        sx={{ position: "relative", overflow: "hidden", pb: 3, zIndex: "1" }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            background: {
              lg: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
              md: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
              xs: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)"
            },
            borderRadius: {
              lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
              md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
              xs: " 10% 10% 10% 10% / 10% 10% 10% 10%"
            },

            width: {
              lg: "85%",
              md: "80%",
              xs: "100%"
            },
            height: {
              lg: "100%",
              md: "100%",
              xs: "80%"
            },
            clipPath: {
              lg: "none",
              md: "none",
              xs: "none"
            },
            transform: "rotate(45deg)",
            zIndex: "-1",
            left: {
              xs: "-18rem",
              md: "23rem",
              lg: "92rem"
            },
            top: {
              xs: "17rem",
              md: "-3rem",
              lg: "29rem"
            },
            opacity: "0.21"
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
              xs: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)"
            },
            borderRadius: {
              lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
              md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
              xs: " 10% 10% 10% 10% / 10% 10% 10% 10%"
            },

            width: {
              lg: "85%",
              md: "80%",
              xs: "100%"
            },
            height: {
              lg: "100%",
              md: "100%",
              xs: "80%"
            },
            clipPath: {
              lg: "none",
              md: "none",
              xs: "none"
            },
            transform: "rotate(45deg)",
            zIndex: "-1",
            left: {
              xs: "-20rem",
              md: "25rem",
              lg: "94rem"
            },
            top: {
              xs: "17rem",
              md: "-3rem",
              lg: "30rem"
            },
            opacity: "0.31"
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
              xs: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)"
            },
            borderRadius: {
              lg: " 10% 10% 10% 10% / 10% 10% 10% 10%",
              md: " 10% 10% 10% 10% / 10% 10% 10% 10%",
              xs: " 10% 10% 10% 10% / 10% 10% 10% 10%"
            },

            width: {
              lg: "85%",
              md: "80%",
              xs: "100%"
            },
            height: {
              lg: "100%",
              md: "100%",
              xs: "80%"
            },
            clipPath: {
              lg: "none",
              md: "none",
              xs: "none"
            },
            transform: "rotate(45deg)",
            zIndex: "-1",
            left: {
              xs: "-24rem",
              md: "27rem",
              lg: "97rem"
            },
            top: {
              xs: "17rem",
              md: "20rem",
              lg: "29rem"
            },
            opacity: "0.41"
          }}
        />
        <Numbers />
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
                <LinearGradientBtn  content={'About Us'}/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};

export default Testimonials;

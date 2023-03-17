import { Box, Container, Grid, Typography } from "@mui/material";

import Section from "../UI/Section";
import AboutSuccessBtn from "../AboutSuccessBtn";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CenterTitle from "../UI/CenterTitle";
import Clients from "./Clients";

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
          mb: 1
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
      <Clients />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: {
            lg: "4rem",
            md: "4rem",
            xs: "1rem"
          }
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            {/* on large screens */}
            <Box
              sx={{
                display: {
                  lg: "none",
                  md: "none",
                  xs: "block"
                }
              }}
            >
              <CenterTitle>
                GROW YOUR
                <br />
                BUSINESS ONLINE
              </CenterTitle>
            </Box>
            {/* on small screens */}
            <Box
              sx={{
                display: {
                  lg: "block",
                  md: "block",
                  xs: "none"
                }
              }}
            >
              <CenterTitle>
                GROW YOUR
                <br />
                BUSINESS
                <br /> ONLINE
              </CenterTitle>
            </Box>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </Typography>
            <AboutSuccessBtn />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ pt: { xs: 8, md: 0, lineHeight: "1.4" } }}
          >
            <Grid container sx={{ position: "relative", zIndex: "1" }}>
              <Grid item xs={6} md={6} lg={6} sx={{ mb: 4 }}>
                <NumberingTitle title="1" subtitle="Market Research" />
                <Typography
                  sx={{
                    marginRight: {
                      xs: "3px ",
                      md: " 1rem",
                      lg: "1.5rem"
                    }
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </Grid>
              <Grid item xs={6} md={6} lg={6} sx={{ mb: 4 }}>
                <NumberingTitle title="2" subtitle="Market Research" />
                <Typography
                  sx={{
                    margin: {
                      xs: "3px 0px"
                    }
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </Grid>
              {/* ---------------------- */}
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
                    lg: "80%",
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
                    xs: "16rem",
                    md: "26rem",
                    lg: "45rem"
                  },
                  top: {
                    xs: "none",
                    md: "-3rem",
                    lg: "-6rem"
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
                    lg: "80%",
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
                    xs: "19rem",
                    md: "28rem",
                    lg: "48rem"
                  },
                  top: {
                    xs: "none",
                    md: "-3rem",
                    lg: "-6rem"
                  },
                  opacity: "0.64"
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
                    lg: "80%",
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
                    xs: "22rem",
                    md: "30rem",
                    lg: "52rem"
                  },
                  top: {
                    xs: "none",
                    md: "-3rem",
                    lg: "-6rem"
                  },
                  opacity: "1.00"
                }}
              />
              {/* ----------- */}
              <Grid item xs={6} md={6} lg={6} sx={{ mb: 4 }}>
                <NumberingTitle title="3" subtitle="Market Research" />
                <Typography
                  sx={{
                    marginRight: {
                      xs: "3px ",
                      md: " 1rem",
                      lg: "1.5rem"
                    }
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                sx={{ mb: 8, alignSelf: "flex-end" }}
              >
                <Link
                  href="#1"
                  style={{
                    color: "#6DC45E",
                    textDecoration: "none",
                    display: "flex"
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      margin: {
                        xs: "0px 3px",
                        md: "0rem 1rem",
                        lg: "0rem 1.5rem",
                        fontWeight: "600"
                      }
                    }}
                  >
                    GET STARTED
                  </Typography>
                  <ArrowRightAltIcon sx={{ fontSize: "2rem" }} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;

import { Box, Typography, Container, Grid } from "@mui/material";
import OptimizedImg from "../OptimizedImg";
import useMediaQuery from "@mui/material/useMediaQuery";

const WhyNoot = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: {
            lg: "block",
            md: "none",
            xs: "none",
            sm: "none"
          },
          position: "absolute",
          right: "-38rem"
        }}
      >
        <OptimizedImg
          src="/images/landEffects/Rectangle.webp"
          width={1100}
          height={940}
          alt="shape"
          style={{
            objectFit: "contain"
          }}
        />
      </Box>
      {/* only on tablet */}

      <Box
        sx={{
          display: {
            lg: "none",
            md: "block",
            xs: "none",
            sm: "none"
          }
        }}
      >
        <OptimizedImg
          src="/images/landEffects/Rectangle.webp"
          width={940}
          height={940}
          alt="shape"
          style={{
            objectFit: "contain",
            position: "absolute",
            top: "-43px"
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative"
        }}
      >
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              paddingTop: {
                xs: "0px",
                sm: "20px",
                md: "40px",
                lg: "50px",
                xl: "60px"
              },
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <Grid item sm={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start"
                  }
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#6DC45E",
                      display: "block",
                      fontSize: {
                        xs: "6rem",
                        sm: "7rem",
                        md: "8rem",
                        lg: "9rem",
                        xl: "9rem"
                      },
                      // margin: "0 30px 0 0",
                      fontWeight: "400"
                    }}
                  >
                    Why
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "2.3rem",
                        sm: "2.4rem",
                        md: "2.7rem",
                        lg: "2.7rem",
                        xl: "2.7rem"
                      },
                      fontWeight: "400"
                    }}
                  >
                    do you need
                    <br />a website
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      alignSelf: "start",
                      color: "#6DC45E",
                      fontSize: {
                        xs: "12rem",
                        sm: "13rem",
                        md: "14rem",
                        lg: "15rem",
                        xl: "15rem"
                      },
                      fontWeight: "400"
                    }}
                  >
                    ?
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  paddingTop: "2rem",
                  "@media(max-width:767px)": {
                    div: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      textAlign: "center"
                    }
                  }
                }}
              >
                <Box>
                  <Box
                    sx={{
                      marginBottom: "15px",
                      background:
                        "linear-gradient( #000000 , #000000) padding-box , linear-gradient( #058E97 , #76C95A) border-box",
                      borderWidth: "1.5rem",
                      borderStyle: "solid",
                      borderColor: "transparent",
                      borderTopColor: "#D5DBD4",
                      borderRadius: "50%",
                      width: "10rem",
                      height: "10rem",
                      position: "relative",
                      transform: "rotate(-45deg)",
                      ":after": {
                        content: '"70 - 80%"',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: " translate(-50% , -50%) rotate(45deg) ",
                        fontSize: "1.8rem",
                        textAlign: "center",
                        color: "#06B7B7",
                        fontWeight: "700"
                      }
                    }}
                  />

                  <Typography paragraph sx={{ fontSize: "1.4rem" }}>
                    of people were researching companies online before visiting
                    it Website makes you look professional and increases trust
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      marginBottom: "15px",
                      background:
                        "linear-gradient( #000000 , #000000) padding-box , linear-gradient( #058E97 , #76C95A) border-box",
                      borderWidth: "1.5rem",
                      borderStyle: "solid",
                      borderColor: "transparent",
                      borderTopColor: "#D5DBD4",
                      borderRadius: "50%",
                      width: "10rem",
                      height: "10rem",
                      position: "relative",
                      transform: "rotate(-45deg)",
                      ":after": {
                        content: '"64%"',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: " translate(-50% , -50%) rotate(45deg) ",
                        fontSize: "2rem",
                        textAlign: "center",
                        color: "#06B7B7",
                        fontWeight: "700"
                      }
                    }}
                  />

                  <Typography paragraph sx={{ fontSize: "1.4rem" }}>
                    of people don't trust a business without a good website.
                    <br /> More than 81% of businesses and companies that own a
                    website outperform their competitors in every way.
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <OptimizedImg
                      src="/images/icons/arrowIcon.webp"
                      alt="noot"
                      width={180}
                      height={180}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography paragraph sx={{ fontSize: "1.4rem" }}>
                    available website makes your business stay on customer’s
                    minds even after business hours.
                    <br /> A clean, modern page that is regularly updated and
                    pops up in earch engines is an instant credibility boost.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item sm={12} lg={6} xs={12}>
              {/* only on phone */}
              <Box
                sx={{
                  display: {
                    xl: "none",
                    lg: "none",
                    md: "none",
                    xs: "block"
                  },
                  overflow: "hidden"
                }}
              >
                <OptimizedImg
                  src="/images/whyNoot.webp"
                  alt="noot"
                  width={500}
                  height={300}
                  style={{ objectFit: "contain", maxWidth: "100%" }}
                />
              </Box>
              {/* only on laptop */}
              <Box
                sx={{
                  display: {
                    xl: "block",
                    lg: "none",
                    md: "none",
                    xs: "none"
                  },
                  overflow: "hidden"
                }}
              >
                <OptimizedImg
                  src="/images/whyNoot.webp"
                  alt="noot"
                  width={900}
                  height={700}
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    position: "absolute"
                  }}
                />
              </Box>

              {/* only on tablet */}
              <Box
                sx={{
                  display: {
                    xl: "none",
                    lg: "block",
                    md: "none",
                    xs: "none"
                  },
                  paddingLeft: "2rem",
                  overflow: "hidden"
                }}
              >
                <OptimizedImg
                  src="/images/whyNoot.webp"
                  alt="noot"
                  width={700}
                  height={500}
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    position: "absolute"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
export default WhyNoot;

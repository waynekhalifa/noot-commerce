import { Box, Button, Container, Grid, Typography } from "@mui/material";

interface Props {}

import img from "@images/laptop-preview.png";
import circles from "@images/circles.png";
import circle from "@images/circle.png";
import Link from "next/link";

const Featured: React.FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        position: "relative",
        pt: {
          lg: 8,
          md: 8,
          xs: 1
        },
        pb: 3,

        color: "common.white"
      }}
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
            lg: " 0% 0% 100% 70% / 31% 69% 100% 0% ",
            md: " 0% 0% 100% 70% / 31% 69% 100% 0% ",
            xs: "none"
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
            xs: "polygon(0% 0%, 100% 0%, 100% 40%, 50% 100%, 0 40%)"
          }
        }}
      />
      {/* <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
       
          // borderRadius: "48% 52% 50% 50% / 0% 0% 100% 100%",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 50% 100%, 0 40%)",
          width:''
     
        }}
      /> */}
      <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: 0,
            width: "56%",
            transform: "translateX(50%)",
            overflow: "hidden"
          }}
        >
          <Box
            component="img"
            src={circles.src}
            alt="noot"
            sx={{ display: "block", height: "auto", maxWidth: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          left: "4%",
          width: "24%",
          overflow: "hidden"
        }}
      >
        <Box
          component="img"
          src={circle.src}
          alt="noot"
          sx={{ display: "block", height: "auto", maxWidth: "100%" }}
        />
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", inset: 0, img: { maxWidth: "56%" } }}
      >
        <Box
          component="img"
          src={circles.src}
          alt="noot"
          sx={{ display: "block", height: "auto", maxWidth: "100%" }}
        />
      </Grid>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              lg: "row",
              md: "row"
            }
          }}
        >
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: {
                xs: "center",
                md: "start",
                le: "start"
              },
              flexDirection: "column"
            }}
          >
            <Typography
              variant="h4"
              fontWeight={400}
              pt={1}
              sx={{
                fontSize: {
                  lg: "3.125rem",
                  md: "2.125rem",
                  xs: "1.5rem"
                },
                marginBottom: {
                  lg: "1rem",
                  md: "1rem",
                  xs: "1rem"
                },
                fontWeight: {
                  lg: "700",
                  md: "700",
                  xs: "400"
                }
              }}
            >
              EVERYTHING TO
              <br />
              SELL ANYTHING
            </Typography>
            <Typography
              sx={{
                lineHeight: {
                  lg: "1.25",
                  md: "1.25",
                  xs: "1"
                },
                textAlign: {
                  lg: "start",
                  md: "start",
                  xs: "center"
                }
              }}
              variant="h6"
              fontWeight={400}
            >
              Start your free website trial today.
              <br />
              No credit card required.
            </Typography>

            <Link href="/dashboard/overview">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "common.white",
                borderRadius: "25px",
                letterSpacing: "2px",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "common.white",
                  color: "primary.main"
                },
                marginTop: {
                  lg: "1.4rem",
                  md: "1rem",
                  xs: "1rem"
                }
              }}
              >
              get started
            </Button>
              </Link>
          </Box>
          <Box flex={2}>
            <Box
              component="img"
              src={img.src}
              alt="noot"
              sx={{
                display: "block",
                height: "auto",
                maxWidth: "100%",
                paddingTop: "2rem"
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Featured;

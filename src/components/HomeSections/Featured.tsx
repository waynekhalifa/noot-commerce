import { Box, Button, Container, Grid, Typography } from "@mui/material";

interface Props {}

import img from "@images/laptop-preview.png";
import circles from "@images/circles.png";
import circle from "@images/circle.png";

const Featured: React.FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        position: "relative",
        pt: {
          lg: 8,
          md: 8,
          xs: "20px"
        },
        pb: 3,
        overFlow: "hidden",
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
            xs: "60%"
          },
          clipPath: {
            lg: "none",
            md: "none",
            xs: "polygon(0% 0%, 100% 0%, 100% 40%, 50% 100%, 0 40%)"
          }
        }}
      />
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
                lg: "start"
              },
              flexDirection: "column"
            }}
          >
            <Typography
              variant="h4"
              fontWeight={400}
              sx={{
                fontSize: {
                  lg: "2.23rem",
                  md: "2.23rem",
                  xs: "1.5rem"
                }
              }}
            >
              EVERYTHING TO
              <br />
              SELL ANYTHING
            </Typography>
            <Typography
              paragraph
              variant="h6"
              component="p"
              fontWeight={400}
              pt={1}
              sx={{
                lineHeight: {
                  xs: "1",
                  md: "1.5",
                  lg: "1.5"
                },
                textAlign: {
                  lg: "left",
                  md: "left",
                  xs: "center"
                }
              }}
            >
              Start your free website trial today.
              <br />
              No credit card required.
            </Typography>
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
                }
              }}
            >
              get started
            </Button>
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

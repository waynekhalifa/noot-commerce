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
        pt: 8,
        pb: 3,
        background:
          "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
        borderRadius: "100% 0% 100% 0% / 0% 36% 64% 100%",
        color: "common.white"
      }}
    >
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
        {/* <Container
          // maxWidth="md"
          sx={{
            display: {
              lg: "flex",
              md: "flex"
            },
            justifyContent: "center",
            alignItems: {
              md: "center",
              lg: "center"
            },
            maxWidth: {
              sx: "md"
            }
          }}
        >
          <Box flex={1}>
            <Typography variant="h4" fontWeight={700} paragraph>
              EVERYTHING TO
              <br />
              SELL ANYTHING
            </Typography>
            <Typography paragraph variant="h6" component="p" fontWeight={400}>
              Start your free website trial today.
              <br />
              No credit card required.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "common.white",
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
          <Box sx={{ mt: 4 }} flex={1}>
            <Box
              component="img"
              src={img.src}
              alt="noot"
              sx={{ display: "block", height: "auto", maxWidth: "100%" }}
            />
          </Box>
        </Container> */}
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
            <Typography variant="h4" fontWeight={400} paragraph>
              EVERYTHING TO
              <br />
              SELL ANYTHING
            </Typography>
            <Typography paragraph variant="h6" component="p" fontWeight={400}>
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

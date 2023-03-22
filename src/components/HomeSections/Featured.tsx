import { Box, Button, Container, Grid, Typography } from "@mui/material";

interface Props {}

import circles from "@images/circles.png";
import circle from "@images/circle.png";
import Link from "next/link";
import { Pages, Routes } from "@/constants/enums";
import OptimizedImg from "../OptimizedImg";

const Featured: React.FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        position: "relative",
        pt: {
          lg: 8,
          md: 8,
          xs: "4.5rem",
        },
        pb: 3,

        color: "common.white",
      }}
    >
      {/* effects start */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          background: {
            lg: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
            md: "linear-gradient(180deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
            xs: "linear-gradient(90deg, \n#058e97 10.41%, \n#76c95a 100.00%)",
          },
          borderRadius: {
            lg: " 0% 0% 100% 70% / 31% 69% 100% 0% ",
            md: " 0% 0% 100% 70% / 31% 69% 100% 0% ",
            xs: "none",
          },

          width: {
            lg: "80%",
            md: "80%",
            xs: "100%",
          },
          height: {
            lg: "100%",
            md: "100%",
            xs: "80%",
          },
          clipPath: {
            lg: "none",
            md: "none",
            xs: "polygon(0% 0%, 100% 0%, 100% 40%, 50% 100%, 0 40%)",
          },
          top: "4rem",
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
            overflow: "hidden",
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
          top: "13%",
          left: "0%",
          width: "24%",
          overflow: "hidden",
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
      {/* effects end */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              lg: "row",
              md: "row",
            },
            position: "relative",
            paddingTop: "60px",
          }}
        >
          <Typography
            paragraph
            sx={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "18px",
              backgroundColor: "#06B7B7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              margin: "0",
              width: "60%",
              height: "55px",
              padding: "0 30px",
              "@media(max-width:992px)": {
                top: "15px",
                width: "75%",
              },
              "@media(max-width:768px)": {
                width: "85%",
                fontSize: "15px",
              },
            }}
          >
            Choose a website template and start your free 7 days trial today
          </Typography>
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: {
                xs: "center",
                md: "start",
                le: "start",
              },
              flexDirection: "column",
              "@media(max-width:767px)": {
                marginTop: "30px",
              },
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
                  xs: "1.7rem",
                },
                marginBottom: {
                  lg: "1rem",
                  md: "1rem",
                  xs: "1rem",
                },
                fontWeight: {
                  lg: "700",
                  md: "700",
                  xs: "600",
                },
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
                  xs: "1",
                },
                textAlign: {
                  lg: "start",
                  md: "start",
                  xs: "center",
                },
              }}
              variant="h6"
              fontWeight={400}
            >
              Start your free website trial today.
              <br />
              No credit card required.
            </Typography>

            <Link
              href={`/${Routes.DASHBOARD}/${Pages.OVERVIEW}`}
              style={{ textDecoration: "none" }}
            >
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
                    color: "primary.main",
                  },
                  marginTop: {
                    lg: "1.4rem",
                    md: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                get started
              </Button>
            </Link>
          </Box>
          <Box flex={2}>
            <OptimizedImg
              src="/images/laptop-preview.webp"
              width={600}
              height={500}
              alt="noot"
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Featured;

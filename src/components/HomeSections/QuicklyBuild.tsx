import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import OptimizedImg from "../OptimizedImg";
import { useTheme } from "@mui/material/styles";

const QuicklyBuild = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "60px"
        }}
      >
        <Grid item sm={12} md={6} sx={{ width: "max-content" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "fit-content"
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "4rem",
                color: "#6DC45E",
                margin: "0",
                fontWeight: "400",
                lineHeight: "1"
              }}
            >
              Quickly
            </Typography>
            <Typography
              paragraph
              sx={{
                color: theme.palette.primary.main,
                display: "block",
                fontSize: "6rem",
                margin: "0",
                fontWeight: 700,
                lineHeight: "1"
              }}
            >
              build
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Box
                component={"span"}
                sx={{
                  color: "#6DC45E",
                  fontSize: "1.2rem",
                  marginRight: "15px",
                  fontWeight: "400",
                  lineHeight: "1",
                  alignSelf: "center",
                  paddingTop: "6px"
                }}
              >
                and
              </Box>
              <Typography
                paragraph
                sx={{
                  color: "#6DC45E",
                  display: "block",
                  fontSize: "4rem",
                  margin: "0",
                  fontWeight: 700,
                  lineHeight: "0.7"
                }}
              >
                create
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "fit-content" }}>
            <Typography
              variant="h3"
              pt={2}
              sx={{
                fontSize: "2rem",
                fontWeight: "400"
              }}
            >
              your own Website with
              <br /> Our Unified Platform
            </Typography>
            <Box
              sx={{
                marginTop: "1rem",
                height: "0.2rem",
                borderRadius: "30px",
                width: "100%",
                backgroundColor: "#6DC45E"
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            "@media(max-width:991px)": {
              padding: "60px 0 30px"
            }
          }}
        >
          <OptimizedImg
            src="/images/quicklyBuild.webp"
            alt="noot"
            width={500}
            height={500}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "100%"
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ paddingBottom: "60px" }}>
        <Typography
          variant="h3"
          // pt={10}
          sx={{
            paddingTop: {
              xs: "25px",
              sm: "30px",
              md: "40px",
              lg: "50px",
              xl: "60px"
            },
            fontSize: {
              xs:"1.7rem",
              sm:"2rem",
              md:"2rem",
              lg:"2rem",
              xl:"2rem"
            },
            color: "#6DC45E",
            margin: "0",
            fontWeight: "400"
          }}
        >
          Grow your business with
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "@media(max-width:767px)": {
                flexDirection: "column"
              }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                display: "block",
                fontSize: {
                  xs:"7rem",
                  sm:"8rem",
                  md:"8rem",
                  lg:"8rem",
                  xl:"8rem"
                },
                margin: "0 60px 0 0",
                fontWeight: "400",
                "@media(max-width:767px)": {
                  margin: "0"
                }
              }}
            >
              Noot
              <OptimizedImg
                style={{ position: "relative", bottom: "80px", left: "30px" }}
                src="/images/icons/copyRight.svg"
                width={15}
                height={15}
                alt="noot"
              />
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: {
                  xs:"1.7rem",
                  sm:"2rem",
                  md:"2rem",
                  lg:"2rem",
                  xl:"2rem"
                },
                margin: "15px 0 0",
                fontWeight: "400",
                color: `${theme.palette.mode === "light" ? "black" : "white"}`
              }}
            >
              and have a one place to
              <br /> manage all your
            </Typography>
          </Box>
        </Typography>
      </Box>
    </Container>
  );
};

export default QuicklyBuild;

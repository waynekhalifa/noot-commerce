import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import OptimizedImg from "../OptimizedImg";

const QuicklyBuild = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "60px",
        }}
      >
        <Grid item sm={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "35px",
              color: "#6DC45E",
              margin: "0",
              fontWeight: "400",
            }}
          >
            Quickly
            <Typography
              paragraph
              sx={{
                color: "#06B7B7",
                display: "block",
                fontSize: "60px",
                margin: "0",
                fontWeight: "500",
              }}
            >
              build
            </Typography>
            <Box
              component={"span"}
              sx={{
                color: "#6DC45E",
                fontSize: "20px",
                marginRight: "15px",
                fontWeight: "400",
              }}
            >
              and
            </Box>
            create
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
             
              margin: "15px 0 0",
              fontWeight: "400",
              position: "relative",
              width: "fit-content",
              ":after": {
                content: '""',
                position: "absolute",
                bottom: "-30px",
                left: "0",
                width: "100%",
                height: "2px",
                backgroundColor: "#6DC45E",
              },
            }}
          >
            your own Website with Our Unified Platform
          </Typography>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            "@media(max-width:991px)": {
              padding: "60px 0 30px",
            },
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
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ paddingBottom: "60px" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "20px",
            color: "#6DC45E",
            margin: "0",
            fontWeight: "400",
          }}
        >
          Grow your business with
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "@media(max-width:767px)": {
                flexDirection: "column",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#06B7B7",
                display: "block",
                fontSize: "60px",
                margin: "0 60px 0 0",
                fontWeight: "500",
                "@media(max-width:767px)": {
                  margin: "0",
                },
              }}
            >
              Noot
              <OptimizedImg
                style={{ position: "relative", bottom: "35px", left: "30px" }}
                src="/images/icons/copyRight.svg"
                width={15}
                height={15}
                alt="noot"
              />
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                
                margin: "15px 0 0",
                fontWeight: "400",
              }}
            >
              and have a one place to manage all your
            </Typography>
          </Box>
        </Typography>
      </Box>
    </Container>
  );
};

export default QuicklyBuild;

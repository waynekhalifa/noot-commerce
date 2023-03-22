import { Box, Container, Typography } from "@mui/material";
import OptimizedImg from "../OptimizedImg";

const QuicklyBuild = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "relative",
            ":after": {
              content: '""',
              position: "absolute",
              bottom: "-15px",
              width: "100%",
              height: "2px",
              backgroundColor: "#6DC45E",
            },
          }}
        >
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
              variant="h4"
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
              color: "white",
              margin: "15px 0 0",
              fontWeight: "400",
            }}
          >
            your own Website with Our Unified Platform
          </Typography>
          <Typography
            paragraph
            sx={{
              fontSize: "16px",
              color: "white",
              fontWeight: "400",
            }}
          ></Typography>
        </Box>
        <Box>
          <OptimizedImg
            src="/images/quicklyBuild.webp"
            alt="noot"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
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
                color: "white",
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

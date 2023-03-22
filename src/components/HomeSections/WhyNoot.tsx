import { Box, Typography, Container } from "@mui/material";
import OptimizedImg from "../OptimizedImg";

const WhyNoot = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          paddingTop: "60px",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#6DC45E",
              display: "block",
              fontSize: "60px",
              margin: "0 60px 0 0",
              fontWeight: "500",
            }}
          >
            Why ?
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "20px",
              color: "white",
              margin: "0",
              fontWeight: "400",
            }}
          >
            do you need a website
          </Typography>
          <Box sx={{ paddingTop: "60px" }}>
            <Box>
              <Box
                sx={{
                  marginBottom: "15px",
                  background:
                    "linear-gradient( #121212 , #121212) padding-box , linear-gradient( #058E97 , #76C95A) border-box",
                  borderWidth: "15px",
                  borderStyle: "solid",
                  borderColor: "transparent",
                  borderTopColor: "#D5DBD4",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  position: "relative",
                  transform: "rotate(-45deg)",
                  ":after": {
                    content: '"70 - 80%"',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: " translate(-50% , -50%) rotate(45deg) ",
                    fontSize: "14px",
                    textAlign: "center",
                    color: "#06B7B7",
                    fontWeight: "500",
                  },
                }}
              />

              <Typography paragraph sx={{ fontSize: "16px", color: "white" }}>
                of people were researching companies online before visiting it
                Website makes you look professional and increases trust
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  marginBottom: "15px",
                  background:
                    "linear-gradient( #121212 , #121212) padding-box , linear-gradient( #058E97 , #76C95A) border-box",
                  borderWidth: "15px",
                  borderStyle: "solid",
                  borderColor: "transparent",
                  borderTopColor: "#D5DBD4",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  position: "relative",
                  transform: "rotate(-45deg)",
                  ":after": {
                    content: '"64%"',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: " translate(-50% , -50%) rotate(45deg) ",
                    fontSize: "14px",
                    textAlign: "center",
                    color: "#06B7B7",
                    fontWeight: "500",
                  },
                }}
              />

              <Typography paragraph sx={{ fontSize: "16px", color: "white" }}>
                of people don't trust a business without a good website. More
                than 81% of businesses and companies that own a website
                outperform their competitors in every way.
              </Typography>
            </Box>
            <Box>
              <Box>
                <OptimizedImg
                  src="/images/icons/arrowIcon.webp"
                  alt="noot"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography paragraph sx={{ fontSize: "16px", color: "white" }}>
                available website makes your business stay on customer’s minds
                even after business hours. A clean, modern page that is
                regularly updated and pops up in earch engines is an instant
                credibility boost.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <OptimizedImg
            src="/images/whyNoot.webp"
            alt="whyNoot"
            width={600}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Container>
  );
};
export default WhyNoot;

import { Box, Container, Typography } from "@mui/material";
import Section from "../UI/Section";

import noLimits from "@images/no-limits.png";

interface Props {}

const TryNoot: React.FC<Props> = ({}) => {
  return (
    <Section background="transparent">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "start",
              md: "center",
              lg: "center"
            }
          }}
        >
          <Typography
            paragraph
            mb="6px"
            sx={{
              fontSize: {
                xs: "1.3rem",
                md: "1.7rem",
                lg: "1.8rem"
              }
            }}
          >
            Try Noot no credit required.
          </Typography>

          <Typography
            // variant="h4"
            paragraph
            sx={{
              color: "#6DC45E",
              fontWeight: "700",
              fontSize: {
                md: "2rem",
                lg: "3rem"
              },
              display: {
                xs: "none",
                lg: "block",
                md: "block"
              },
              lineHeight: "1,25"
            }}
          >
            Create a website without limits
          </Typography>
          <Typography
            // variant="h4"
            paragraph
            sx={{
              color: "#6DC45E",
              fontWeight: "700",
              fontSize: "1.7rem",
              display: {
                xs: "block",
                lg: "none",
                md: "none"
              },

              lineHeight: "1,1"
            }}
          >
            Create a website <br /> without limits
          </Typography>

          <Typography
            paragraph
            sx={{
              textAlign: {
                xs: "start",
                md: "center",
                lg: "center"
              },
              fontSize: {
                xs: "0.95rem",
                md: "2rem",
                lg: "1.6rem"
              },
              maxWidth: {
                xs: "100%",
                md: "80%",
                lg: "70%"
              }
            }}
          >
            Build and scale with confidence. From powerful site infrastructure
            to advanced business solutions—we’ve got you covered.
          </Typography>
          <Box
            component="img"
            src={noLimits.src}
            alt="noot"
            sx={{ display: "block", height: "auto", maxWidth: "100%", mt: 4 }}
          />
        </Box>
      </Container>
    </Section>
  );
};

export default TryNoot;

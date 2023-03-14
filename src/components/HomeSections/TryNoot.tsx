import { Box, Container, Typography } from "@mui/material";
import Section from "../UI/Section";

import noLimits from "@images/no-limits.png";

interface Props {}

const TryNoot: React.FC<Props> = ({}) => {
  return (
    <Section background="transparent">
      <Container maxWidth="lg">
        <Typography paragraph textAlign={"center"}>
          Try Noot no credit required
        </Typography>
        <Typography
          // variant="h4"
          paragraph
          textAlign={"center"}
          sx={{
            color: "#6DC45E",
            fontWeight: "700",
            fontSize: "2rem",
            lineHeight: "1,25"
          }}
        >
          Create a website without limits
        </Typography>
        <Typography paragraph textAlign={"center"}>
          Build and scale with confidence. From powerful site infrastructure to
          advanced business solutions—we’ve got you covered.
        </Typography>
        <Box
          component="img"
          src={noLimits.src}
          alt="noot"
          sx={{ display: "block", height: "auto", maxWidth: "100%", mt: 4 }}
        />
      </Container>
    </Section>
  );
};

export default TryNoot;

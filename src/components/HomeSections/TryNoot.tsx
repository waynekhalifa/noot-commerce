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
        <Typography variant="h5" paragraph textAlign={"center"}>
          Create a website with out limits
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

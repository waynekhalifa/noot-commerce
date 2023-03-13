import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import Section from "../UI/Section";

interface NumberingTitleProps {
  title: string;
  subtitle: string;
}

const NumberingTitle: React.FC<NumberingTitleProps> = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: 48,
          height: 48,
          color: "common.white",
          backgroundColor: "primary.light",
          borderRadius: "50%",
          mb: 1,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>
      </Grid>
      <Typography paragraph color="text.secondary" sx={{ mb: 1 }}>
        {subtitle}
      </Typography>
      <Box sx={{ width: 80, height: 4, backgroundColor: "primary.main" }} />
    </Box>
  );
};

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <Section background="transparent">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              fontWeight={700}
              paragraph
              sx={{ color: "primary.main" }}
            >
              GROW YOUR
              <br />
              BUSINESS
              <br />
              ONLINE
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </Typography>
            <Button
              size="large"
              sx={{ p: 0, textTransform: "initial", fontSize: "1.15rem" }}
              endIcon={
                <ArrowRightAltIcon
                  fontSize="large"
                  sx={{ transform: "scale(1.5)" }}
                />
              }
            >
              Learn about our success
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ pt: { xs: 8, md: 0 } }}>
            <Grid container>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <NumberingTitle title="1" subtitle="Create a website" />
                <Typography>
                  Select from any of our industry-leading website templates,
                  designer fonts, and color palettes that best fit your personal
                  style and professional needs.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <NumberingTitle title="2" subtitle="Ecommerce made easy" />
                <Typography>
                  Explore which tools you want to add—whether it’s setting up an
                  online store, booking services, or adding your favorite
                  third-party extensions.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <NumberingTitle title="3" subtitle="Market your business" />
                <Typography>
                  Stand out in every inbox and social feed. On-brand email
                  campaigns and social tools make it easy to retain customers
                  and grow your audience.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mb: 8 }}>
                <Button
                  size="large"
                  sx={{ p: 0, fontSize: "1.15rem" }}
                  endIcon={
                    <ArrowRightAltIcon
                      fontSize="large"
                      sx={{ transform: "scale(1.5)" }}
                    />
                  }
                >
                  Get started
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Services;

import LinearGradientBtn from "@/components/LinearGradientBtn";
import Section from "@/components/UI/Section/Section";
import Widget from "@/components/UI/Widget/Widget";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
const DashboardWidgets = () => {
  return (
    <Section background="transparent">
      <Container>
        <Stack
          py={3}
          alignItems="end"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Box>
            <Typography variant="h5" sx={{ color: "#12948f" }}>
              Management Center
            </Typography>
            <Typography variant="h5">
              From here you can Manage / Promote Or adjust Your Settings
            </Typography>
          </Box>
          <Box>
            <LinearGradientBtn content={"Create Store"} />
          </Box>
        </Stack>
        <Box
          pt={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography
            paragraph
            sx={{
              color: "#12948f",
              fontWeight: "700",
              fontSize: {
                md: "2rem",
                lg: "2rem"
              },

              lineHeight: "1,25"
            }}
          >
            Choose Website type you Need!
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
                lg: "1.2rem"
              },
              maxWidth: {
                xs: "100%",
                md: "80%",
                lg: "70%"
              }
            }}
          >
            Build And Scale any Website you Need from Multi Languages Website to
            a Full E-commerce Web System.
          </Typography>
        </Box>
        <Grid container>
          <Grid item lg={4} md={4} xs={12} sx={{ padding: "1rem 3rem" }}>
            <Widget
              title={"Website"}
              btnContent={"Create Website"}
              description={"description"}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12} sx={{ padding: "1rem 3rem" }}>
            <Widget
              title={"E-Commerce Website"}
              btnContent={"Create Store"}
              description={"description"}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12} sx={{ padding: "1rem 3rem" }}>
            <Widget
              title={"Custom Web Service"}
              btnContent={"Custom Make"}
              description={"description"}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default DashboardWidgets;

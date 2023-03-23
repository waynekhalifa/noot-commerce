import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OptimizedImg from "../OptimizedImg";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        position: "relative",
        ":after": {
          content: '""',
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          clipPath: "polygon(100% 50%, 0 0, 0 100%)",
          left: "0",
          width: "500px",
          height: "100%",
          background: "linear-gradient(to right ,#058E97 , #76C95A)",
          zIndex: "-1",
          "@media(max-width:1200px)": {
            width: "400px",
          },
          "@media(max-width:991px)": {
            width: "200px",
          },
        },
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "30px",
          }}
        >
          <Grid item sm={12} md={6} sx={{ textAlign: "center" }}>
            <OptimizedImg
              src="/images/website-template.webp"
              alt="noot"
              width={600}
              height={500}
              style={{
                objectFit: "contain",
                maxWidth: "100%",
                height: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              "@media(max-width:767px)": {
                marginBottom: "30px",
              },
            }}
          >
            <Typography sx={{ color: "white" }}>
              Creating a website is much easier than it used to be thanks to our
              wide variety templates that consumers can now choose from
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CreateWebsite;

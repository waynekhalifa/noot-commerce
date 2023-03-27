import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OptimizedImg from "../OptimizedImg";
import { useTheme } from "@mui/material/styles";

interface Props {}

const CreateWebsite: React.FC<Props> = ({}) => {
  const theme = useTheme();

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
          opacity: "0.6",
          zIndex: "-1",
          "@media(max-width:1200px)": {
            width: "400px"
          },
          "@media(max-width:991px)": {
            width: "200px"
          }
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: {
            xs: "30px",
            sm: "35px",
            md: "35px",
            lg: "40px",
            xl: "40px"
          }
        }}
      >
        <Box
          sx={{
            height: "0.2rem",
            borderRadius: "30px",
            width: {
              xs: "80%",
              sm: "40%",
              md: "40%",
              lg: "30%",
              xl: "20%"
            },
            backgroundColor: theme.palette.primary.main
          }}
        />
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: {
              xs: "1.4rem",
              sm: "2.5rem",
              md: "3.5rem",
              lg: "4.5rem",
              xl: "4rem"
            },
            letterSpacing: "0.1rem",
            fontWeight: "600",
            paddingTop: "10px"
          }}
        >
          Create your landing page
        </Typography>

        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: {
              xs: "1.4rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "2.5rem"
            },
            fontWeight: "400"
          }}
        >
          of your dreams in minutes
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "30px"
          }}
        >
          <Grid item sm={12} md={6} sx={{ textAlign: "center" }}>
            <Box>
              <OptimizedImg
                src="/images/website-template.webp"
                alt="noot"
                width={900}
                height={700}
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "100%",
                  // zIndex: "-1",
                  overflow: "hidden"
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              "@media(max-width:767px)": {
                marginBottom: "30px"
              }
            }}
          >
            <Stack
              justifyContent="center"
              flexDirection="column"
              sx={{
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                  xl: "flex-start"
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "1.8rem",
                    lg: "1.8rem",
                    xl: "2rem"
                  },
                  lineHeight: {
                    lg: 2,
                    md: "1.8",
                    xs: "1.5"
                  },
                  maxWidth: {
                    xs: "90%",
                    sm: "60%",
                    md: "90%",
                    lg: "70%",
                    xl: "60%"
                  }
                }}
              >
                Creating a website is much easier than it used to be thanks to
                our wide variety templates that consumers can now choose from.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateWebsite;

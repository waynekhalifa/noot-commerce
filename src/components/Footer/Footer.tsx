import {
  Box,
  Container,
  Grid,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import Logo from "./Logo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

interface Props {
  text: string;
  icon: string;
}
interface NumberingTitleProps {
  title: string;
  content: string;
}

const ContactCircle: React.FC<NumberingTitleProps> = ({ title, content }) => {
  return (
    <Box sx={{ mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            paddingRight: "1rem"
          }}
        >
          <Typography sx={{ fontSize: "0.9rem" }} fontWeight={400}>
            {content}
          </Typography>
        </Box>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            width: 48,
            height: 48,
            color: "common.white",
            backgroundColor: `${title === "whatsapp" ? "#3F813C" : "#06B7B7"}`,
            borderRadius: "50%"
          }}
        >
          {title === "whatsapp" ? (
            <WhatsAppIcon sx={{ fontSize: "2rem" }} />
          ) : null}
          {title === "email" ? <EmailIcon sx={{ fontSize: "2rem" }} /> : null}
          {title === "location" ? (
            <LocationOnIcon sx={{ fontSize: "2rem" }} />
          ) : null}
          {/* <Typography  fontWeight={400}>
          </Typography> */}
        </Grid>
      </Box>
    </Box>
  );
};

const CustomListItem: React.FC<Props> = ({ text, icon }) => {
  return (
    <ListItem sx={{ p: 0, color: "#6D757D" }}>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};

interface TitleProps {
  text: string;
}

const CustomTitle: React.FC<TitleProps> = ({ text }) => {
  return (
    <Typography sx={{ mb: 2 }} variant="h6">
      {text}
    </Typography>
  );
};

const Footer: React.FC = () => {
  const usefulLinks: any[] = ["TOS", "Privacy Policy", "Refund Policy"];
  const terms: any[] = ["Blog", "Pricing", "About"];
  const support: any[] = [
    { title: "whatsapp", content: "971564010108+" },
    { title: "email", content: "info@noot.ae" },
    {
      title: "location",
      content: "العين،ابوظبى،الامارات العربية المتحدة"
    }
  ];

  return (
    <footer>
      <Box sx={{ pt: 2, pb: 2, borderTop: "0.5px solid white" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                md: "row",
                lg: "row",
                xs: "column-reverse"
              }
            }}
          >
            <Box>
              <Box sx={{ alignSelf: "end" }}>
                <Typography sx={{ color: "#06B7B7", pb: 2 }}>
                  Sign up for Special Offers!
                </Typography>
                {/* <TextField
                  label="Email"
                  id="outlined-size-small"
                  size="small"
                  sx={{ color: "#06B7B7" }}
                /> */}
                <form style={{ paddingBottom: "1rem" }}>
                  <input
                    type="email"
                    placeholder="     Mail"
                    style={{
                      height: "2.5rem",
                      width: "15rem",
                      border: "2px solid #06B7B7",
                      borderRadius: "20px",
                      color: "#06B7B7"
                    }}
                  />
                  <button
                    type="button"
                    style={{
                      height: "2.5rem",
                      width: "8rem",
                      border: "2px solid #06B7B7",
                      borderRadius: "20px",
                      marginLeft: "-35px",
                      cursor: "pointer",
                      color: "white",
                      backgroundColor: "#06B7B7"
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </Box>
            </Box>
            {/* -------------------- */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  flexDirection: "column"
                }}
              >
                <Box
                  sx={{
                    alignSelf: {
                      xs: "center",
                      md: "end",
                      lg: "end"
                    },
                    pb: {
                      lg: "2rem",
                      md: "2rem",
                      xs: "1rem"
                    }
                  }}
                >
                  <Logo />
                </Box>

                {support.map((supportInfo, index) => (
                  <ContactCircle
                    title={supportInfo?.title}
                    content={supportInfo?.content}
                    key={index}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            py: 1,
            borderTop: "1px solid gray",
            width: "70%",
            height: "1px",
            alignSelf: "center"
          }}
        />
        <Typography textAlign={"center"} color="text.secondary" mb={1}>
          ©2022 Copyright noot.ae All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;

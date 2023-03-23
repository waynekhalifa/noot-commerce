import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import OptimizedImg from "../OptimizedImg";

const Footer = () => {
  const [info, setInfo] = useState([
    { title: "+971564010108", icon: "/images/icons/whatsappIcon.svg" },
    { title: "Info@noot.ae", icon: "/images/icons/smsIcon.svg" },
    {
      title: "Al Ain, Abu Dhabi, United Arab Emirates",
      icon: "/images/icons/locationIcon.svg",
    },
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "/images/icons/socialIcons/facebook.png",
    "/images/icons/socialIcons/instaIcon.png",
    "/images/icons/socialIcons/linked-in.png",
    "/images/icons/socialIcons/twitter.png",
  ]);
  return (
    <Box
      sx={{
        padding: "60px 0",
        backgroundColor: "#F5F7FA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          marginBottom: "15px",
          background:
            "linear-gradient( #F5F7FA , #F5F7FA) padding-box , linear-gradient( #98CED4 , #98CED4) border-box",
          borderWidth: "40px",
          borderStyle: "solid",
          borderColor: "transparent",
          borderRadius: "50%",
          width: "400px",
          height: "400px",
          position: "absolute",
          top: "50%",
          right: "-30%",

          transform: "translate(-50% , -50%)",
          "@media(max-width:1200px)": {
            right: "-40%",
          },
          "@media(max-width:767px)": {
            right: "-70%",
            width: "450px",
            height: "450px",
          },
          "@media(max-width:575px)": {
            right: "-150%",
            width: "450px",
            height: "450px",
          },
        }}
      ></Box>
      <Container>
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-end",
            "@media(max-width:767px)": {
              flexDirection: "column-reverse",
              justifyContent: "space-between",
            },
          }}
        >
          <Grid
            item
            sm={6}
            md={6}
            sx={{
              "@media(max-width:767px)": {
                paddingTop: "30px",
                width: "100%",
                maxWidth: "100%",
              },
              position: "relative",
              zIndex: "10",
            }}
          >
            <Typography
              paragraph
              sx={{
                fontSize: "18px",
                color: "#06B7B7",
                fontWeight: "500",
                margin: "0 0 15px",
                "@media(max-width:575px)": {
                  textAlign: "center",
                },
              }}
            >
              Sign up for Special Offers!
            </Typography>

            <Box
              component={"form"}
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #707070",
                width: "400px",
                borderRadius: "30px",
                height: "40px",
                maxWidth: "100%",
              }}
            >
              <Box
                component={"input"}
                type="email"
                name="email"
                placeholder="Mail"
                sx={{
                  outline: "none",
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  padding: "0 20px",
                  color: "#707070",
                  fontSize: "15px",
                  fontWeight: "500",
                  "&::placeholder": {
                    color: "#06B7B7",
                    fontSize: "15px",
                  },
                }}
              />
              <Button
                sx={{
                  color: "white",
                  fontSize: "15px",
                  backgroundColor: "#06B7B7",
                  height: "100%",
                  width: "300px",
                  borderRadius: "30px",
                  border: "none",
                  "&:hover": {
                    backgroundColor: "#06B7B7",
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            md={6}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              position: "relative",
              "@media(max-width:767px)": {
                width: "100%",
                maxWidth: "100%",
              },
              ":after": {
                content: '""',
                position: "absolute",
                top: "-15px",
                right: "15px",
                width: "100px",
                height: "2px",
                backgroundColor: "#0D9292",
              },
            }}
          >
            <OptimizedImg
              src="/images/logo.png"
              alt="noot"
              width={150}
              height={150}
              style={{ objectFit: "contain", height: "100%" }}
            />
            <Typography
              paragraph
              sx={{
                color: "#6D757D",
                fontSize: "15px",
                paddingRight: "15px",
                margin: "15px 0",
                fontWeight: "500",
              }}
            >
              Contact information
            </Typography>
            {info.map(({ title, icon }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  paddingRight: "15px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#6D757D",
                    paddingRight: "20px",
                    fontWeight: "500",
                    "@media(max-width:575px)": {
                      textAlign: "right",
                    },
                  }}
                >
                  {title}
                </Typography>

                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#3F813C",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <OptimizedImg
                    src={icon}
                    width={20}
                    height={20}
                    alt="noot"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>
            ))}
            <Box
              component={"ul"}
              sx={{
                display: "flex",
                alignItems: "center",
                listStyle: "none",
                padding: "0 15px 0 0",
                margin: "0",
              }}
            >
              <Box component={"li"}>
                {socialIcons.map((icon) => (
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      marginLeft: "15px",
                    }}
                  >
                    <OptimizedImg
                      src={icon}
                      width={40}
                      height={40}
                      alt="noot"
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            color: "#000000",
            width: "100%",
            textAlign: "center",
            fontSize: "18px",
            paddingTop: "30px",
          }}
        >
          ©2022 Copyright{" "}
          <Link
            href="https://www.noot.ae/"
            style={{ color: "#0D9292", textDecoration: "none" }}
          >
            noot.ae
          </Link>{" "}
          All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

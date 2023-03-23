import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Reason from "./Reason";

const Reasons = () => {
  const [reasons, setReasons] = useState([
    {
      icon: "/images/icons/reasonsIcons/1.svg",
      title: "Create and control your website or store",
      desc: "Create and fully control your website or your online store, by adding, modifying or deleting your products as you like.",
    },
    {
      icon: "/images/icons/reasonsIcons/2.svg",
      title: "24 hours support",
      desc: "A dedicate support team 24\\7 at your service to make sure that your store is always open, receiving orders automatically.",
    },
    {
      icon: "/images/icons/reasonsIcons/3.svg",
      title: "Beautiful, Responsive and Customizable Themes",
      desc: "Customize fonts & colors. Choose from thousands of images & videos or use your own. How can I choose my ideal template?",
    },
    {
      icon: "/images/icons/reasonsIcons/4.svg",
      title: "Noot offers You excellent stock images and photo editing tools",
      desc: "We provide dozens of free stock photos you can edit on it that you might need for your business or you can just use your own",
    },
    {
      icon: "/images/icons/reasonsIcons/5.svg",
      title: "A dashboard with absolute simplicity",
      desc: "A stunning visual design, clear layout and intuitive way of presenting data, contents, and reports We are proud of our dashboards that let all our clients clearly communicates their key goals and metrics.",
    },
    {
      icon: "/images/icons/reasonsIcons/6.svg",
      title: "A quality hosting platform",
      desc: "Sign up with Noot Hosting services and you will have one of the best web hosting services in the market. Your website will just work easy and effetely, without much maintenance having to be done on your part.",
    },
    {
      icon: "/images/icons/reasonsIcons/7.svg",
      title: "Report",
      desc: "Get professional, adjustable reports around the clock that help you follow up on your Performance Sales, Customer, Inventory, Shipping and Returns Reports",
    },
    {
      icon: "/images/icons/reasonsIcons/8.svg",
      title: "Link payment",
      desc: "We provide Trusted Payment Links to Offer Your Customers a Direct Way of Paying for Your Products. If you Already have one we help you link it to your website",
    },
    {
      icon: "/images/icons/reasonsIcons/9.svg",
      title: "Shipping",
      desc: "No longer need to warry about your orders Choose a shipping service that suit your needs with several trusted partners",
    },
    {
      icon: "/images/icons/reasonsIcons/10.svg",
      title: "Marketing is the key",
      desc: "Answer few questions about your business and get ideals and marketing services for your site through a dedicated team of professionals",
    },
    {
      icon: "/images/icons/reasonsIcons/11.svg",
      title: "Social media Managing",
      desc: "One platform to Manage all your social media Create, publish, or schedule your content manage multiple social media accounts on various platforms.",
    },
    {
      icon: "/images/icons/reasonsIcons/12.svg",
      title: "Just Ask and we will do it for you",
      desc: "If you just want some one to do it all for you, let us help you now Fill the simple form and be One step a way from your website",
    },
  ]);
  return (
    <Container>
      <Box
        sx={{
          paddingTop: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          ":after": {
            content: '""',
            position: "absolute",
            top: "30px",
            width: "200px",
            height: "2px",
            backgroundColor: "#6DC45E",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#6DC45E",
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
          }}
        >
          <Box
            component={"span"}
            sx={{
              fontSize: "80px",
              "@media(max-width:767px)": {
                fontSize: "40px",
              },
            }}
          >
            12
          </Box>
          <Box
            component={"span"}
            sx={{
              margin: "0 15px",
              color: "white",
              fontWeight: "400",
              textAlign: "center",
              fontSize: "40px",
              "@media(max-width:767px)": {
                fontSize: "20px",
              },
            }}
          >
            Reasons <br />
            to choose Noot
          </Box>
          <Box component={"span"} sx={{ fontSize: "80px" }}>
            ?
          </Box>
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          padding: "60px 0",
        }}
      >
        {reasons.map((res) => (
          <Reason title={res.title} desc={res.desc} icon={res.icon} />
        ))}
      </Grid>
    </Container>
  );
};

export default Reasons;

import NewHeader from "@/components/NewHeader";
import { Box } from "@mui/system";
import { useState } from "react";
import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Wides from "@/components/pricingWidges/Wides";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
const PricicngPage: NextPage<Props> = ({ toggleTheme }) => {
  const [widges, setWidges] = useState([
    {
      header: {
        title: "Personal",
        p: "Grow your personal brand",
        icon: "/images/icons/PersonalIcon.png"
      },
      features: {
        title: ["Connect your domain", "3GB storage", "2GB bandwidth"]
      }
    },
    {
      header: {
        title: "Premium",
        p: "Billed annually",
        icon: "/images/icons/PremiumIcon.png"
      },
      features: {
        title: ["Connect your domain", "3GB storage", "2GB bandwidth"]
      }
    },
    {
      header: {
        title: "Business",
        p: "Billed annually",
        icon: "/images/icons/BusinessIcon.png"
      },
      features: {
        title: ["Connect your domain", "3GB storage", "2GB bandwidth"]
      }
    },
    {
      header: {
        title: "Enterprise",
        p: "Billed annually",
        icon: "/images/icons/EnterpriseIcon.png"
      },
      features: {
        title: ["Connect your domain", "3GB storage", "2GB bandwidth"]
      }
    }
  ]);
  const [burger, setBurger] = useState<boolean>(false);
  const openBurgerNav = () => {
    setBurger(true);
  };
  const closeBurgerNav = () => {
    setBurger(false);
  };
  const flexStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const circleStyle = {
    backgroundColor: "#6EC55E",
    ...flexStyle,
    flexDirection: "column",
    borderRadius: "50%",
    ...flexStyle
  };
  return (
    <>
      {/* <Breadcrumb
        pageName="Pricing Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      /> */}
      <Box component={"div"} sx={{}}>
        {/* effect start */}
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "3%",
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "140px",
            height: "140px",
            opacity: 0.23,
            zIndex: "1"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              backgroundColor: "#2d5227cc",
              borderRadius: "50%",
              width: "calc(140px / 2)",
              height: "calc(140px / 2)",
              zIndex: "-1"
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-28%",
            backgroundColor: "#2d5227cc",
            borderRadius: "0% 100% 52% 48% / 0% 0% 100% 100% ",
            width: "125%",
            height: "500px",
            zIndex: "-1"
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-28%",
            backgroundColor: "primary.main",
            borderRadius: "0% 100% 52% 48% / 0% 0% 100% 100% ",
            width: "125%",
            height: "400px",
            zIndex: "-1"
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-28%",
            backgroundColor: "#61bd66",
            borderRadius: "0% 100% 52% 48% / 0% 0% 100% 100% ",
            width: "125%",
            height: "320px",
            zIndex: "-1"
          }}
        ></Box>
        {/* effect end */}

        <NewHeader
          toggleTheme={toggleTheme}
          openBurgerNav={openBurgerNav}
          closeBurgerNav={closeBurgerNav}
          burger={burger}
        />

        <Box
          className="container"
          component={"div"}
          sx={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%"
          }}
        >
          {/* landing start */}
          <Box
            sx={{
              ...flexStyle,
              flexDirection: "column",
              padding: "40px 15px"
            }}
          >
            <Typography
              variant={"h1"}
              sx={{
                fontSize: "40px",
                color: "common.white",
                fontWeight: "bold",
                marginBottom: "15px"
              }}
            >
              Affordable plans for all business types
            </Typography>
            <Box
              sx={{
                padding: "10px 25px",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: "common.white",
                boxShadow: "inset 0px 4px 6px 0px rgb(72 70 70 / 50%)"
              }}
            >
              <Typography
                paragraph
                sx={{
                  fontSize: "18px",
                  color: "primary.main",
                  marginBottom: "0px",
                  fontWeight: "500"
                }}
              >
                Start your online business with the simplest and most affordable
                annual plans
              </Typography>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "60%",
                padding: "30px"
              }}
            >
              <Box
                component={"div"}
                sx={{
                  width: "125px",
                  height: "125px",
                  position: "relative",
                  ...circleStyle,
                  border: "4px solid #28d9a3",

                  "&:after": {
                    content: `""`,
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "2px solid white",
                    borderRadius: "50%"
                  }
                }}
              >
                <Box
                  component={"img"}
                  src="/images/icons/websiteIcon.png"
                  width={"35px"}
                  height={"35px"}
                />
                <Box
                  component={"div"}
                  sx={{
                    fontSize: "16px",
                    color: "common.white",
                    marginTop: "10px"
                  }}
                >
                  Websites
                </Box>
              </Box>
              <Box
                component={"div"}
                sx={{
                  ...circleStyle,
                  width: "120px",
                  height: "120px",
                  border: "2px solid white"
                }}
              >
                <Box
                  component={"img"}
                  src="/images/icons/storeIcon.png"
                  width={"35px"}
                  height={"35px"}
                />
                <Box
                  component={"div"}
                  sx={{
                    fontSize: "16px",
                    color: "common.white",
                    marginTop: "10px"
                  }}
                >
                  Stores
                </Box>
              </Box>
            </Box>
          </Box>
          {/* landing end */}
          {/* widges start */}

          <Grid
            container
            spacing={2}
            sx={{
              padding: "180px",
              "@media(max-width:1200px)": {
                padding: "180px 15px 0"
              }
            }}
          >
            {widges.map((widge: any) => (
              <Wides key={widge} widge={widge} />
            ))}
          </Grid>

          {/* widges end */}
        </Box>
      </Box>
    </>
  );
};

export default PricicngPage;

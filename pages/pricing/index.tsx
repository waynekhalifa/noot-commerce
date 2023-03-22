import Header from "@/components/Header";
import { Box } from "@mui/system";
import { useState } from "react";
import type { NextPage } from "next";
import { Container, Stack, Switch } from "@mui/material";
import PricingBox from "./PricingBox";
import OffersList from "./OffersList";
import Breadcrumb from "@/components/common/Breadcrumb";
import { NextSeo } from "next-seo";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
const PricingPage: NextPage<Props> = ({ toggleTheme }) => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [burger, setBurger] = useState<boolean>(false);

  const openBurgerNav = () => {
    setBurger(true);
  };
  const closeBurgerNav = () => {
    setBurger(false);
  };

  return (
    <>
      <NextSeo
        title="Pricing"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
      />
      <Box>
        <Header
          toggleTheme={toggleTheme}
          openBurgerNav={openBurgerNav}
          closeBurgerNav={closeBurgerNav}
          burger={burger}
        />
      </Box>
      <Breadcrumb
        pageName="Pricing Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Box id="pricing" sx={{ position: "relative" }}>
        <Container
          sx={{
            width: "100%",
            paddingTop: {
              lg: "0rem",
              md: "0.5rem",
              xs: "2rem",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
              data-wow-delay=".1s"
              sx={{
                marginBottom: {
                  lg: "4rem",
                  md: "2rem",
                  xs: "1rem",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="span"
                onClick={() => setIsMonthly(true)}
                sx={{
                  cursor: `${!isMonthly ? "pointer" : "default"}`,
                  color: `${isMonthly && "primary.main"}`,
                  fontSize: "1.25rem",
                  fontWeight: "500",
                }}
              >
                Monthly
              </Box>
              <Switch
                checked={!isMonthly}
                onChange={() => setIsMonthly(!isMonthly)}
              />

              <Box
                component="span"
                onClick={() => setIsMonthly(false)}
                sx={{
                  cursor: `${isMonthly ? "pointer" : "default"}`,
                  color: `${!isMonthly && "primary.main"}`,
                  fontSize: "1.25rem",
                  fontWeight: "500",
                }}
              >
                Yearly
              </Box>
            </Box>
          </Box>

          <Stack
            flexDirection="row"
            gap={4}
            alignItems="center"
            justifyContent="center"
            sx={{
              flexWrap: {
                lg: "nowrap",
                md: "nowrap",
                xs: "wrap",
              },
            }}
          >
            <Box>
              <PricingBox
                packageName="Lite"
                price={isMonthly ? "40" : "120"}
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
              >
                <OffersList text="All UI Components" status="active" />
                <OffersList
                  text="Use with Unlimited Projects"
                  status="active"
                />
                <OffersList text="Commercial Use" status="active" />
                <OffersList text="Email Support" status="active" />
                <OffersList text="Lifetime Access" status="inactive" />
                <OffersList text="Free Lifetime Updates" status="inactive" />
              </PricingBox>
            </Box>
            <Box>
              <PricingBox
                packageName="Basic"
                price={isMonthly ? "399" : "789"}
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
              >
                <OffersList text="All UI Components" status="active" />
                <OffersList
                  text="Use with Unlimited Projects"
                  status="active"
                />
                <OffersList text="Commercial Use" status="active" />
                <OffersList text="Email Support" status="active" />
                <OffersList text="Lifetime Access" status="active" />
                <OffersList text="Free Lifetime Updates" status="inactive" />
              </PricingBox>
            </Box>
            <Box>
              <PricingBox
                packageName="Plus"
                price={isMonthly ? "589" : "999"}
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
              >
                <OffersList text="All UI Components" status="active" />
                <OffersList
                  text="Use with Unlimited Projects"
                  status="active"
                />
                <OffersList text="Commercial Use" status="active" />
                <OffersList text="Email Support" status="active" />
                <OffersList text="Lifetime Access" status="active" />
                <OffersList text="Free Lifetime Updates" status="active" />
              </PricingBox>
            </Box>
          </Stack>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            <PricingBox
              packageName="Lite"
              price={isMonthly ? "40" : "120"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            >
              <OffersList text="All UI Components" status="active" />
              <OffersList text="Use with Unlimited Projects" status="active" />
              <OffersList text="Commercial Use" status="active" />
              <OffersList text="Email Support" status="active" />
              <OffersList text="Lifetime Access" status="inactive" />
              <OffersList text="Free Lifetime Updates" status="inactive" />
            </PricingBox>
            <PricingBox
              packageName="Basic"
              price={isMonthly ? "399" : "789"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            >
              <OffersList text="All UI Components" status="active" />
              <OffersList text="Use with Unlimited Projects" status="active" />
              <OffersList text="Commercial Use" status="active" />
              <OffersList text="Email Support" status="active" />
              <OffersList text="Lifetime Access" status="active" />
              <OffersList text="Free Lifetime Updates" status="inactive" />
            </PricingBox>
            <PricingBox
              packageName="Plus"
              price={isMonthly ? "589" : "999"}
              duration={isMonthly ? "mo" : "yr"}
              subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            >
              <OffersList text="All UI Components" status="active" />
              <OffersList text="Use with Unlimited Projects" status="active" />
              <OffersList text="Commercial Use" status="active" />
              <OffersList text="Email Support" status="active" />
              <OffersList text="Lifetime Access" status="active" />
              <OffersList text="Free Lifetime Updates" status="active" />
            </PricingBox>
          </div> */}
        </Container>
      </Box>
    </>
  );
};

export default PricingPage;

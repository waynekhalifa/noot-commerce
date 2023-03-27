import Featured from "./Featured";
import { Box, useTheme } from "@mui/material";
import TimeBox from "./TimeBox";
import CreateWebsite from "./CreateWebsite";
import ThreeDots from "./ThreeDots";
import QuicklyBuild from "./QuicklyBuild";
import WhyNoot from "./WhyNoot";
import Reasons from "./Reasons";

interface Props {
  burger: boolean;
}

const HomeSections: React.FC<Props> = ({ burger }) => {
  const theme = useTheme();

  return (
    // sx={{display:`${burger ? 'none' : 'block'}`}}
    <Box
      sx={{
        height: `${burger ? "calc( 100vh - 4rem )" : "100%"}`,
        overflow: "hidden",
        backgroundColor: `${
          theme.palette.mode === "light" ? "white" : "#000000"
        }`
      }}
    >
      <Featured />
      {/* <Clients /> */}
      {/* <Services /> */}
      <TimeBox />
      <CreateWebsite />
      <ThreeDots />
      <QuicklyBuild />
      <ThreeDots />
      <WhyNoot />
      <Reasons />
      {/*
      <TryNoot />
      <Dashboard />
      <BusinessProcess /> 
      <Testimonials />
      */}
    </Box>
  );
};

export default HomeSections;

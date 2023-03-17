import Clients from "./Clients";
import CreateWebsite from "./CreateWebsite";
import Featured from "./Featured";
import Services from "./Services";
import TryNoot from "./TryNoot";
import Dashboard from "./Dashboard";
import BusinessProcess from "./BusinessProcess";
import Testimonials from "./Testimonials";
import { Box } from "@mui/material";

interface Props {
  burger: boolean;
}

const HomeSections: React.FC<Props> = ({ burger }) => {
  return (
    // sx={{display:`${burger ? 'none' : 'block'}`}}
    <Box sx={{ maxHeight: `${burger ? "calc( 100vh - 4rem )" : "100%"}` }}>
      <Featured />
      <Clients />
      <Services />
      <CreateWebsite />
      <TryNoot />
      <Dashboard />
      <BusinessProcess />
      <Testimonials />
    </Box>
  );
};

export default HomeSections;

import { Box, Grid } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

import Stat from "./Stat";

const Overview: React.FC = () => {
  return (
    <>
      <Box sx={{ pt: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <Stat
              text={"Sites"}
              number={0}
              color={"#327AB1"}
              icon={<WebIcon />}
            />
            <Stat
              text={"Features"}
              number={0}
              color={"#3C8C95"}
              icon={<SettingsIcon />}
            />
            <Stat
              text={"Users"}
              number={0}
              color={"#F5A962"}
              icon={<PeopleIcon />}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Overview;

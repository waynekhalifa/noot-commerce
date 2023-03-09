import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

interface Props {
  tabs: string[];
  panels: JSX.Element[];
  activeTab: number;
  getSelected?: any;
}

export default function BasicTabs(props: Props) {
  const { tabs, panels, activeTab, getSelected } = props;
  const [value, setValue] = React.useState(activeTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (getSelected) getSelected(newValue);

    setValue(newValue);
  };

  const [checked, setChecked] = React.useState(false);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab: string, index: number) => (
            <Tab
              key={tab}
              label={tab}
              {...a11yProps(index)}
              sx={{
                textTransform: "capitalize",
                fontWeight: 700,
                letterspacing: 2,
              }}
            />
          ))}
        </Tabs>
      </Box>
      {panels.map((panel: JSX.Element, index: number) => (
        <TabPanel key={index} value={value} index={index}>
          {panel}
        </TabPanel>
      ))}
    </Box>
  );
}

import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, ListItemIcon, ListItemText } from "@mui/material";

interface Props {
  expanded: string;
  panelNumber: string;
  title: string;
  handleChange: any;
  children: ReactNode;
  icon?: ReactNode;
}

const ExpansionPanel: React.FC<Props> = ({
  expanded,
  panelNumber,
  title,
  handleChange,
  children,
  icon,
}) => {
  const renderTitle = () => {
    if (icon) {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon sx={{ minWidth: 40, ml: "-8px" }}>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </Box>
      );
    }

    return (
      <Typography sx={{ ml: expanded === panelNumber ? 1 : 0 }}>
        {title}
      </Typography>
    );
  };

  return (
    <Accordion
      expanded={expanded === panelNumber}
      onChange={handleChange(panelNumber)}
      sx={{
        boxShadow: "none",
        mb: 2,
        "&:first-of-type": {
          "&:before": {
            display: "block",
          },
        },
        "&:before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          backgroundColor: "primary.light",
        },
      }}
    >
      <AccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header"
        sx={{
          height: 40,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, .05)"
              : "rgba(0, 0, 0, .03)",
          color: "primary.main",
          "& .MuiAccordionSummary-expandIconWrapper": {
            transform: "rotate(90deg)",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(-90deg)",
          },
        }}
        expandIcon={
          <ArrowForwardIosSharpIcon
            sx={{ fontSize: "0.9rem", color: "primary.main" }}
          />
        }
      >
        {renderTitle()}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: 2,
          borderTop: "1px solid rgba(0, 0, 0, .125)",
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpansionPanel;

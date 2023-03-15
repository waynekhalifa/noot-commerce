"use client";

import { Box } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ScrollToTop: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      sx={{ position: "fixed", bottom: "30px", right: "30px", zIndex: "99" }}
    >
      {isVisible && (
        <Box
          onClick={scroll}
          aria-label="scroll to top"
          sx={{
            display: "flex",
            width: "2.7rem",
            height: "2.7rem",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "#06B7B7",
            borderRadius: "5px"
          }}
          className=" rounded-md  shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <Box
            component="span"
            sx={{
              width: "3rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            className=" rotate-45 border-t border-l border-white "
          >
            <ExpandLessIcon />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ScrollToTop;

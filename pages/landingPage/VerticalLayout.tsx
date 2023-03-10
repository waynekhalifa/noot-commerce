// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

// ** Icons Imports
import ArrowUp from "mdi-material-ui/ArrowUp";

// ** Theme Config Import

// ** Type Import
import { LayoutProps } from "../../src/theme/types";

// ** Components
import AppBar from "./appBar";
import Footer from "../../src/components/shared-components/footer";
import ScrollToTop from "../../src/components/scroll-to-top";

const VerticalLayoutWrapper = styled("div")({
  height: "100%",
  display: "flex"
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column"
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(6),
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

const VerticalLayout = (props: LayoutProps) => {
  // ** Props
  const { settings, children, scrollToTop } = props;

  // ** Vars
  const { contentWidth } = settings;

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false);

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        <MainContentWrapper className="layout-content-wrapper">
          {/* AppBar Component */}
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

          {/* Content */}
          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentWidth === "boxed" && {
                mx: "auto",
                "@media (min-width:1200px)": { maxWidth: "100%" }
              })
            }}
          >
            {children}
          </ContentWrapper>

          {/* Footer Component */}
          <Footer {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  );
};

export default VerticalLayout;

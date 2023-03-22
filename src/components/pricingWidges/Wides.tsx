import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Wides = ({ widge }: any) => {
  return (
    <>
      <Grid item xs={12} md={6} lg={3}>
        <Grid
          className="item"
          sx={{
            borderRadius: "30px",
            border:
              widge.header.title === "Business"
                ? "2px solid #fb5f52"
                : widge.header.title === "Enterprise"
                ? "none"
                : "2px solid #6EC55E",
            padding: "4px",
            color: "common.white",
            position: "relative",
            backgroundColor:
              widge.header.title === "Enterprise" ? "#243f1e" : "transparent",
            minHeight: "60vh",
          }}
        >
<<<<<<< HEAD
          {widge.header.title === "Business" && (
            <>
              <Box sx={{ position: "absolute", top: "-110px" }}>
                <Typography
                  variant="h6"
                  sx={{ margin: "0 0 5px", color: "#6EC55E" }}
                >
                  Show prices in
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "150px",
                    height: "35px",
                    lineHeight: "3",
                    background: "white",
                    overflow: "hidden",

                    borderRadius: "30px",
                  }}
                >
                  <Box
                    component={"select"}
                    name="format"
                    id="format"
                    sx={{
                      webkitAppearance: "none",
                      mozAppearance: "none",
                      msAppearance: "none",
                      appearance: "none",
                      outline: "0",
                      boxShadow: "none",
                      border: "0!important",
                      background: "white",
                      backgroundImage: "none",
                      flex: "1",
                      padding: "0 15px",
                      color: "#6EC55E",
                      cursor: "pointer",
                      fontSize: "1em",
                      "::-ms-expand": {
                        display: "none",
                      },
                    }}
                  >
                    <Box component={"option"} selected value="EGP">
                      EGP
                    </Box>
                    <Box component={"option"} value="SAR">
                      SAR
                    </Box>
                    <Box component={"option"} value="USD">
                      USD
                    </Box>
                    <Box component={"option"} value="KWD">
                      KWD
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      right: "15px",
                      transform: "rotate(-270deg)",
                    }}
                  >
                    <PlayArrowIcon sx={{ color: "#6EC55E" }} />
=======
          <Box
            className="header"
            sx={{
              backgroundColor: "#6EC55E",
              borderRadius: "30px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Box sx={{ ...flexStyle, marginBottom: "5px" }}>
              <Typography
                variant="h4"
                sx={{ fontSize: "22px", margin: "0 15px", fontWeight: "500" }}
              >
                {widge.header.title}
              </Typography>
              <Box
                component={"img"}
                src={widge.header.icon}
                width={"30px"}
                height={"30px"}
              />
            </Box>
            <Typography paragraph sx={{ fontSize: "16px", margin: "0" }}>
              {widge.header.p}
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                display: "block",
                margin: "30px auto",
                background: "linear-gradient(#41a9a5, #6EC55E)",
                width: "98%",
                borderRadius: "30px",
                color: "common.white",
                height: "45px",
              }}
            >
              Try for free
            </Button>
            <Box>
              {widge.features.title.map((title: any, index: number) => (
                <Box sx={{ display: "flex" }} key={index}>
                  <CheckIcon sx={{ color: "#6EC55E", margin: "0 5px" }} />
                  <Box component={"div"} sx={{ color: "primary.main" }}>
                    {title}
>>>>>>> origin/master
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "30px",
                  backgroundColor: "#fb5f52",
                  borderRadius: "10px",
                  ...flexStyle,
                  fontSize: "13px",
                }}
              >
                BEST VALUE
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "7px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "96px",
                  height: "20px",
                  backgroundColor: "#fb5f52",

                  clipPath: "polygon(49% 100%, 0 0, 100% 0)",
                }}
              ></Box>
            </>
          )}
          <Grid
            item
            className="item"
            sx={{
              borderRadius: "30px",
              border:
                widge.header.title === "Enterprise" ? "none" : "2px solid gray",
              padding: "10px 15px",
              minHeight: "60vh",
            }}
          >
            <Box
              className="header"
              sx={{
                backgroundColor: "#6EC55E",
                borderRadius: "30px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Box sx={{ ...flexStyle, marginBottom: "5px" }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "22px", margin: "0 15px", fontWeight: "500" }}
                >
                  {widge.header.title}
                </Typography>
                <Box
                  component={"img"}
                  src={widge.header.icon}
                  width={"30px"}
                  height={"30px"}
                />
              </Box>
              <Typography paragraph sx={{ fontSize: "16px", margin: "0" }}>
                {widge.header.p}
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "block",
                  margin: "30px auto",
                  background: "linear-gradient(#41a9a5, #6EC55E)",
                  width: "98%",
                  borderRadius: "30px",
                  color: "common.white",
                  height: "45px",
                }}
              >
                {widge.header.title === "Enterprise"
                  ? "Contact Us"
                  : "Try for free"}
              </Button>
              <Box>
                <Box
                  sx={{
                    color: "primary.main",
                    margin: "0 5px 15px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {widge.header.title === "Enterprise" && "Call Us"}
                </Box>
                {widge.features.title.map((title: any) => (
                  <Box sx={{ display: "flex" }}>
                    <CheckIcon sx={{ color: "#6EC55E", margin: "0 5px" }} />
                    <Box
                      component={"div"}
                      sx={{ color: "primary.main", fontSize: "16px" }}
                    >
                      {title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Wides;

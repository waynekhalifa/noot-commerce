import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
const flexStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const Wides = ({ widge }: any) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Grid
        className="item"
        sx={{
          borderRadius: "30px",
          border: "2px solid #6EC55E",
          padding: "4px",
          color: "common.white",
          height: "60vh",
        }}
      >
        <Grid
          item
          className="item"
          sx={{
            borderRadius: "30px",
            border: "2px solid gray",
            padding: "10px 15px",
            height: "60vh",
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
              Try for free
            </Button>
            <Box>
              {widge.features.title.map((title: any, index: number) => (
                <Box sx={{ display: "flex" }} key={index}>
                  <CheckIcon sx={{ color: "#6EC55E", margin: "0 5px" }} />
                  <Box component={"div"} sx={{ color: "primary.main" }}>
                    {title}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Wides;

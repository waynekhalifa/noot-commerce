import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Section from "../UI/Section";

const NotFound: React.FC = () => {
  return (
    <Section background="transparent">
      <Typography
        align="center"
        variant="h3"
        component={"h1"}
        paragraph
        fontWeight={500}
      >
        {`Oh Oh! Page Not Found`}
      </Typography>
      <Typography
        align="center"
        color="text.secondary"
        variant="h6"
        fontWeight={300}
        paragraph
      >
        {`We're sorry, but the page you are looking for doesn't exist`}
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          a: {
            color: "#0056B3",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <Link href="/">
          <a>Back to Home Page</a>
        </Link>
      </Box>
    </Section>
  );
};

export default NotFound;

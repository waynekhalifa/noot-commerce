import { Container, Grid, Typography } from "@mui/material";

interface ClientProps {
  number: any;
}

const Number: React.FC<ClientProps> = ({ number }) => {
  return (
    <Grid item xs={3} sx={{ mb: 3 }}>
      <Typography
        variant="h4"
        textAlign={"center"}
        fontWeight={700}
        sx={{ color: "#06B712" }}
      >
        {number.number}
      </Typography>
      <Typography textAlign={"center"}>{number.title}</Typography>
    </Grid>
  );
};

interface Props {}

const Numbers: React.FC<Props> = ({}) => {
  const numbers: any[] = [
    { number: 570, title: "Download" },
    { number: 570, title: "Active User" },
    { number: 570, title: "Positive Feedback" },
    { number: 570, title: "+ rating" }
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: {
          lg: "2.5rem",
          md: "2rem",
          xs: "1rem"
        }
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        color="text.secondary"
      >{`Don't Just Take`}</Typography>
      <Typography
        paragraph
        variant="h5"
        fontWeight={700}
        textAlign="center"
        color="text.secondary"
      >{`our Word for it!`}</Typography>
      <Grid container sx={{ paddingTop: "1rem" }}>
        {numbers.map((number, index) => (
          <Number number={number} key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Numbers;

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import Logo from "./Logo";

interface Props {
  text: string;
}

const CustomListItem: React.FC<Props> = ({ text }) => {
  return (
    <ListItem sx={{ p: 0, color: "#6D757D" }}>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  );
};

interface TitleProps {
  text: string;
}

const CustomTitle: React.FC<TitleProps> = ({ text }) => {
  return (
    <Typography sx={{ mb: 2 }} variant="h6">
      {text}
    </Typography>
  );
};

const Footer: React.FC = () => {
  const usefulLinks: any[] = ["TOS", "Privacy Policy", "Refund Policy"];
  const terms: any[] = ["Blog", "Pricing", "About"];
  const support: any[] = ["Open Support Ticket", "Terms of use", "About"];

  return (
    <footer>
      <Box sx={{ backgroundColor: "#f5f7fa", pt: 8, pb: 6 }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ mb: 4 }}>
              <Logo />
              <Typography sx={{ mt: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mb: 4 }}>
              <CustomTitle text={`Useful Links`} />
              <List disablePadding>
                {usefulLinks.map((text, index) => (
                  <CustomListItem text={text} key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mb: 4 }}>
              <CustomTitle text={`Terms`} />
              <List disablePadding>
                {terms.map((text, index) => (
                  <CustomListItem text={text} key={index} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTitle text={`Support & Help`} />
              <List disablePadding>
                {support.map((text, index) => (
                  <CustomListItem text={text} key={index} />
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "rgba(6,183,183,.1)", py: 3 }}>
        <Typography textAlign={"center"} color="text.secondary">
          ©2022 Copyright noot.ae All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;

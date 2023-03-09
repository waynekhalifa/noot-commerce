import Container from "@mui/material/Container";
import Section from "../Section";

interface Props {
  children: React.ReactNode;
  background?: string;
  disablePadding?: boolean;
}

const OneColumn: React.FC<Props> = ({
  children,
  background,
  disablePadding,
}) => {
  return (
    <Section background={background ? background : "transparent"}>
      <Container
        sx={{
          pl: { xs: disablePadding ? 0 : 2, sm: 3 },
          pr: { xs: disablePadding ? 0 : 2, sm: 3 },
        }}
      >
        {children}
      </Container>
    </Section>
  );
};

export default OneColumn;

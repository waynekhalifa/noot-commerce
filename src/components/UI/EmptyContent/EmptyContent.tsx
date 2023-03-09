import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  searchText: string;
}

const EmptyContent: React.FC<Props> = ({ title, searchText }) => {
  const renderText = () => {
    if (searchText !== undefined && searchText.length > 0)
      return `There is no data for "${searchText}"`;

    return `${title} has no data yet...`;
  };

  return (
    <Typography align="center" color="error" variant="h6" component={"p"}>
      {renderText()}
    </Typography>
  );
};

export default EmptyContent;

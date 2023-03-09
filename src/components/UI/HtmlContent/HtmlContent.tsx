import Box from "@mui/material/Box";

interface Props {
  content: string;
}

const HtmlContent: React.FC<Props> = ({ content }) => {
  return (
    <Box
      sx={{
        color: "text.secondary",
        h2: { m: 0, mb: 2 },
        p: { fontWeight: 300 },
        img: { maxWidth: "100%", height: "auto" },
      }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlContent;

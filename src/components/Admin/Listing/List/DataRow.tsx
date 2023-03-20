import { TableCell } from "@mui/material";

interface Props {
  dataCells: string[];
  data: any;
  handleClick: () => void;
}

const DataRow: React.FC<Props> = ({ dataCells, data, handleClick }) => {
  const renderData = (cell: string) => {
    return data[cell];
  };

  return (
    <>
      {dataCells.map((cell: string) => (
        <TableCell
          key={cell}
          align="left"
          sx={{
            minWidth: "200px",
            textTransform: cell === "name" ? "" : "initial",
            p: "8px 16px",
          }}
          onClick={handleClick}
        >
          {renderData(cell)}
        </TableCell>
      ))}
    </>
  );
};

export default DataRow;

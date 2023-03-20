import { useEffect, useState } from "react";
import { Box, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleChange: (value: string) => void;
}

interface IState {
  term: string;
  debouncedTerm: string;
}

const INITIAL_STATE: IState = { term: "", debouncedTerm: "" };

const ExportSearch: React.FC<Props> = ({ handleChange }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { term, debouncedTerm } = state;

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        term: debouncedTerm,
      }));
    }, 500);

    return () => clearTimeout(timer);

    // eslint-disable-next-line
  }, [debouncedTerm]);

  useEffect(() => {
    handleChange(term);

    // eslint-disable-next-line
  }, [term]);

  const handleExport = () => console.log("Export");

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "grey.300",
          p: "3px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: { xs: "calc(100% - 120px)", md: "auto" },
          flex: 1,
          // backgroundColor: "common.white",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <SearchIcon fontSize="small" sx={{ color: "grey.600" }} />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          inputProps={{ "aria-label": "search resource" }}
          placeholder={"Search"}
          value={debouncedTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setState((prevState) => ({
              ...prevState,
              debouncedTerm: event?.target.value,
            }))
          }
        />
        {term.length > 0 && (
          <CloseIcon
            fontSize="small"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              setState((prevState) => ({
                ...prevState,
                debouncedTerm: "",
              }))
            }
          />
        )}
      </Box>
      <Button
        disableElevation
        size="small"
        variant="contained"
        onClick={handleExport}
        sx={{ minWidth: 104, ml: 2 }}
      >
        Export xlsx
      </Button>
    </Box>
  );
};

export default ExportSearch;

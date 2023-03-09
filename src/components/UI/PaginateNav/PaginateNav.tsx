import { ChangeEvent } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

interface Props {
  startIndex: number;
  limit: number;
  changeLimit: (limit: number) => void;
  next: () => void;
  prev: () => void;
  listingSize: number;
}

const PaginateNav: React.FC<Props> = ({
  startIndex,
  limit,
  changeLimit,
  next,
  prev,
  listingSize,
}) => {
  return (
    <Box
      sx={{
        display: { sm: "flex" },
        justifyContent: { sm: "flex-end" },
        alignItems: { sm: "center" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mb: { xs: 2, sm: 0 },
          mr: { xs: 0, sm: 2 },
        }}
      >
        <Typography>Per Page:</Typography>
        <TextField
          select
          id="per-page-select"
          size="small"
          value={limit.toString()}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            changeLimit(parseInt(event.target.value))
          }
          sx={{
            backgroundColor: "common.white",
            ml: 1,
            minWidth: 24,
            "& .MuiSelect-select": {
              p: "4px 8px",
            },
          }}
        >
          {[10, 20, 30].map((item: number) => (
            <MenuItem key={item} value={item.toString()}>
              {item.toString()}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={prev}
          disabled={startIndex === 0}
          sx={{ textTransform: "capitalize" }}
          startIcon={<NavigateBeforeIcon fontSize="small" />}
        >
          Previous
        </Button>
        <Typography sx={{ ml: 1, mr: 1 }}>{startIndex / limit + 1}</Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={next}
          disabled={listingSize < limit}
          sx={{ textTransform: "capitalize" }}
          endIcon={<NavigateNextIcon fontSize="small" />}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginateNav;

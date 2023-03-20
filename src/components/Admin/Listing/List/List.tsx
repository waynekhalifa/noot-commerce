import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { IApiVariables, IModelName, IResourceName, Order } from "@/models/app";
import ExportSearch from "./ExportSearch";
import ActionLoader from "@/components/UI/ActionLoader";
import { Pages, Routes, SortOrder } from "@/constants/enums";
import useApi from "@/hooks/useApi";
import useListing from "@/hooks/useListing";
import PaginateNav from "@/components/UI/PaginateNav";
import { useSelector } from "react-redux";
import { selectListing } from "@/store/resourceSlice";
import EmptyContent from "@/components/UI/EmptyContent";
import useSelected from "@/hooks/useSelected";
import { getComparator, stableSort } from "@/helpers/utils";
import DataRow from "./DataRow";
import { useRouter } from "next/router";

interface Props {
  resourceName: IResourceName;
  singleName: IModelName;
}

interface IState {
  orderBy: keyof any;
  order: Order;
}

const Listing: React.FC<Props> = ({ resourceName, singleName }) => {
  const INITIAL_STATE: IState = {
    order: resourceName === Pages.USERS ? SortOrder.ASC : SortOrder.DESC,
    orderBy: resourceName === Pages.USERS ? "name" : "createdAt",
  };
  const listing: Readonly<Record<string, any>>[] = useSelector(selectListing);
  const [state, setState] = useState(INITIAL_STATE);
  const { order, orderBy } = state;
  const { push } = useRouter();
  const { selected, setSelected } = useSelected();
  const apiParams: IApiVariables = {
    slug: resourceName,
    singleName,
  };
  const api = useApi(apiParams);
  const {
    loading,
    searchText,
    startIndex,
    limit,
    changeLimit,
    next,
    prev,
    reset,
    handleSearch,
  } = useListing({
    slug: resourceName,
    resourceModel: api.model,
    fetchListings: api.fetch,
    changeListings: api.changeListing,
  });

  useEffect(() => {
    reset(); // reset pagination

    return () => reset();

    // eslint-disable-next-line
  }, []);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected = [];

    for (let item of listing) {
      newSelected.push(item.id);
    }

    selected.size === 0
      ? setSelected(new Set<string>(newSelected))
      : setSelected(new Set<string>());
  };

  const handleSelect = (id: string) => {
    const newSelect = new Set(selected);

    newSelect.has(id) ? newSelect.delete(id) : newSelect.add(id);

    setSelected(newSelect);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    const isAsc = orderBy === property && order === SortOrder.ASC;

    setState({
      ...state,
      order: isAsc ? SortOrder.DESC : SortOrder.ASC,
      orderBy: property,
    });
  };

  const createSortHandler =
    (property: keyof any) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  const handleEdit = (id: string) =>
    push(`/${Routes.DASHBOARD}/${resourceName}/${id}`);

  const handleDelete = (id: string) => console.log(id);

  const handleClick = () => push(`/${Routes.DASHBOARD}/${resourceName}/new`);

  if (loading) return <ActionLoader position="fixed" />;

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Typography variant="h5" component="h1" textTransform={"capitalize"}>
            {resourceName}
          </Typography>
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddIcon fontSize="small" />}
            sx={{ ml: 2 }}
            onClick={handleClick}
          >
            {singleName}
          </Button>
        </Box>
        <ExportSearch handleChange={(term) => handleSearch(term)} />
        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            my: 2,
            position: "relative",
            // backgroundColor: "common.white",
            minHeight: 360,
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={
                        selected.size > 0 && selected.size < listing.length
                      }
                      checked={
                        selected.size > 0 && selected.size === listing.length
                      }
                      onChange={handleSelectAll}
                      inputProps={{
                        "aria-label": "select all listings",
                      }}
                    />
                  </TableCell>
                  {api.headCells.map((headCell: any) => (
                    <TableCell
                      key={headCell.id}
                      align={headCell.numeric ? "right" : "left"}
                      padding={headCell.disablePadding ? "none" : "normal"}
                      sx={{ span: { minWidth: 120 } }}
                    >
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : "asc"}
                        onClick={createSortHandler(headCell.id)}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(listing, getComparator(order, orderBy)).map(
                  (row: any, index: number) => {
                    const isItemSelected = selected.has(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        onClick={() => {}}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onChange={() => handleSelect(row.id)}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <DataRow
                          dataCells={api.dataCells}
                          data={row}
                          handleClick={() => handleEdit(row.id)}
                        />
                        <TableCell
                          align="left"
                          sx={{ p: "4px 16px", minWidth: 196 }}
                          onClick={() => handleEdit(row)}
                        >
                          <Typography variant="body2">Published on</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {row.createdAt
                              ? row.createdAt.split("T")[0]
                              : new Date().toISOString().split("T")[0]}
                          </Typography>
                        </TableCell>
                        {/* <TableCell padding="checkbox">
                          <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            sx={{ ml: 2, textTransform: "capitalize" }}
                            endIcon={<DeleteIcon fontSize="small" />}
                            onClick={() => handleDelete(row.id)}
                          >
                            Delete
                          </Button>
                        </TableCell> */}
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              opacity: loading || listing.length ? 0 : 1,
              zIndex: loading || listing.length ? -1 : 1,
              position: "absolute",
              top: 56,
              left: 0,
              bottom: 0,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmptyContent title={resourceName} searchText={searchText} />
          </Box>
        </Box>
        <PaginateNav
          startIndex={startIndex}
          limit={limit}
          changeLimit={changeLimit}
          next={next}
          prev={prev}
          listingSize={listing.length}
        />
      </Box>
      {loading && <ActionLoader position="fixed" />}
    </>
  );
};

export default Listing;

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
import DeleteIcon from "@mui/icons-material/Delete";

import { Feature } from "@/models";
import {
  DefaultFeature,
  IFeatureListingVariables,
  IResponse,
  Order,
} from "@/models/app";
import ExportSearch from "./ExportSearch";
import ActionLoader from "@/components/UI/ActionLoader";
import useFeature from "@/resources/useFeature";
import { Pages, Responses, SortOrder } from "@/constants/enums";
import useApi from "@/hooks/useApi";
import useListing from "@/hooks/useListing";
import PaginateNav from "@/components/UI/PaginateNav";
import { useSelector } from "react-redux";
import { selectListing } from "@/store/resourceSlice";
import EmptyContent from "@/components/UI/EmptyContent";
import useSelected from "@/hooks/useSelected";
import { getComparator, stableSort } from "@/helpers/utils";
import DataRow from "./DataRow";

interface Props {
  slug: string;
}

interface IState {
  isLoading: boolean;
  orderBy: keyof any;
  order: Order;
  feature: Feature | DefaultFeature;
}

const Listing: React.FC<Props> = ({ slug }) => {
  const INITIAL_STATE: IState = {
    isLoading: true,
    order: slug === Pages.USERS ? SortOrder.ASC : SortOrder.DESC,
    orderBy: slug === Pages.USERS ? "name" : "createdAt",
    feature: {
      name: "Features",
      icon: "FeatureIcon",
      slug: "features",
      singleName: "Feature",
      precedence: "1",
    },
  };
  const listing = useSelector(selectListing);
  const [state, setState] = useState(INITIAL_STATE);
  const { isLoading, order, orderBy, feature } = state;
  const { selected, setSelected } = useSelected();
  const { featuresFetch } = useFeature("features");
  const api = useApi(slug);
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
    slug,
    resourceModel: api.model,
    fetchListings: api.fetch,
    changeListings: api.changeListing,
  });

  const fetchFeature = async () => {
    if (slug !== "features") {
      const params: IFeatureListingVariables = {
        startIndex: 0,
        limit: 1,
        searchText: "",
        slug,
      };

      const response: IResponse = await featuresFetch(params);

      if (response.type === Responses.SUCCESS) {
        if (response.data.length) {
          setState({ ...state, feature: response.data[0], isLoading: false });
        }

        setState({ ...state, isLoading: false });
      } else {
        // @TODO: Handle error
        setState({ ...state, isLoading: false });
      }
    } else {
      setState({ ...state, isLoading: false });
    }
  };

  useEffect(() => {
    fetchFeature();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    reset(); // reset pagination

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

  const handleEdit = (id: string) => console.log(id);

  const handleDelete = (id: string) => console.log(id);

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <Box sx={{ display: "flex", mb: 2 }}>
          <Typography variant="h5" component="h1" textTransform={"capitalize"}>
            {feature.name}
          </Typography>
          <Button
            size="small"
            variant="outlined"
            startIcon={<AddIcon fontSize="small" />}
            sx={{ ml: 2 }}
          >
            {feature.singleName}
          </Button>
        </Box>
        <ExportSearch handleChange={(term) => handleSearch(term)} />
        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            my: 2,
            position: "relative",
            backgroundColor: "common.white",
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
                          slug={slug}
                          dataCells={api.dataCells}
                          data={row}
                          handleClick={() => handleEdit(row)}
                        />
                        <TableCell
                          align="left"
                          sx={{ p: "8px 16px", minWidth: 140 }}
                          onClick={() => handleEdit(row)}
                        >
                          {row.createdByName}
                        </TableCell>
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
                        <TableCell padding="checkbox">
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
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              opacity: loading || isLoading || listing.length ? 0 : 1,
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
            <EmptyContent title={feature.name} searchText={searchText} />
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

      {loading || (isLoading && <ActionLoader position="fixed" />)}
    </>
  );
};

export default Listing;

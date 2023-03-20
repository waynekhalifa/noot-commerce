import { selectAccessToken } from "@/store/appSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { IListingVariables, IResponse } from "@/models/app";
import useLoading from "./useLoading";
import usePaginate from "./usePaginate";
import { Responses } from "@/constants/enums";

interface Props {
  slug: string;
  resourceModel: any;
  fetchListings: (params: any) => any;
  changeListings: (params: any) => void;
}

type IState = {
  searchText: string;
};

const INITIAL_STATE: IState = { searchText: "" };

const useListing = (props: Props) => {
  const { slug, fetchListings, changeListings } = props;
  const accessToken: string = useSelector(selectAccessToken);
  const [state, setState] = useState(INITIAL_STATE);
  const { searchText } = state;
  const { startIndex, limit, changeLimit, next, prev, reset } = usePaginate();
  const { loading, setLoading } = useLoading();

  const fetch = async () => {
    console.log({ slug });
    setLoading(true);

    const listingParams: IListingVariables = {
      searchText,
      startIndex,
      limit,
      token: accessToken,
    };

    const response: IResponse = await fetchListings(listingParams);

    console.log("response", response);

    if (response.type === Responses.SUCCESS) {
      if (response.data) {
        changeListings(response.data.results);
      }

      setLoading(false);
    } else {
      // @TODO: Handle error
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, [searchText, startIndex, limit]);

  return {
    loading,
    searchText,
    startIndex,
    limit,
    changeLimit,
    next,
    prev,
    reset,
    handleSearch: (value: string) =>
      setState((prevState) => ({ ...prevState, searchText: value })),
  };
};

export default useListing;

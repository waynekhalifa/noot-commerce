import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";

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
  const { slug, fetchListings, changeListings, resourceModel } = props;
  const [state, setState] = useState(INITIAL_STATE);
  const { startIndex, limit, changeLimit, next, prev, reset } = usePaginate();
  const { loading, setLoading } = useLoading();
  const { searchText } = state;

  const fetch = async () => {
    console.log({ slug });
    setLoading(true);

    const listingParams: IListingVariables = {
      searchText,
      startIndex,
      limit,
    };

    const response: IResponse = await fetchListings(listingParams);

    if (response.type === Responses.SUCCESS) {
      if (response.data.length) {
        changeListings(response.data);
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

  useEffect(() => {
    const subscription = DataStore.observe(resourceModel).subscribe(() =>
      fetch()
    );

    return () => subscription.unsubscribe();
  });

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

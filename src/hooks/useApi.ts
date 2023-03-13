import { setListing, setSelected } from "@/store/resourceSlice";
import { useDispatch } from "react-redux";

const useApi = (slug: string) => {
  const dispatch = useDispatch();

  const api: any = {};

  api.changeListing = (listing: Readonly<Record<string, any>>[]) =>
    dispatch(setListing(listing));
  api.changeSelected = (model: any) => dispatch(setSelected(model));

  return api;
};

export default useApi;

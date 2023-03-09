import { Pages } from "@/constants/enums";
import { convertToCamelCase } from "@/helpers/utils";
import useResource from "@/resources/useResource";
import { setListing, setSelected } from "@/store/featureSlice";
import { useDispatch } from "react-redux";

const useApi = (slug: string) => {
  const dispatch = useDispatch();
  const resource = useResource();

  const api: any = {};

  for (let page of Object.values(Pages)) {
    if (slug === page) {
      if (resource[`${convertToCamelCase(page)}Fetch`]) {
        api.fetch = resource[`${convertToCamelCase(page)}Fetch`];
      }

      if (resource[`${convertToCamelCase(page)}Get`]) {
        api.get = resource[`${convertToCamelCase(page)}Get`];
      }

      if (resource[`${convertToCamelCase(page)}Create`]) {
        api.create = resource[`${convertToCamelCase(page)}Create`];
      }

      if (resource[`${convertToCamelCase(page)}Update`]) {
        api.update = resource[`${convertToCamelCase(page)}Update`];
      }

      if (resource[`${convertToCamelCase(page)}Trash`]) {
        api.trash = resource[`${convertToCamelCase(page)}Trash`];
      }

      if (resource[`${convertToCamelCase(page)}BulkTrash`]) {
        api.bulkTrash = resource[`${convertToCamelCase(page)}BulkTrash`];
      }

      if (resource[`${convertToCamelCase(page)}Remove`]) {
        api.remove = resource[`${convertToCamelCase(page)}Remove`];
      }

      if (resource[`${convertToCamelCase(page)}Options`]) {
        api.options = resource[`${convertToCamelCase(page)}Options`];
      }

      if (resource[`${convertToCamelCase(page)}HeadCells`]) {
        api.headCells = resource[`${convertToCamelCase(page)}HeadCells`];
      }

      if (resource[`${convertToCamelCase(page)}DataCells`]) {
        api.dataCells = resource[`${convertToCamelCase(page)}DataCells`];
      }

      if (resource[`${convertToCamelCase(page)}Model`]) {
        api.model = resource[`${convertToCamelCase(page)}Model`];
      }
    }
  }

  api.changeListing = (listing: Readonly<Record<string, any>>[]) =>
    dispatch(setListing(listing));
  api.changeSelected = (model: any) => dispatch(setSelected(model));

  return api;
};

export default useApi;

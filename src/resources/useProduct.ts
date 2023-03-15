import {
  fetch,
  get,
  create,
  update,
  trash,
  bulkTrash,
  remove,
  options,
  headCells,
  dataCells,
} from "@/services/product";

const useResource = (listingName: string) => {
  const api: any = {};

  api[`${listingName}Fetch`] = fetch;
  api[`${listingName}Get`] = get;
  api[`${listingName}Create`] = create;
  api[`${listingName}Update`] = update;
  api[`${listingName}Trash`] = trash;
  api[`${listingName}BulkTrash`] = bulkTrash;
  api[`${listingName}Remove`] = remove;
  api[`${listingName}Options`] = options;
  api[`${listingName}HeadCells`] = headCells;
  api[`${listingName}DataCells`] = dataCells;

  return api;
};

export default useResource;

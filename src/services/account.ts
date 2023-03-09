import { errorResponse, successResponse } from "@/helpers/responser";
import {
  HeadCell,
  IAccountListingVariables,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
} from "@/models/app";

export async function fetch(
  params: IAccountListingVariables
): Promise<IResponse> {
  const { searchText, startIndex, limit, domain } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    return successResponse([]);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function get(params: IGetVariables): Promise<IResponse> {
  const { id } = params;

  try {
    return successResponse({});
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(data: any): Promise<IResponse> {
  try {
    return successResponse({}, `New Account has been created successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    return successResponse({}, `Account has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    return successResponse({}, `Account has been moved to trash successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function bulkTrash(params: IBulkTrashVariables) {
  const { ids } = params;

  return successResponse(
    undefined,
    `${ids.size} Accounts items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    return successResponse({}, `Account has been deleted successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: any[]) {
  const option: IOption = { label: "Select", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.siteTitle, value: option.id });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [];
export const dataCells: readonly string[] = [];

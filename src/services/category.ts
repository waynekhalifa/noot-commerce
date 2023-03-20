import {
  CreateProductInput,
  ProductItemInput,
  TranslationInput,
} from "../models/api";
import { CATEGORIES } from "@/constants/endpoints";
import { Methods } from "@/constants/enums";
import sendRequest from "@/helpers/api";
import { errorResponse, successResponse } from "@/helpers/responser";
import {
  HeadCell,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  IListingVariables,
  IRequest,
} from "@/models/app";

/**
 * fetch: List all features
 *
 * @param params :IListingVariables
 * @returns response :IResponse
 */
export async function fetch(params: IListingVariables): Promise<IResponse> {
  const { token } = params;
  console.log("token", token);
  const request: IRequest = {
    url: CATEGORIES,
    method: Methods.GET,
    token,
  };

  try {
    const response: Response = await sendRequest(request);
    const responseData = await response.json();

    return successResponse(responseData);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function get(params: IGetVariables): Promise<IResponse> {
  const { id } = params;

  const request: IRequest = {
    url: `${CATEGORIES}/${id}/`,
    method: Methods.GET,
  };

  try {
    const response: Response = await sendRequest(request);

    return successResponse(await response.json());
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(data: any, token?: string): Promise<IResponse> {
  const name: TranslationInput = {
    is_ltr: true,
    text: data.name,
    translation_type: 1,
    lang: 1,
  };
  const description: TranslationInput = {
    is_ltr: true,
    text: data.description,
    translation_type: 2,
    lang: 1,
  };
  const item: ProductItemInput = {
    // discount: parseInt(data.discount),
    price: parseInt(data.price),
    quantity: parseInt(data.quantity),
    // product: parseInt(data.product),
  };
  const productData: CreateProductInput = {
    name: [name],
    description: [description],
    items: [item],
    category: parseInt(data.category),
  };
  const request: IRequest = {
    url: CATEGORIES,
    method: Methods.POST,
    data: productData,
    token,
  };

  try {
    const response: Response = await sendRequest(request);
    const responseData = await response.json();

    return successResponse(responseData);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  const request: IRequest = {
    url: `${CATEGORIES}/${id}/`,
    method: Methods.PUT,
    data,
  };

  try {
    const response: Response = await sendRequest(request);
    const responseData = await response.json();

    return successResponse(responseData);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function partialUpdate(
  params: IUpdateVariables
): Promise<IResponse> {
  const { id, data } = params;

  const request: IRequest = {
    url: `${CATEGORIES}/${id}/`,
    method: Methods.PATCH,
    data,
  };

  try {
    const response: Response = await sendRequest(request);

    return successResponse(await response.json());
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    return successResponse({}, `Feature has been moved to trash successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function bulkTrash(params: IBulkTrashVariables) {
  const { ids } = params;

  ids.forEach(async (id: string) => {
    try {
      await trash({ id });
    } catch (err: Error | any) {
      return errorResponse(err);
    }
  });

  return successResponse(
    undefined,
    `${ids.size} Features items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  const { id } = params;

  const request: IRequest = {
    url: `${CATEGORIES}/${id}/`,
    method: Methods.DELETE,
  };

  try {
    const response: Response = await sendRequest(request);

    return successResponse(await response.json());
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: any[]) {
  const option: IOption = { label: "Select", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.name, value: option.id });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "createdAt",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
];

export const dataCells: readonly string[] = ["name"];

import { Responses } from "@/constants/enums";
import { AlertColor } from "@mui/material";
import { AppContext } from "next/app";

export type Order = "asc" | "desc";
export type Mode = "light" | "dark";

export type Token = string | null | undefined;

export interface IOption {
  label: string;
  value: string;
}
export interface IMediaQuery {
  query: "up" | "down" | "between" | "only";
  key: "xs" | "sm" | "md" | "lg" | "xl";
  start?: "xs" | "sm" | "md" | "lg" | "xl";
  end?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface IFormFieldsVariables {
  slug: string;
  model?: any;
}

export interface IFormField {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "checkbox"
    | "radio"
    | "select"
    | "hidden"
    | "textarea";
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  options?: IOption;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof any;
  label: string | undefined;
  numeric: boolean;
}

export interface IResponse {
  type:
    | Responses.SUCCESS
    | Responses.ERROR
    | Responses.WARNING
    | Responses.INFO;
  message?: string;
  data?: any;
}

export interface IListingVariables {
  limit: number;
  searchText: string;
  startIndex?: number;
  token?: string;
  req?: AppContext["ctx"]["req"];
  isAuthenticated?: boolean;
}

export interface IGetVariables {
  id: string;
}

export interface IUpdateVariables extends IGetVariables {
  data: any;
}

export interface IBulkTrashVariables {
  ids: Set<string>;
}

export interface IAccountListingVariables extends IListingVariables {
  domain?: string;
}

export interface IUserListingVariables extends IListingVariables {
  email?: string;
}
export interface IFeatureListingVariables extends IListingVariables {
  slug?: string;
}

export type DefaultFeature = {
  name: string;
  icon: string;
  slug: string;
  singleName: string;
  precedence: string;
};

export interface IRequest {
  url: string;
  method: string;
  data?: any;
  token?: string;
}

export interface ISessionUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email?: string;
}

export interface IMultiSelect {
  name: string;
  modelKey: string;
  listing: Readonly<Record<string, any>>[];
}

export interface IApiVariables {
  slug: string;
  singleName: string;
  multiSelects?: IMultiSelect[];
}

export interface IModal {
  id: string;
  open: boolean;
  content: React.ReactNode;
}

export interface ISnackBar {
  open: boolean;
  severity: AlertColor | undefined;
  content: React.ReactNode;
  persist: boolean;
}

export type IModelName = "Overview" | "Product" | "Order" | "User" | "Category";
export type IResourceName =
  | "overview"
  | "products"
  | "orders"
  | "users"
  | "categories";

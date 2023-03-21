export enum Directions {
  RTL = "rtl",
  LTR = "ltr",
}

export enum Languages {
  ENGLISH = "en",
  ARABIC = "ar",
}

export enum Routes {
  ROOT = "/",
  AUTH = "auth",
  DASHBOARD = "dashboard",
  ADMIN = "admin",
}

export enum Pages {
  LOGIN = "signin",
  REGISTER = "signup",
  VERIFICATION_CODE = "verification-code",
  FORGOT_PASSWORD = "forgot-password",
  RESET_PASSWORD = "reset-password",
  LOGOUT = "logout",
  DASHBOARD = "dashboard",
  USERS = "users",
  OVERVIEW = "overview",
  FEATURES = "features",
  PRODUCTS = "products",
  ORDERS = "orders",
  SERVICES = "services",
  MEDIA_LIBRARY = "media-library",
  CATEGORIES = "categories",
}

export enum Resources {
  USERS = "users",
  PRODUCTS = "products",
  ORDERS = "orders",
  SERVICES = "services",
  CATEGORIES = "categories",
}

export enum Models {
  OVERVIEW = "Overview",
  PRODUCT = "Product",
  ORDER = "Order",
  USER = "User",
  CATEGORY = "Category",
}

export enum FormActions {
  CREATE = "Create",
  UPDATE = "Update",
}

export enum AuthErrors {
  USER_EXISTS = "UsernameExistsException",
}

export enum AdminGroups {
  ADMIN = "admin",
}

export enum AdminApiPaths {
  LIST_USERS = "/listUsers",
  LIST_USERS_IN_GROUP = "/listUsersInGroup",
  LIST_GROUPS_FOR_USER = "/listGroupsForUser",
  GET_USER = "/getUser",
  LIST_GROUPS = "/listGroups",
  ADD_USER_TO_GROUP = "/addUserToGroup",
  REMOVE_USER_FROM_GROUP = "/removeUserFromGroup",
  DISABLE_USER = "/disableUser",
  ENABLE_USER = "/enableUser",
}

export enum StatuesIds {
  CANCELLED = "151a9e09-5d09-4f07-9928-90cccf46f41d",
  CLOSED = "1ca36387-69d5-4dba-be42-634b34493729",
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  DATE = "date",
  TIME = "time",
  DATE_TIME_LOCAL = "datetime-local",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  SELECT = "select",
  TEXTAREA = "textarea",
  FILE = "file",
  IMAGE = "image",
  COLOR = "color",
  RANGE = "range",
  TEL = "tel",
  URL = "url",
  SEARCH = "search",
  MONTH = "month",
  WEEK = "week",
  HIDDEN = "hidden",
  MULTI_SELECT = "multi select",
}

export enum Navigate {
  NEXT = "next",
  PREV = "prev",
}
export enum Responses {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export enum SortBy {
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  STATUS = "status",
  START_DATE = "startDate",
  END_DATE = "endDate",
}

export enum Cookies {
  SESSION_USER = "session_user",
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
  CSRF_TOKEN = "csrftoken",
}

export enum AuthMessages {
  LOGIN_SUCCESS = "Login successfully",
  LOGOUT_SUCCESS = "Logout successfully",
  REGISTER_SUCCESS = "Register successfully",
  FORGET_PASSWORD_SUCCESS = "Forget password successfully",
  RESET_PASSWORD_SUCCESS = "Reset password successfully",
}

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
export enum Credentials {
  include = "include",
}

export enum FieldTypes {
  INTEGER = "integer",
  ARRAY = "array",
}

export enum MODAL_TYPES {
  RESOURCE = "resource",
  MEDIA = "media",
}

export enum Environments {
  PROD = "production",
  DEV = "development",
}

import { SortOrder } from "@/constants/enums";
import { Order } from "@/models/app";
import { NextRouter } from "next/router";

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
export const handleURLQueries = (
  router: NextRouter,
  path: string | undefined
): boolean => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query);

    return (
      router.asPath.includes(path) &&
      router.asPath.includes(router.query[arr[0]] as string) &&
      path !== "/"
    );
  }

  return false;
};

/**
 ** Hex color to RGBA color
 */
export const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

/**
 * Convert string hours to it's equivalent in numbers
 *
 * @param hours hours: string
 * @param format format: string
 *
 * @returns number
 */
export const hoursStringToNumber = (hours: string, format: string): number => {
  const time = hours.split(":")[0];

  return format === "PM"
    ? parseInt(time) + 12 === 24
      ? 12
      : parseInt(time) + 12
    : parseInt(time) === 12
    ? 0
    : parseInt(time);
};

/**
 * Compare giver hour in number to current locale hour
 *
 * @param hour hour: number
 *
 * @returns number
 */
export const compareHoursToCurrent = (hour: number): number => {
  const d = new Date();
  let currentHour = d.getHours();

  return hour - currentHour;
};

/**
 * Capitalize first letter of a given string
 *
 * @param string string: string
 *
 * @returns string
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === SortOrder.DESC
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array: any[], comparator: any) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function randomStr(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const formatAMPM = (isoDate: string) => {
  const date = new Date(isoDate);
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};

export function getWeekDays(locale: string) {
  const baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
  const weekDays = [];

  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "long" }));
    baseDate.setDate(baseDate.getDate() + 1);
  }

  return weekDays;
}

export function getDayName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "short" });
}

export function getDayNameLong(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

export function getDayNumber(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.getDate();
}

export function getMonthName(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, { month: "short" });
}

export function getDateFormatted(date: Date) {
  const today = date ? new Date(date) : new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

export function capitalizeWords(string: string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

export const mergeListOfStringsByDash = (list: string[] | null) => {
  if (list !== null && list.length)
    return list.reduce((prev, current) => `${prev} - ${current}`);

  return "";
};

export const mergeListOfStrings = (
  list: (string | null)[],
  delimiter: string
) => {
  if (list !== null && list.length)
    return list.reduce((prev, current) => `${prev} ${delimiter} ${current}`);

  return "";
};

export const makeFakePhoneNumbers = (index: number, length: number) => {
  var result = `01${index}`;
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getDomainName = () => {
  if (window.location.hostname === "localhost") return "itzone";
  return "itzone";
};

export const createArray = (size: number) =>
  Array.from({ length: size }, (_, i) => i);

export function convertToCamelCase(text: string) {
  return text.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

export function extractSelectedCheckboxes(keyName: string, data: any) {
  const selected: string[] = [];

  for (let key of Object.getOwnPropertyNames(data)) {
    if (key.includes(keyName)) {
      if (data[key] === true) {
        selected.push(key.replace(keyName, ""));
      }
    }
  }

  return selected;
}

export function validatePhone(phone: string) {
  var re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
  return re.test(phone);
}

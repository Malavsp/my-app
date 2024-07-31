import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormatter(dateStr: string) {
  const date = new Date(dateStr);

  const intlDateObj = new Intl.DateTimeFormat("en-US", {
    // month: "long",
    timeZone: "America/New_York",
  });

  const res = intlDateObj.format(date);
  // console.log(res);
  return res;
}

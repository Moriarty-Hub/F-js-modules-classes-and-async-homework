import getUrl from "./utils";
import { ADDRESS, PORT, PATH, REGION } from "./constant";

export const url = getUrl(ADDRESS, PORT, PATH);
export const region = REGION;

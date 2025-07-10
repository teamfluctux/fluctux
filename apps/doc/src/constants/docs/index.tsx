import { DEVELOPER_DOC_NAV } from "./developer.constant";
import { DocNavType } from "./type";
import { USER_DOC_NAV } from "./user.constant";

export type DocNavCategory = "user" | "developer";

export const getDocsByCategory: {[key in DocNavCategory]: DocNavType} = {
    "user": USER_DOC_NAV,
    "developer": DEVELOPER_DOC_NAV
}
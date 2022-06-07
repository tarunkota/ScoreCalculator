import Cookies from "universal-cookie";
import { domainUrl } from "./NetUtils";

export const getToken = (login = false) => {
  const cookies = new Cookies();
  let token = cookies.get("Token");
  if (login) {
    if (token == null) {
      window.open(domainUrl + "login/", "_self");
    }
  }
  return token;
};

export const clearToken = () => {
  const cookies = new Cookies();
  cookies.remove("Token", { path: "/" });
};

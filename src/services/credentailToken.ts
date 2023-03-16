import { getCookie } from "cookies-next";

function credentailToken() {
  const access_token = getCookie("access_token");
  const refresh_token = getCookie("refresh_token");
  if (access_token && refresh_token) {
    return { authorization: `Bearer ${access_token}` };
  }
}

export default credentailToken;

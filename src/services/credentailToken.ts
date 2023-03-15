import { getCookie } from "cookies-next";

function credentailToken() {
  const token = getCookie("session");
  if (token) {
    return { authorization: `Bearer ${token}` };
  }
}

export default credentailToken;

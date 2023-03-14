import { IRequest } from "@/models/app";

const sendRequest = async (params: IRequest): Promise<Response> => {
  const { url, method, data } = params;
  const options: any = {
    method, // *GET, POST, PUT, DELETE, etc.
    headers: { "Content-Type": "application/json" },
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer",
  };

  if (data !== undefined) options.body = JSON.stringify(data);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + url, options);
};

export default sendRequest;

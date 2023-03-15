import { IRequest } from "@/models/app";

const sendRequest = async (params: IRequest): Promise<Response> => {
  const { url, method, data, credentials, credentialToken } = params;
  const options: any = {
    method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      ...credentialToken,
    },
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials, // include, *same-origin, omit
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer",
  };

  if (data !== undefined) options.body = JSON.stringify(data);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + url, options);
};

export default sendRequest;

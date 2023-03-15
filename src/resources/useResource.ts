import useOrder from "./useOrder";
import useProduct from "./useProduct";

const useResource = () => {
  const productsApi = useProduct("products");
  const ordersApi = useOrder("products");

  return {
    ...ordersApi,
    ...productsApi,
  };
};

export default useResource;

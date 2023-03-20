import useCategory from "./useCategory";
import useOrder from "./useOrder";
import useProduct from "./useProduct";

const useResource = () => {
  const productsApi = useProduct("products");
  const ordersApi = useOrder("products");
  const categoriesApi = useCategory("categories");

  return {
    ...ordersApi,
    ...productsApi,
    ...categoriesApi,
  };
};

export default useResource;

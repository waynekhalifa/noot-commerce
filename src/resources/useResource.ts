import useAccount from "./useAccount";
import useFeature from "./useFeature";
import useUser from "./useUser";

const useResource = () => {
  const accountsApi = useAccount("accounts");
  const usersApi = useUser("users");
  const featuresApi = useFeature("features");

  return {
    ...accountsApi,
    ...usersApi,
    ...featuresApi,
  };
};

export default useResource;

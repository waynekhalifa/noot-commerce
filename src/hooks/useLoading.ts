import { useState } from "react";

interface IState {
  loading: boolean;
}

const INITIAL_STATE: IState = { loading: true };

const useLoading = () => {
  const [state, setState] = useState(INITIAL_STATE);

  return {
    ...state,
    setLoading: (loading: boolean) =>
      setState((prevState) => ({ ...prevState, loading })),
  };
};

export default useLoading;

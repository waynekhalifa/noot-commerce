import { useState } from "react";

interface IState {
  updating: boolean;
}

const INITIAL_STATE: IState = { updating: false };

const useUpdating = () => {
  const [state, setState] = useState(INITIAL_STATE);

  return {
    ...state,
    setUpdating: (updating: boolean) =>
      setState((prevState) => ({ ...prevState, updating })),
  };
};

export default useUpdating;

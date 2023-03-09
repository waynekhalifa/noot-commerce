import { useState } from "react";

interface IState {
  confirm: string;
}

const INITIAL_STATE: IState = { confirm: "" };

const useConfirm = () => {
  const [state, setState] = useState(INITIAL_STATE);

  return {
    ...state,
    setConfirm: (confirm: string) =>
      setState((prevState) => ({ ...prevState, confirm })),
  };
};

export default useConfirm;

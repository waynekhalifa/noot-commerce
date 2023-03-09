import { useState } from "react";

interface IState {
  selected: Set<string>;
}

const INITIAL_STATE: IState = { selected: new Set<string>() };

const useSelected = () => {
  const [state, setState] = useState(INITIAL_STATE);

  return {
    ...state,
    setSelected: (selected: Set<string>) =>
      setState((prevState) => ({ ...prevState, selected })),
  };
};

export default useSelected;

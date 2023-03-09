import { useState } from "react";
import { Token } from "../models/app";

interface StateProps {
  startIndex: number;
  limit: number;
  nextToken: Token;
  nextNextToken: Token;
  previousTokens: Token[];
}

const INITIAL_STATE: StateProps = {
  startIndex: 0,
  limit: 10,
  nextToken: undefined,
  nextNextToken: undefined,
  previousTokens: [],
};

const usePaginate = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { nextToken, nextNextToken, previousTokens, limit } = state;

  return {
    ...state,
    hasNext: !!state.nextNextToken,
    hasPrev: state.previousTokens.length > 0,
    changeLimit: (limit: number) => setState({ ...INITIAL_STATE, limit }),
    changeNextNextToken: (nextNextToken: Token) =>
      setState((prevState) => ({ ...prevState, nextNextToken })),
    next: () =>
      setState((state) => ({
        ...state,
        startIndex: state.startIndex + state.limit,
      })),
    tokenNext: () =>
      setState({
        ...state,
        previousTokens: [...previousTokens, nextToken],
        nextToken: nextNextToken,
        nextNextToken: undefined,
      }),
    prev: () =>
      setState((state) => ({
        ...state,
        startIndex: state.startIndex - state.limit,
      })),
    tokenPrev: () =>
      setState({
        ...state,
        nextToken: previousTokens.pop(),
        previousTokens: [...previousTokens],
        nextNextToken: undefined,
      }),
    reset: () => setState(INITIAL_STATE),
  };
};

export default usePaginate;

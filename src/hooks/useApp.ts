import { useDispatch } from "react-redux";
import { ISnackBar } from "../models/app";
import { setSnackBar } from "@/store/appSlice";

const useModal = () => {
  const dispatch = useDispatch();

  return {
    changeSnackbar: (payload: ISnackBar) => dispatch(setSnackBar(payload)),
  };
};

export default useModal;

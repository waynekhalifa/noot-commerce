import { IModal } from "@/models/app";
import { setMediaModal, setResourceModal } from "@/store/modalSlice";
import { useDispatch } from "react-redux";

const useModal = () => {
  const dispatch = useDispatch();

  return {
    changeResourceModal: (modal: IModal) => dispatch(setResourceModal(modal)),
    changeMediaModal: (modal: IModal) => dispatch(setMediaModal(modal)),
  };
};

export default useModal;

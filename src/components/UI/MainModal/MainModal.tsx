import { useSelector } from "react-redux";
import { Suspense } from "react";
import { Backdrop, Box } from "@mui/material";

import ActionLoader from "../ActionLoader";
import { IModal } from "../../../models/app";
import { selectMediaModal, selectResourceModal } from "@/store/modalSlice";
import useModal from "@/hooks/useModal";
import { closeMediaModal, closeResourceModal } from "@/helpers/responser";

const MainModal: React.FC = () => {
  const { changeResourceModal, changeMediaModal } = useModal();
  const resourceModal: IModal = useSelector(selectResourceModal);
  const mediaModal: IModal = useSelector(selectMediaModal);

  const renderModalContent = (): React.ReactNode => {
    // Resource modal is open
    if (resourceModal.open) return resourceModal.content;
    if (mediaModal.open) return mediaModal.content;

    return null;
  };

  const handleClose = (): void => {
    if (resourceModal.open) {
      changeResourceModal(closeResourceModal());
    }
    if (mediaModal.open) {
      changeMediaModal(closeMediaModal());
    }
  };

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        alignItems: "flex-start",
      }}
      open={resourceModal.open || mediaModal.open}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          cursor: "pointer",
        }}
        onClick={handleClose}
      />
      <Suspense fallback={<ActionLoader position="fixed" />}>
        {renderModalContent()}
      </Suspense>
    </Backdrop>
  );
};

export default MainModal;

import FormSection from "@/components/UI/FormSection";
import LightBox from "@/components/UI/LightBox";
import { Box, Button, CircularProgress } from "@mui/material";
import { FormActions } from "../../../../constants/enums";

interface Props {
  action: string;
  isSubmitting: boolean;
}

const SubmitButton: React.FC<Props> = ({ action, isSubmitting }) => {
  const renderButtonText = (): string | React.ReactNode => {
    if (isSubmitting) return <CircularProgress thickness={1} size={26} />;

    if (action === FormActions.CREATE) return "Publish";

    return "Update";
  };

  return (
    <FormSection label={"Publish"}>
      <LightBox>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            size="small"
            disableElevation
            disabled={isSubmitting}
          >
            {renderButtonText()}
          </Button>
        </Box>
      </LightBox>
    </FormSection>
  );
};

export default SubmitButton;

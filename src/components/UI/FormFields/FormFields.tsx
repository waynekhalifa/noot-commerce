import { FC } from "react";

import { IFormField } from "@/models/app";
import { InputTypes } from "@/constants/enums";
import RHTextField from "./RHTextField";
import RHPasswordField from "./RHPasswordField";
import RHCheckbox from "./RHCheckbox";

interface Props extends IFormField {
  errors: any;
  control: any;
}

const FormFields: FC<Props> = (props) => {
  const { type } = props;

  const renderField = (): React.ReactNode => {
    if (type === InputTypes.TEXT || type === InputTypes.HIDDEN) {
      return <RHTextField {...props} />;
    }

    if (type === InputTypes.PASSWORD) {
      return <RHPasswordField {...props} />;
    }

    if (type === InputTypes.CHECKBOX) {
      return <RHCheckbox {...props} />;
    }

    return null;
  };

  return <>{renderField()}</>;
};

export default FormFields;

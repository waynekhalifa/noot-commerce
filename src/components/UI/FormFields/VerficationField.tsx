import { Languages } from "@/constants/enums";
import { InputBase } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VerificationField: React.FC<Props> = ({ value, handleChange }) => {
  const { locale } = useRouter();

  return (
    <InputBase
      sx={{
        maxWidth: 64,
        textAlign: "center",
        mr: locale === Languages.ARABIC ? 2 : 0,
        borderBottom: "2px solid",
        borderColor: "grey.900",
        p: "0 28px",
      }}
      value={value}
      onCanPlay={handleChange}
    />
  );
};

export default VerificationField;

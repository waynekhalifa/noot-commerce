import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Typography } from "@mui/material";

const DropzoneField: FC = () => {
  const onDrop: any = useCallback(async (acceptedFiles: any) => {
    console.log({ acceptedFiles });

    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: (theme) => `1px solid ${theme.palette.grey[400]}`,
          pt: 4,
          pb: 4,
          mt: "-4px",
          mb: 3,
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>Drop files Here</Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom>Drop files here</Typography>
            <Typography gutterBottom>Or</Typography>
            <Button color="primary" variant="outlined">
              Select files
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default DropzoneField;

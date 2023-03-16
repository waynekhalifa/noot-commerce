import { FC, memo, Suspense } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

import ContentLoader from "../UI/ContentLoader";
import Listing from "./Listing";

const Overview = dynamic(() => import("./Overview")) as any;

interface Props {
  slug: string;
}

const Admin: FC<Props> = ({ slug }) => {
  const renderContent = (): React.ReactNode => {
    switch (slug) {
      default:
        return <Listing slug={slug} />;
    }
  };

  return (
    <Box component="main">
      <Suspense fallback={<ContentLoader />}>{renderContent()}</Suspense>
    </Box>
  );
};

export default memo(Admin);

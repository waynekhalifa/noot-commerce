import { FormActions } from "@/constants/enums";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import ActionLoader from "@/components/UI/ActionLoader";
import { IModelName, IResourceName } from "@/models/app";

const List = dynamic(() => import("./List")) as any;
const Form = dynamic(() => import("./Form")) as any;
const Edit = dynamic(() => import("./Edit")) as any;

interface Props {
  resourceName: IResourceName;
  singleName: IModelName;
  action?: string;
  id?: string;
}

const Listing: React.FC<Props> = ({ resourceName, singleName, action, id }) => {
  const renderContent = (): React.ReactNode => {
    switch (action) {
      case FormActions.CREATE:
        return (
          <Form
            resourceName={resourceName}
            singleName={singleName}
            action={action}
          />
        );
      case FormActions.UPDATE:
        return (
          <Edit
            resourceName={resourceName}
            singleName={singleName}
            action={action}
            id={id}
          />
        );
      default:
        return <List resourceName={resourceName} singleName={singleName} />;
    }
  };

  return (
    <>
      <Suspense fallback={<ActionLoader position="fixed" />}>
        {renderContent()}
      </Suspense>
    </>
  );
};

export default Listing;

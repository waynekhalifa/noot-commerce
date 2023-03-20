import ActionLoader from "@/components/UI/ActionLoader";
import { Responses } from "@/constants/enums";
import useApi from "@/hooks/useApi";
import useLoading from "@/hooks/useLoading";
import {
  IApiVariables,
  IGetVariables,
  IModelName,
  IResourceName,
  IResponse,
} from "@/models/app";
import { useEffect, useState } from "react";
import Form from "../Form";

interface Props {
  resourceName: IResourceName;
  singleName: IModelName;
  action: string;
  id: string;
}

interface IState {
  resource: any;
}

const INITIAL_STATE: IState = {
  resource: undefined,
};

const Edit: React.FC<Props> = ({ resourceName, singleName, action, id }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { resource } = state;
  const apiParams: IApiVariables = {
    slug: resourceName,
    singleName,
  };
  const api = useApi(apiParams);
  const { loading, setLoading } = useLoading();

  const fetch = async () => {
    const params: IGetVariables = { id };
    const response: IResponse = await api.get(params);

    if (response.type === Responses.SUCCESS) {
      setState({ ...state, resource: response.data });
      setLoading(false);
    } else {
      // @TODO handle error

      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, []);

  if (loading) return <ActionLoader position="fixed" />;

  return (
    <Form
      resourceName={resourceName}
      singleName={singleName}
      action={action}
      resource={resource}
    />
  );
};

export default Edit;

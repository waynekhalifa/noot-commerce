import { Box, Grid } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

import Stat from "./Stat";
import { useEffect, useState } from "react";
import { IListingVariables, IResponse } from "@/models/app";
import useAccount from "@/resources/useAccount";
import useUser from "@/resources/useUser";
import useFeature from "@/resources/useFeature";
import { Responses } from "@/constants/enums";
import ActionLoader from "@/components/UI/ActionLoader";
import useLoading from "@/hooks/useLoading";

interface IState {
  sites: number;
  features: number;
  users: number;
}

const INITIAL_STATE: IState = { sites: 0, features: 0, users: 0 };

const Overview: React.FC = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { sites, features, users } = state;
  const { loading, setLoading } = useLoading();
  const { accountsFetch } = useAccount("accounts");
  const { featuresFetch } = useFeature("features");
  const { usersFetch } = useUser("users");

  const fetchData = async () => {
    const listingParams: IListingVariables = {
      searchText: "",
      startIndex: 0,
      limit: 1000,
    };

    const response: IResponse[] = await Promise.all([
      accountsFetch(listingParams),
      featuresFetch(listingParams),
      usersFetch(listingParams),
    ]);

    const accounts: IResponse = response[0];
    const features: IResponse = response[1];
    const users: IResponse = response[2];

    if (
      accounts.type === Responses.SUCCESS &&
      features.type === Responses.SUCCESS &&
      users.type === Responses.SUCCESS
    ) {
      setState({
        sites: accounts.data.length,
        features: features.data.length,
        users: users.data.length,
      });

      setLoading(false);
    } else {
      // @TODO: Handle error
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <Stat
              text={"Sites"}
              number={sites}
              color={"#327AB1"}
              icon={<WebIcon />}
            />
            <Stat
              text={"Features"}
              number={features}
              color={"#3C8C95"}
              icon={<SettingsIcon />}
            />
            <Stat
              text={"Users"}
              number={users}
              color={"#F5A962"}
              icon={<PeopleIcon />}
            />
          </Grid>
        </Grid>
      </Box>
      {loading && <ActionLoader position="fixed" />}
    </>
  );
};

export default Overview;

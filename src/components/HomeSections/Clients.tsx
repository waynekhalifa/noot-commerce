import { Box } from "@mui/material";

import client1 from "@images/client-1.png";
import client2 from "@images/client-2.png";
import client3 from "@images/client-3.png";
import client4 from "@images/client-4.png";
import client5 from "@images/client-5.png";
import OptimizedImg from "../OptimizedImg";

interface ClientProps {
  client: any;
}

const Client: React.FC<ClientProps> = ({ client }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "100",
        }}
      >
        <OptimizedImg
          src={client.src}
          width={200}
          height={70}
          alt="noot"
          style={{
            display: "block",
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
    </>
  );
};

interface Props {}

const Clients: React.FC<Props> = ({}) => {
  const clients: any[] = [client1, client2, client3, client4, client5];

  return (
    <Box
      sx={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0rem 1rem",
        zIndex: "100",
        paddingTop: {
          lg: "3rem",
          md: "3rem",
          xs: "0rem",
        },
      }}
    >
      {clients.map((client, index) => (
        <Client client={client} key={index} />
      ))}
    </Box>
  );
};

export default Clients;

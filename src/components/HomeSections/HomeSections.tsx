import Clients from "./Clients";
import Featured from "./Featured";

interface Props {}

const HomeSections: React.FC<Props> = ({}) => {
  return (
    <>
      <Featured />
      <Clients />
    </>
  );
};

export default HomeSections;

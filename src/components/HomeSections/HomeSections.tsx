import Clients from "./Clients";
import Featured from "./Featured";
import Services from "./Services";

interface Props {}

const HomeSections: React.FC<Props> = ({}) => {
  return (
    <>
      <Featured />
      <Clients />
      <Services />
    </>
  );
};

export default HomeSections;

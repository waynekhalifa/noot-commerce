import Clients from "./Clients";
import CreateWebsite from "./CreateWebsite";
import Featured from "./Featured";
import Services from "./Services";
import TryNoot from "./TryNoot";
import Dashbaord from "./Dashbaord";
import BussinessProcess from "./BussinessProcess";
import Testimonials from "./Testimonials";

interface Props {}

const HomeSections: React.FC<Props> = ({}) => {
  return (
    <>
      <Featured />
      <Clients />
      <Services />
      <CreateWebsite />
      <TryNoot />
      <Dashbaord />
      <BussinessProcess />
      <Testimonials />
    </>
  );
};

export default HomeSections;

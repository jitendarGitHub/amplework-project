import { WelcomeBlock } from "../../components/Index";
import ScheduleBtn from "../../components/button/SchduleBtn";
import Maintenance from "../../assets/banner.jpg";

const Home = () => {
  return (
    <>
      <WelcomeBlock
        image={Maintenance}
        title="APPLICATION MAINTENANCE AND SUPPORT"
        description="Top class application maintenance and support services for error-free, high performing applications"
      />
    </>
  );
};
export default Home;

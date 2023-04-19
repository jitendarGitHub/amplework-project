import {
  Activity,
  ApplicationPerformance,
  ApplicationShap,
  BussinessOpration,
  DiverseLevel,
  Experience,
  Facinating,
  Maintenance,
  Question,
  Developer,
  WelcomeBlock,
} from "../../components/Index";
import { Footer } from "../../components/Index";
import maintenance from "../../assets/banner.jpg";
// import { CardGroup, Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <WelcomeBlock
        image={maintenance}
        title="APPLICATION MAINTENANCE AND SUPPORT"
        description="Top class application maintenance and support services for error-free, high performing applications"
      />
      {/* <Maintenance /> */}
      {/* <Experience /> */}
      <Activity />
      <ApplicationShap />
      <Facinating />
      <DiverseLevel />
      <BussinessOpration />
      <Question />
      <Developer />
      <ApplicationPerformance />
      <Footer />
    </>
  );
};
export default Home;

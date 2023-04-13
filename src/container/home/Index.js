import { WelcomeBlock } from "../../components/Index";
import { Footer } from "../../components/Index";
import Maintenance from "../../assets/banner.jpg";
const Home = () => {
  return (
    <>
      <WelcomeBlock
        image={Maintenance}
        title="APPLICATION MAINTENANCE AND SUPPORT"
        description="Top class application maintenance and support services for error-free, high performing applications"
      />
      <Footer />
    </>
  );
};
export default Home;

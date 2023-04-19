import maintenance from "../../assets/banner.jpg";
import Footer from "../../components/footer/Footer";
import WelcomeBlock from "../../components/welcomeBlock/WelcomeBlock";
import PageContent from "../views/pagecontent/PageContent";
// import { CardGroup, Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <WelcomeBlock
        image={maintenance}
        title="APPLICATION MAINTENANCE AND SUPPORT"
        description="Top class application maintenance and support services for error-free, high performing applications"
      />
      <PageContent />

      <Footer />
    </>
  );
};
export default Home;

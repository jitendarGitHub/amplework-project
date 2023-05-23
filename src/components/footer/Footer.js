import "./footer.css";

import {
  PartTime,
  Calendar,
  StartupBg,
  EnterpriseBg,
  Accessibility,
  Adaptability,
  Scalability,
  AmpleLogo,
  hourglass,
  Aws,
  cloud,
  iso,
  register,
} from "../../assets";

import { CardGroup, Container, Image } from "react-bootstrap";

import SocialmediaFooter from "./SocialmediaFooter";
import FooterCard from "../FooterCard";

const Footer = () => {
  return (
    <>
      <div className="footer pt-5" style={{ backgroundColor: "#080a37" }}>
        <Container className="mt-5">
          <CardGroup>
            <FooterCard
              title="Do you want to hire resources of your Project?"
              description="we have web and app development teams to serve modern tech-savy client by bidding on the challenges on their bespoken requirement."
              PartTime={PartTime}
              Hourglass={hourglass}
              Calendar={Calendar}
              EnterpriseBg={EnterpriseBg}
              DurationContent1="Part Time"
              DurationContent2="Full Time"
              DurationContent3="Hourly"
              Bgcolor="#0d6efd"
              btnC
            />
            <FooterCard
              title="Are you a startup and want to go live asap?"
              description="We have been working with startups since our inception and help them scale as they grow.Our experience can help you refine your business ideas and get into the market asap."
              PartTime={Accessibility}
              Hourglass={Adaptability}
              Calendar={Scalability}
              EnterpriseBg={StartupBg}
              DurationContent1="Accessibility"
              DurationContent2="Adaptability"
              DurationContent3="Scability"
              Bgcolor="transparent"
              CardBorder="#0d6efd"
            />
          </CardGroup>
        </Container>

        <div className="text-white container mt-5 d-lg-flex">
          <div className="col-lg-6 col-md-12 d-lg-flex align-self-center p-5">
            <Image src={AmpleLogo} alt="" width={"80%"} />
          </div>
          <div className=" d-flex flex-wrap col-lg-6 col-sm-12 col-md-12 align-self-center justify-content-around">
            <div className="img1 text-center">
              <Image src={iso} alt="" className="img-fluid" />
              <div className="">
                <span className="text-primary">ISO-27001</span>
              </div>
              <div>
                <span className="text-primary">Software Security</span>
              </div>
            </div>
            <div className="img1 text-center ">
              <Image src={register} alt="" className="img-fluid" />
              <div className="">
                <span className="text-primary">Dan & Breadstreet</span>
              </div>
              <div>
                <span className="text-primary">Verified</span>
              </div>
            </div>
            <div className="img1 text-center ">
              <Image src={cloud} alt="" className="img-fluid" />
              <div className="">
                <span className="text-primary">Google Cloud</span>
              </div>
              <div className="">
                <span className="text-primary">Partner</span>
              </div>
            </div>
            <div className="img1 text-center ">
              <Image src={Aws} alt="" className="img-fluid" />
              <div className="">
                <span className="text-primary">AWS Consulting</span>
              </div>
              <div className="">
                <span className="text-primary">Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ample-footer py-5">
        <div
          className="container w-100 ample-hire-list flex-wrap col-md-8 d-lg-flex d-flex justify-content-between"
          style={{ backgroundColor: "#12152c" }}
        >
          {FooterMock.map((items) => {
            return (
              <div className="col-lg-3">
                {items?.list?.map((item) => {
                  return (
                    <>
                      <h5 className="text-white ample-hire ">{item.heading}</h5>
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <li>{item.lists}</li>
                      </a>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <SocialmediaFooter />
    </>
  );
};
export default Footer;

const FooterMock = [
  {
    list: [
      { heading: "Development Service" },
      { lists: "Product Design" },
      { lists: "MVP development" },
      { lists: "Continuous Product development" },
      { lists: "DevOps developpment" },
      { lists: "Architecture Consultant" },
      { lists: "Mobile Application Development" },
      { lists: "Enterprise Web development" },
      { lists: "Vooice App Development" },
      { lists: "IoT App Develop ment" },
      { lists: "Blockchain App Development" },
      { lists: "Ai BOT Development" },
      { lists: "Mobile App Maintenance" },
    ],
  },
  {
    list: [
      { heading: "Dedicated Resources" },
      { lists: "Hire Swift Develmwent" },
      { lists: "Hire iOS/iPhone Development" },
      { lists: "Hire Flutter Development" },
      { lists: "Hire React Native Development" },
      { lists: "Hire Android Development" },
      { lists: "Hire Angular Development" },
      { lists: "Hire Node.js Development" },
      { lists: "Hire Vue.js Development" },
      { lists: "Hire React.js Development" },
      { lists: "Hire Larevel Development" },
      { lists: " Hire Golang Development" },
      { lists: " Full Stack Development" },
    ],
  },
  {
    list: [
      { heading: "Industry Solution" },
      { lists: "Fitness Sector" },
      { lists: "Wellness Area" },
      { lists: "Health Service" },
      { lists: "Food & Hyperlocal" },
      { lists: "eLearning Solution" },
      { lists: "Social & Local" },
      { lists: "Travel & Holidays" },
      { lists: "Fintech solution" },
      { lists: "Ecomm & Marketplace" },
      { lists: "Jobs & Employment" },
      { lists: "Real Estate Solution" },
      { lists: "Software Maintenence and Support" },
    ],
  },
  {
    list: [
      { heading: "EnterPrise" },
      { lists: "On Demand App Development" },
      { lists: "Fiels Sales & Service" },
      { lists: "Document Management" },
      { lists: "Hippa Compiances" },
      { lists: "Software Testing Service" },
      { lists: "Logistics and Distribution" },
      { lists: "Enterprise App Integration" },
      { lists: "Cloud Infrastructure" },
      { lists: "Bussiness Intelligency" },
      { lists: "Enterprise Mobility" },
      { lists: "Staff Argumentation Service" },
      { lists: "Inspection App Development" },
    ],
  },
];

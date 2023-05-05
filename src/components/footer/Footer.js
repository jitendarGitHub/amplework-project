//css
import "./footer.css";
import { ExploreMore1, ExploreMore2 } from "../button/Buttons";

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
} from "../../assets";

//aws assests
import aws from "../../assets/aws-consulting-partner.png";
import iso from "../../assets/iso.png";
import register from "../../assets/d-b-register.png";
import cloud from "../../assets/google-cloud-partner.png";

import { CardGroup, Container } from "react-bootstrap";
import FooterCard from "../FooterCard";
import SocialmediaFooter from "./SocialmediaFooter";

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
              Button={ExploreMore1()}
              Bgcolor="#0d6efd"
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
              Button={ExploreMore2()}
              Bgcolor="transparent"
              CardBorder="#0d6efd"
            />
          </CardGroup>
        </Container>
        <div className="text-white container mt-5 d-lg-flex">
          <div className="col-lg-6 col-md-12 d-lg-flex align-self-center p-5">
            <img src={AmpleLogo} alt="" width={"80%"} />
          </div>
          <div className=" d-flex flex-wrap col-lg-6 col-sm-12 col-md-12 align-self-center justify-content-around">
            <div className="img1 text-center">
              <img src={iso} alt="" className="img-fluid" />
              <div className="">
                <span>ISO-27001</span>
              </div>
              <div>
                <span>Software Security</span>
              </div>
            </div>
            <div className="img1 text-center ">
              <img src={register} alt="" className="img-fluid" />
              <div className="">
                <span>Dan & Breadstreet</span>
              </div>
              <div>
                <span>Verified</span>
              </div>
            </div>
            <div className="img1 text-center ">
              <img src={cloud} alt="" className="img-fluid" />
              <div className="">
                <span>Google Cloud</span>
              </div>
              <div className="">
                <span>Partner</span>
              </div>
            </div>
            <div className="img1 text-center ">
              <img src={aws} alt="" className="img-fluid" />
              <div className="">
                <span>AWS Consulting</span>
              </div>
              <div className="">
                <span>Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ample-footer py-5">
        <div className="container w-100 ample-hire-list flex-wrap col-md-8 d-lg-flex d-flex justify-content-between">
          <div className="">
            <ol>
              <h5 className="ample-hire">Development Service</h5>
              <li>
                <a>Product Design</a>
              </li>
              <li>
                <a>MVP development</a>
              </li>
              <li>
                <a>Continuous Product development</a>
              </li>
              <li>
                <a>DevOps development</a>
              </li>
              <li>
                <a>Architecture Consultant </a>
              </li>
              <li>
                <a>Mobile Application Development</a>
              </li>
              <li>
                <a>Enterprise Web development</a>
              </li>
              <li>
                <a>Vooice App Development</a>
              </li>
              <li>
                <a>IoT App Development</a>
              </li>
              <li>
                <a>Blockchain App Development</a>
              </li>
              <li>
                <a>Ai BOT Development</a>
              </li>
              <li>
                <a>Mobile App Maintenance</a>
              </li>
            </ol>
          </div>
          <div className="">
            <ol>
              <h5 className="ample-hire">Dedicated Resources</h5>
              <li>
                <a>Hire Swift Develmwent</a>
              </li>
              <li>
                <a>Hire iOS/iPhone Development</a>
              </li>
              <li>
                <a>Hire Flutter Development</a>
              </li>
              <li>
                <a>Hire React Native Development</a>
              </li>
              <li>
                <a>Hire Android Development</a>
              </li>
              <li>
                <a>Hire Angular Development</a>
              </li>
              <li>
                <a>Hire Node.js Development</a>
              </li>
              <li>
                <a>Hire Vue.js Development</a>
              </li>
              <li>
                <a>Hire React.js Development</a>
              </li>
              <li>
                <a>Hire Larevel Development</a>
              </li>
              <li>
                <a>Hire Golang Development</a>
              </li>
              <li>
                <a>Full Stack Development</a>
              </li>
            </ol>
          </div>
          <div className="">
            <ol>
              <h5 className="ample-hire">Industry Solution</h5>
              <li>
                <a>Fitness Sector</a>
              </li>
              <li>
                <a>Wellness Area</a>
              </li>
              <li>
                <a>Health Service</a>
              </li>
              <li>
                <a>Food & Hyperlocal</a>
              </li>
              <li>
                <a>eLearning Solution</a>
              </li>
              <li>
                <a>Social & Local</a>
              </li>
              <li>
                <a>Travel & Holidays</a>
              </li>
              <li>
                <a>Fintech solution</a>
              </li>
              <li>
                <a>Ecomm & Marketplace</a>
              </li>
              <li>
                <a>Jobs & Employment</a>
              </li>
              <li>
                <a>Real Estate Solution</a>
              </li>
              <li>
                <a>Software Maintenence and Support</a>
              </li>
            </ol>
          </div>
          <div className="">
            <ol>
              <h5 className="ample-hire">EnterPrise</h5>
              <li>
                <a>On Demand App Development</a>
              </li>
              <li>
                <a>Fiels Sales & Service</a>
              </li>
              <li>
                <a>Document Management</a>
              </li>
              <li>
                <a>Hippa Compiances</a>
              </li>
              <li>
                <a>Software Testing Service</a>
              </li>
              <li>
                <a>Logistics and Distribution</a>
              </li>
              <li>
                <a>Enterprise App Integration</a>
              </li>
              <li>
                <a>Cloud Infrastructure</a>
              </li>
              <li>
                <a>Bussiness Intelligency </a>
              </li>
              <li>
                <a>Enterprise Mobility</a>
              </li>
              <li>
                <a>Staff Argumentation Service</a>
              </li>
              <li>
                <a>Inspection App Development</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <SocialmediaFooter />
    </>
  );
};
export default Footer;

import "../pagecontent/pagecontent.css";
import { BiBug } from "@react-icons/all-files/bi/BiBug";
import { MdHighQuality } from "@react-icons/all-files/md/MdHighQuality";
import { MdSettingsRemote } from "@react-icons/all-files/md/MdSettingsRemote.esm";
import { VscVersions } from "@react-icons/all-files/vsc/VscVersions";
import { BsFillAlarmFill } from "@react-icons/all-files/bs/BsFillAlarmFill";
import { GrDocumentPerformance } from "@react-icons/all-files/gr/GrDocumentPerformance";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport.esm";
import {
  Accordion,
  Button,
  Card,
  CardGroup,
  Carousel,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";

import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { BsClipboardData } from "@react-icons/all-files/bs/BsClipboardData";
import { GiArcheryTarget } from "@react-icons/all-files/gi/GiArcheryTarget";
import { FiTarget } from "@react-icons/all-files/fi/FiTarget";

import {
  enterprise1,
  enterprise2,
  enterprise3,
  enterprise4,
  enterpeise5,
  enterprise6,
  enterprise7,
  enterprise8,
  enterpriseBg,
  digitalApp,
  digitalApp2,
  digitalApp3,
  facinating1,
  facinating2,
  facinating3,
  facinating4,
  facinating5,
  Apps1,
  Apps2,
  Apps3,
  Apps4,
  Apps5,
  Apps6,
  Apps7,
  Apps8,
  captcha,
  SantoshSir,
  PrakashSir,
  NovaMam,
  QUestionBG,
  Bussiness,
  DeveloperBG,
  BugActivity1,
  BugActivity2,
  BugActivity3,
  BugActivity4,
  BugActivity5,
  BugActivity6,
  BugActivity7,
  BugActivity8,
  DiverseCardBg,
  HourlyPlan,
  Target,
} from "../../../assets";

import BugActivity from "../../../components/BugActivity";
import ApplicationCard from "../../../components/ApplicationCard";
import Shapcard from "../../../components/ShapCard";
import FacinatingCard from "../../../components/FacinatingCard";

import BussinessTimeCard from "../../../components/BussinessTimeCard";
import Cards from "../../../components/DeveloperInfo";
import ClientAppreciation from "../../../components/ClientAppreciations";

import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
import { SiAppstore } from "@react-icons/all-files/si/SiAppstore";
import SwetcoinBg from "../../../assets/sweatCoin_bg.png";

import { HiOutlineUser } from "@react-icons/all-files/hi/HiOutlineUser";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall";
import { RiApps2Line } from "@react-icons/all-files/ri/RiApps2Line";
import { BiMessageAltDetail } from "@react-icons/all-files/bi/BiMessageAltDetail";
import { BiDollar } from "@react-icons/all-files/bi/BiDollar";
import { IoMdAddCircle } from "@react-icons/all-files/io/IoMdAddCircle";

import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { VscGraph } from "@react-icons/all-files/vsc/VscGraph";
import { SiTimescale } from "@react-icons/all-files/si/SiTimescale";
const PageContent = () => {
  return (
    <>
      <div className="page-content">
        <section className=" bg-light">
          <div className="container">
            <div className="row justify-content-between justify-content-lg-end columnreverse">
              <div className="col-sm-12 col-lg-5 pt-md-2  pl-md-5 align-self-center">
                <div className="position-relative right">
                  <div className="">
                    <img
                      src="https://www.amplework.com/wp-content/uploads/2023/04/clicks.png"
                      width={"90%"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-7">
                <h6 className="supporter-title text-primary fw-bold">
                  AMPLEWORK SOFTWARE
                </h6>
                <h3 className="supporter-heading">
                  Your dedicated Supporter for App Maintenance Service
                </h3>
                <p className="supporter-para mt-4">
                  App maintenance is a critical aspect because it effectively
                  keeps the application functioning in an optimized manner so
                  that it can fulfill your audient requirement. At Amplework ,
                  we can support you in almost everthing from bug fixed to
                  security potches. Our prowess developers ensure that the
                  application should stay secure and up-to-date
                </p>
                <p className="supporter-para">
                  App maintenance is a critical aspect because it effectively
                  keeps the application functioning in an optimized manner so
                  that it can fulfill your audient requirement. At Amplework ,
                  we can support you in almost everthing from bug fixed to
                  security potches.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="" style={{ backgroundColor: "rgb(22 45 66)" }}>
          <div className="container">
            {" "}
            <div className=" text-center text-light experience">
              <div className=" ">
                <h3 className="experience-heading">
                  Experience Unparalleled Excellence with Our Comprehensive
                  <br />
                  Application Support and Maintenance
                </h3>

                <p className="experience-para mt-4">
                  Our advanced mobile application maintenance and support
                  provide a comprehensive approach to managing
                  <br /> and maintaining your applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light  p-2 pb-5">
          <div className="container maintenance-Section">
            <div className=" maintenance">
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise1} className="fa" alt="" />
                </div>

                <div className="content">
                  <h5 className="text-dark fw-bold">
                    Proactive Monitoring & Maintenance
                  </h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise2} className="fa" alt="" />
                </div>
                <div className="content">
                  <h5 className="text-dark fw-bold">Web App Maintenance</h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise3} className="fa" alt="" />
                </div>
                <div className="content ">
                  {" "}
                  <h5 className="text-dark fw-bold">
                    Incident Management and Resolution
                  </h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise4} className="fa" alt="" />
                </div>
                <div className="content">
                  {" "}
                  <h5 className="text-dark fw-bold">
                    Performance Optimization
                  </h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterpeise5} className="fa" alt="" />
                </div>
                <div className="content">
                  {" "}
                  <h5 className="text-dark fw-bold">
                    Application Security and Compliance
                  </h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise6} className="fa" alt="" />
                </div>
                <div className="content">
                  <h5 className="text-dark fw-bold">
                    Regular Updates & Upgrades
                  </h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise7} className="fa" alt="" />
                </div>
                <div class="content">
                  {" "}
                  <h5 className="text-dark fw-bold">Application Integration</h5>
                  <p className="text-dark">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon text-center align-self-center fs-1 ">
                  <img src={enterprise8} className="fa" alt="" />
                </div>
                <div className="content">
                  {" "}
                  <h3 className="text-dark fw-bold">
                    Customized Support Plans
                  </h3>
                  <p className="text-dark ">
                    Le Lorem Ipsum est simplement du faux texte employé dans la
                    composition et la mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de l'imprimerie depuis les
                    années 1500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container ">
            <div className="application text-center align-item-center  ">
              <h3 className="">
                Our Advanced Application Support Service - Elevate Your
                Application's
                <br />
                Performance
              </h3>
              <h6 className="mb-5">
                Complex applications which are configured with the latest APIs
                require the advanced solutions to keep the working mechanism of
                the
                <br /> applications in a perfect shape. At Amplework,
              </h6>
              <CardGroup>
                <ApplicationCard
                  bgcolor="rgb(47 126 255)"
                  icon={FaBeer()}
                  title="Application Re-engineering"
                  description="Our developers evaluate existing applications through a series of in-house testing processes in order to evaluate the functionalities of the applications that need to be re-engineered."
                />
                <ApplicationCard
                  bgcolor="rgb(17 95 224)"
                  icon={BsClipboardData()}
                  title="Application Migration & Integration"
                  description="Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services."
                />
                <ApplicationCard
                  bgcolor="rgb(4 80 206)"
                  icon={FaBeer()}
                  title="Application Support"
                  description="It includes a range of activities for ensuring proper functioning and optimization of a web or mobile application. We focus towards continuous monitoring and continuous improvement of functions."
                />
              </CardGroup>
              <Button className="free-quote mt-4">GET A FREE QUOTE</Button>
            </div>
          </div>
        </section>

        {/* section Bug Activity */}

        <section className=" bg-light ">
          <div className=" container  px-4 container">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <h3 className="activity-heading col-sm-9">
                  Amplework's Targeted Activities For Application Maintenance
                  Support Services
                </h3>
                <p className="activity-desc col-sm-10 ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <ul className="p-2 mx-1   ">
                  <li>Amplework offers hire</li>
                  <li>dedicated full-stack</li>
                  <li>developers who posses</li>
                </ul>
              </div>
              <div className="row col-sm-12 col-md-6 ">
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb(240 100 102)"
                    icon={BugActivity1}
                    color="white"
                    title="Bug Busting & Debugging"
                    shadow="10px -6px 0px -2px rgb( 255 225 225) "
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb(244 131 98)"
                    icon={BugActivity2}
                    color="white"
                    title="Quality Checks"
                    shadow="10px -6px 0px -2px rgb( 255 231 225)"
                  />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <BugActivity
                    backgroundColor="rgb(158 109 175)"
                    icon={BugActivity3}
                    color="white"
                    title="Quality Checks"
                    shadow="10px -6px 0px -2px rgb(238 208 248)"
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb(78 189 142)"
                    icon={BugActivity4}
                    color="white"
                    title="Version Enhancements"
                    shadow="10px -6px 0px -2px rgb(210 246 231)"
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb(247 164 87)"
                    icon={BugActivity5}
                    color="white"
                    title="Load Testing"
                    shadow="10px -6px 0px -2px rgb(255 229 204)"
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb( 89 148 245)"
                    icon={BugActivity6}
                    color="white"
                    title="Tech Troubleshooting"
                    shadow="10px -6px 0px -2px rgb( 180 208 255)"
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb(55 189 234)"
                    icon={BugActivity7}
                    color="white"
                    title="Performance Oversight"
                    shadow="10px -6px 0px -2px rgb( 201 242 255)"
                  />
                </div>
                <div className="col-sm-12 col-lg-6">
                  <BugActivity
                    backgroundColor="rgb(85 119 204)"
                    icon={BugActivity8}
                    color="white"
                    title="User-Focused Support"
                    shadow="10px -6px 0px -2px rgb(152 178 245)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section */}

        <section className="container pb-5 text-center">
          <h5
            className=""
            style={{
              color: "rgb(245 164 3)",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              fontSize: "14px",
            }}
          >
            Keep Your Applications Always Shine
          </h5>
          <h3>Types of Apps We Maintain At Amplework Software</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
            <br /> standard dummy text ever since the 1500s,
          </p>
          <div className="maintain p-1 mt-5">
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center fs-1 ">
                <img src={Apps1} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">Web App</h5>
              </div>

              <div className="contents">
                <h5 className="fw-bold text-white ">Web Apps</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center fs-1 ">
                <img src={Apps2} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">Cloud Apps & SaaS</h5>
              </div>
              <div className="contents">
                <h5 className="text-white fw-bold">Cloud Apps & SaaS</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center fs-1 ">
                <img src={Apps3} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">Enterprise App</h5>
              </div>
              <div className="contents ">
                <h5 className=" text-white  fw-bold">Enterprise Apps</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center fs-1 ">
                <img src={Apps4} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">AR/VR Apps</h5>
              </div>
              <div className="contents">
                {" "}
                <h5 className=" text-white  fw-bold">AR/VR Apps</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center fs-1 ">
                <img src={Apps5} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">Database Apps</h5>
              </div>
              <div className="contents">
                {" "}
                <h5 className=" text-white  fw-bold">Database Apps</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center fs-1 ">
                <img src={Apps6} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">AI/ML Apps</h5>
              </div>
              <div className="contents">
                <h5 className=" text-white  fw-bold">AI/ML Apps</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center ">
                <img src={Apps7} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">Gaming Apps</h5>
              </div>
              <div class="contents">
                <h5 className=" text-white  fw-bold">Gaming Apps</h5>
                <p className=" ">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div className="maintain-box">
              <div className="maintain-icon text-center align-self-center ">
                <img src={Apps8} className="fa-icon" alt="" />
                <h5 className="mt-4 fw-bold">Hybrid Apps</h5>
              </div>
              <div className="contents">
                <h3 className="text-white fw-bold">Hybrid Apps</h3>
                <p className="">
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -----------------section-------------- */}

        <section style={{ backgroundColor: "rgb(250 250 250)" }}>
          <div className=" app-shap text-center container">
            <h3 className="shap-heading">
              Let's get your app in shape - contact us now and let the
              <br /> maintenance magic begin
            </h3>
            <p className="shap-para mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s,
            </p>

            <div className="row justify-content-center ">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Shapcard
                  image={Target}
                  title="Fixed"
                  para="Slow and glitch software updates with no-real benefits for users?"
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                  footer="Amplework’s Solution"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Shapcard
                  image={Target}
                  title="issue"
                  para="Slow and glitch software updates with no-real benefits for users?"
                  footer="Amplework’s Solution"
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Shapcard
                  image={Target}
                  title="issue"
                  para="Slow and glitch software updates with no-real benefits for users?"
                  footer="Amplework’s Solution"
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                />
              </div>
            </div>
          </div>
        </section>
        {/* ------------------ */}
        <section style={{ backgroundColor: "rgb(245 245 245)" }}>
          <div className="container text-center  ">
            <h3>
              Fascinating Benefits of Application Maintenance and Support
              Services
            </h3>
            <p className="facinatinf-para">
              Time to empower your mind with the fascinating benefits of
              application maintenance and support services. So, get
              <br /> ready to empower your mobile application growth with these
              foremost benefits.
            </p>

            <div className="row ">
              <div className=" col-sm-12 col-lg-6">
                <FacinatingCard
                  img={facinating1}
                  title="Longer Life span"
                  para="Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner."
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                {" "}
                <FacinatingCard
                  img={facinating2}
                  title="Bugs Removal"
                  para="Bug removal is an essential part of software maintenance, as it applications are functioning in a well-defined manner."
                />
              </div>

              <div className="col-sm-12 col-lg-6">
                <FacinatingCard
                  img={facinating3}
                  title="Upwards App Performance"
                  para="When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth."
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <FacinatingCard
                  img={facinating4}
                  title="Security Management"
                  para="Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management."
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <FacinatingCard
                  img={facinating5}
                  title="Data Management"
                  para="User’s data is the most precious asset for your business and consistent maintenance  management functions."
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                {" "}
                <FacinatingCard
                  img={facinating1}
                  title="Reduced Tech Debts"
                  para="By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues."
                />
              </div>
            </div>
          </div>
        </section>
        {/* ------------------ */}
        <section className="  ">
          <div className="container">
            <div className="diverse row">
              <div className="col-sm-12 col-lg-6 diverse-first ">
                <h3 className="diverse-heading col-sm-9">
                  Diverse Levels Of Support Offered By Our Prowess Experts
                </h3>
                <p className="diverse-para ">
                  We offer support for application maintenance at a diverse
                  level of operations to help our clients in accomplishing their
                  specific goals. If you are confused that which level of
                  support service will be beneficial for you then you can
                  connect with us to get valuable insights about operations.
                </p>
              </div>
              <div className="col-sm-12 col-lg-6 d-lg-flex gap-3">
                <div className="first">
                  <Card
                    className="mt-3 card-img border-3 text-light text-start "
                    style={{
                      backgroundImage: `url(${DiverseCardBg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Card.Body>
                      <span style={{ fontSize: "14px" }}>Level 1</span>
                      <br />
                      <span className="fw-bold" style={{ fontSize: "12px" }}>
                        Covers Basic App Services
                      </span>
                      <br />
                      <ul className="p-1 mx-2 lh-lg">
                        <li>Consists of technical information. </li>
                        <li>Basic system maintenance.</li>
                        <li>Basic bug fixes.</li>
                        <li>Troubleshooting</li>
                        <li>Basic security maintenance.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                  <Card
                    className="mt-3 card-img2  border-3 text-light text-start"
                    style={{
                      backgroundImage: `url(${DiverseCardBg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Card.Body>
                      <span style={{ fontSize: "14px" }}>Level 2</span>
                      <br />
                      <span className="fw-bold" style={{ fontSize: "12px" }}>
                        Comprehensive Maintenance
                      </span>
                      <br />
                      <ul className="p-1 mx-2 lh-lg">
                        <li> Configuration Management. </li>
                        <li>Basic Documentation. </li>
                        <li>Basic Testing. </li>
                        <li>Problem Management. </li>
                        <li>Advance Bug Fixes.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
                <div className="second mt-4">
                  <Card
                    className="mt-3 card-img1 border-3 text-light text-start"
                    style={{
                      backgroundImage: `url(${DiverseCardBg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Card.Body>
                      <span style={{ fontSize: "14px" }}>Level 3</span>
                      <br />
                      <span className="fw-bold" style={{ fontSize: "12px" }}>
                        Advanced Support Services
                      </span>
                      <br />
                      <ul className="p-1 mx-2 lh-lg">
                        <li>Performance Tuning.</li>
                        <li>Advanced Testing.</li>
                        <li> Advanced Documentation.</li>
                        <li>Release Management.</li>
                        <li> Advanced Bug Fixes.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                  <Card
                    className="mt-3 card-img3 border-3 text-light text-start"
                    style={{
                      backgroundImage: `url(${DiverseCardBg})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <Card.Body>
                      <span style={{ fontSize: "14px" }}>Level 4</span>
                      <br />
                      <span className="fw-bold" style={{ fontSize: "12px" }}>
                        Specialized Support Services
                      </span>
                      <br />
                      <ul className="p-1 mx-2 lh-lg">
                        <li> Root Cause Analysis. </li>
                        <li>Database Administration. </li>
                        <li>Architecture Design. </li>
                        <li>Secure Operations. </li>
                        <li>Personalized Solutions.</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" bussiness">
          <div className="  text-center container">
            <h3 className="bussiness-heading">
              Our Numbers Speaks For Our Business Operations
            </h3>
            <p className="bussiness-para">
              We don’t compromise on the quality aspects thus it makes us the
              leading application development maintenance and
              <br /> support service provider. We resolve even the most severe
              incidents in less than 8 hours.
            </p>
            <div className="d-lg-flex justify-content-between">
              <BussinessTimeCard
                time="10-15 Mins"
                para="Minimum incident Response Time"
              />{" "}
              <BussinessTimeCard
                time="2-3 Hours"
                para="Minimum Incident Solution Time"
              />{" "}
              <BussinessTimeCard
                time="10-15 Mins"
                para="Minimum incident Response Time"
              />{" "}
              <BussinessTimeCard
                time="10-15 Mins"
                para="Minimum incident Response Time"
              />
            </div>
          </div>
        </section>

        {/* ----------- */}

        <section style={{ backgroundColor: "rgb(248 249 250)" }}>
          <div className=" container text-center">
            <h3 className="bussiness-heading">
              Are you searching for a dedicated technology partner, not
              <br /> just a service provider?
            </h3>
            <div className="row columnreverse">
              <div className="col-sm-12 col-lg-6 text-start align-self-center">
                <p>
                  Our clients generated more than $50 million in revenues by
                  creating seamless mobile applications that run without any
                  bugs or glitches. Thus, we continue to upgrade our services to
                  support clients in generating higher revenue for operations.
                </p>
                <p>
                  <img src={HourlyPlan} alt="" width={"10px"} />
                  &nbsp;&nbsp; Personalized business services.
                </p>
                <p>
                  <img src={HourlyPlan} alt="" width={"10px"} />
                  &nbsp;&nbsp; Advanced practices for DevOps.
                </p>
                <p>
                  <img src={HourlyPlan} alt="" width={"10px"} />
                  &nbsp;&nbsp; Proficiency in AI/ML/Blockchain Solutions.
                </p>
                <p>
                  <img src={HourlyPlan} alt="" width={"10px"} />
                  &nbsp;&nbsp; Exclusive support for digital transformation.
                </p>
                <p>
                  <img src={HourlyPlan} alt="" width={"10px"} />
                  &nbsp;&nbsp; Large scale & complex app building.
                </p>
              </div>
              <div className="col-sm-12 col-lg-6">
                <img src={Bussiness} width={"90%"} />
              </div>
            </div>
          </div>
        </section>

        {/* Question Answering section */}

        <section className="">
          <div
            className="question text-center p-5"
            style={{
              backgroundImage: `url(${QUestionBG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h4 className="fw-bold">Frequently Asked Questions</h4>
            <Container className="pb-4 py-0">
              <Accordion>
                <div className="row">
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="0" className="question-box">
                      <Accordion.Header className="fs-1">
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicatsed developers having several years
                        of expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="1" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="2" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="3" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="4" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="5" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="6" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="col-lg-6 p-2 text-start">
                    <Accordion.Item eventKey="7" className="question-box">
                      <Accordion.Header>
                        <h4>How skilled are your dedicated developers?</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </div>
              </Accordion>
            </Container>
          </div>
        </section>

        {/* ----------------------- */}

        <section className="">
          <div className="developer container ">
            <Card
              className=" text-white border-0"
              style={{
                backgroundImage: `url(${DeveloperBG})`,
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <div className="d-flex flex-wrap justify-content-between p-4 align-self-center">
                  <div className="first col-sm-8">
                    <h2 className="dedicated-developer">
                      {" "}
                      Dedicated Full-stack developer?
                    </h2>
                    <Card.Text>
                      Let's Discuss Your Project how we will transform your idea
                      into an amazing digital product?
                    </Card.Text>
                  </div>
                  <Button
                    className="rounded-pill mt-2 bg-primary border-0 text-light fw-bold"
                    style={{ height: "50px" }}
                  >
                    {" "}
                    Get 2 Week Free Trial &nbsp;&nbsp;
                    <i class="bi bi-arrow-up-right"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <div className="content text-center my-5">
              <h4 className="fw-bold">Trusted and Skilled Developers</h4>
              <p>
                Our developers are ready to join your team and build amazing
                mobile & web apps.
              </p>

              <div className="row">
                <div className="d-flex flex-wrap justify-content-between">
                  <Cards
                    src="https://www.amplework.com/wp-content/uploads/2019/12/sahib-khan.jpg"
                    name="Sahib Khan"
                    position="Full Stack Developer"
                  />
                  <Cards
                    src="https://www.amplework.com/wp-content/uploads/2019/12/6.png"
                    name="Prakash Saini"
                    position="CTO"
                  />
                  <Cards
                    src="https://www.amplework.com/wp-content/uploads/2019/12/8.png"
                    name="Santosh Saini"
                    position="CEO"
                  />
                  <Cards
                    src="https://www.amplework.com/wp-content/uploads/2019/12/rajkumar-1-1200x1180.jpg"
                    name="Rajkumar Jangid"
                    position="Software Develooper"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light text-center">
          <div className="container ">
            <ClientAppreciation />
          </div>
        </section>
        <section>
          <h3 className="text-center ">Portfolio of Our Accomplishments</h3>
          <Carousel>
            <Carousel.Item>
              <div
                className="portfollio text-center text-light"
                style={{ backgroundImage: `url(${SwetcoinBg})` }}
              >
                <div className="container">
                  <div className="swercoin row text-start justify-content-center">
                    <div className="col-sm-12 col-lg-6 align-self-center">
                      <h3 className="fw-bold">Sweatcoin</h3>
                      <p className="portfollioPara mt-3">
                        A new breed of step counter and activity tracker that
                        converts your steps into a currency you can spend on
                        gadgets, sports and fitness kit, services and
                        experiences. You can exchange them with friends and
                        family.
                      </p>
                      <p className="fs-6 fw-bold mt-4">
                        Available On &nbsp;&nbsp; {<FaGooglePlay />}&nbsp;&nbsp;{" "}
                        {<SiAppstore />}
                      </p>
                      <div className="uses d-flex ">
                        <div className="rightborder firstborder text-start">
                          <p>50M+</p>
                          <span>Downloads</span>
                        </div>
                        <div className="rightborder firstborder">
                          <p>4.6/5</p>
                          <span>Rating</span>
                        </div>
                        <div className="firstborder ">
                          <p>$20M</p>
                          <span>Funding</span>
                        </div>
                      </div>
                      <div className="reward fs-6 mt-5">
                        <p>Rewards | Wallet | Tracker | eCommerce | Fintech</p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6  p-4 align-self-center">
                      <img
                        class="sweatCoin-img entered lazyloaded"
                        src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                        width={"100%"}
                        alt="sweatCoin_screen"
                        data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                        data-ll-status="loaded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="portfollio text-center text-light"
                style={{ backgroundImage: `url(${SwetcoinBg})` }}
              >
                <div className="container">
                  <div className="swercoin row text-start justify-content-center">
                    <div className="col-sm-12 col-lg-6 align-self-center">
                      <h3 className="fw-bold">Sweatcoin</h3>
                      <p className="portfollioPara mt-3">
                        A new breed of step counter and activity tracker that
                        converts your steps into a currency you can spend on
                        gadgets, sports and fitness kit, services and
                        experiences. You can exchange them with friends and
                        family.
                      </p>
                      <p className="fs-6 fw-bold mt-4">
                        Available On &nbsp;&nbsp; {<FaGooglePlay />}&nbsp;&nbsp;{" "}
                        {<SiAppstore />}
                      </p>
                      <div className="uses d-flex ">
                        <div className="rightborder firstborder text-start">
                          <p>50M+</p>
                          <span>Downloads</span>
                        </div>
                        <div className="rightborder firstborder">
                          <p>4.6/5</p>
                          <span>Rating</span>
                        </div>
                        <div className="firstborder ">
                          <p>$20M</p>
                          <span>Funding</span>
                        </div>
                      </div>
                      <div className="reward fs-6 mt-5">
                        <p>Rewards | Wallet | Tracker | eCommerce | Fintech</p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6  p-4 align-self-center">
                      <img
                        class="sweatCoin-img entered lazyloaded"
                        src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                        width={"100%"}
                        alt="sweatCoin_screen"
                        data-lazy-src="https://www.amplework.com/wp-content/uploads/2023/02/sweat_coin-screen.png"
                        data-ll-status="loaded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
        <section className=" bg-white">
          <div className="container">
            <h3 className="text-center ">
              Digitalize Your Product Idea - Learn More About MVP
            </h3>
            <div className=" py-5 row justify-content-between">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <img src={digitalApp} width={"100%"} />
                <h5>
                  Top 10 AI Content Detector Tools &amp; Extension Free in...{" "}
                </h5>
              </div>

              <div className=" col-sm-12 col-md-6 col-lg-4">
                <img src={digitalApp2} alt="" width={"100%"} />
                <h5>How to Develop an E-Learning Mobile Application? </h5>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-4">
                <img src={digitalApp3} alt="" width={"100%"} />
                <h5>
                  MVP Software Development: A Quickstart Guide to Success i...{" "}
                </h5>
              </div>
            </div>
            <div className="text-center">
              <Button className="rounded-pill text-center">
                Read all post
              </Button>
            </div>
          </div>
        </section>
        <section
          style={{ backgroundColor: "rgb(243 246 255)" }}
          className="p-0"
        >
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-sm-12 col-lg-6   p-3 align-self-center">
                <h3 className="container fw-bold" style={{ fontSize: "19px" }}>
                  Prepare yourself for a quick Response
                </h3>
                <Form className="container pt-5">
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" className="">
                      <InputGroup className="mb-3">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="text-warning  inputBorder"
                        >
                          {<HiOutlineUser />}
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Name*"
                          className="inputBorder"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <InputGroup className="mb-3">
                        <InputGroup.Text
                          id="basic-addon1"
                          className=" text-warning inputBorder "
                        >
                          {<HiOutlineMail />}
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          placeholder="Email Address*"
                          className="inputBorder"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <InputGroup className="mb-3 ">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="text-warning inputBorder "
                        >
                          {<IoMdCall />}
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Mobile Number*"
                          className="inputBorder"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <InputGroup className="mb-3 ">
                        <InputGroup.Text className="text-warning inputBorder">
                          {<RiApps2Line />}
                        </InputGroup.Text>
                        <Form.Select
                          aria-label="Floating label select example"
                          className="inputBorder"
                        >
                          <option>Intrested In*</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <InputGroup className="mb-3 ">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="text-warning inputBorder"
                        >
                          {<BiMessageAltDetail />}
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Skype Id/WhatsApp No.*"
                          className="inputBorder"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <InputGroup className="mb-3 ">
                        <InputGroup.Text className="text-warning inputBorder ">
                          {<BiDollar />}
                        </InputGroup.Text>
                        <Form.Select
                          aria-label="Floating label select example"
                          className="inputBorder"
                        >
                          <option>Select Your Budget*</option>
                          <option value="1">10$</option>
                          <option value="2">50$</option>
                          <option value="3">30$</option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      className="mb-0 "
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <InputGroup className="mb-3 ">
                        <InputGroup.Text
                          id="basic-addon1"
                          className="text-warning border-0"
                        >
                          {<BiMessageAltDetail />}
                        </InputGroup.Text>
                        &nbsp;&nbsp; MESSAGE *
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                      <Form.Control as="textarea" rows={2} className="" />
                    </Form.Group>

                    <div className="container mt-3">
                      <div className="addFile d-md-flex mt-2 justify-content-between">
                        <div className="text-primary align-self-center col-sm-3">
                          <span> {<IoMdAddCircle />}</span>
                          <span className="px-2 fw-bold">ADD FILE</span>
                        </div>
                        <div className="align-self-center py-2  col-md-9 text-md-end">
                          <input type="checkbox" className="" />
                          <span className="px-2">
                            Yes, Send me a mutual NDA
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row mt-3">
                        <div className="first d-flex bg-white col-md-7 justify-content-between align-self-center">
                          <div className="align-self-center col-lg-8 ">
                            <input type="checkbox" className="" />
                            &nbsp;&nbsp;
                            <span className="fs-5">I`m not a robot</span>
                          </div>
                          <div className="col-lg-2">
                            <img src={captcha} width={"50px"} />
                          </div>
                        </div>
                        <div className="col-md-5 align-self-center text-lg-end text-md-end ">
                          <Button
                            type="submit"
                            className=" border-0 p-2 mt-2"
                            style={{ backgroundColor: "rgb(245 164 3)" }}
                          >
                            Send Your Inquiry
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Form>
              </div>
              <div
                className="col-sm-12 col-lg-5  p-3 text-white "
                style={{ backgroundColor: "rgb(6 19 100)" }}
              >
                <h3 className="QuickStart">Quick Stats</h3>
                <div className="d-flex">
                  <div className="col-lg-7 col-7">
                    <div className="d-flex align-items-baseline">
                      <h1 className="text-warning fw-bold projectHeading">
                        170+
                      </h1>
                      <div className="img">
                        <span className="text-light fs-1">{<FiLayers />}</span>
                      </div>
                    </div>
                    <p className="projectPara">Successful Projects</p>
                  </div>
                  <div className="col-sm-5 ">
                    <div className="d-flex align-items-baseline">
                      <div className="d-flex align-items-baseline">
                        <h1 className="text-warning fw-bold projectHeading">
                          92%
                        </h1>
                        <div className="img">
                          <span className=" text-light fs-1">
                            {<FaUsers />}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="projectPara">Client retention</p>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="col-lg-7 col-7">
                    <div className="d-flex align-items-baseline">
                      <h1 className="text-warning fw-bold projectHeading">
                        $200M+
                      </h1>
                      <div className="img">
                        <span className="fs-1 text-light ">{<VscGraph />}</span>
                      </div>
                    </div>
                    <p className="projectPara">Our clients overall revenue</p>
                  </div>
                  <div className="col-sm-5">
                    <div className="d-flex align-items-baseline">
                      <div className="d-flex align-items-baseline">
                        <h1 className="text-warning fw-bold projectHeading">
                          1M+
                        </h1>
                        <div className="img">
                          <span className="fs-1 text-light ">
                            {<SiTimescale />}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="projectPara">Work hours</p>
                  </div>
                </div>

                <h3 className="topExecutive">Top Executives</h3>
                <Table responsive="lg" className="table table-borderless">
                  <tbody className="text-center text-white">
                    <tr className="justify-content-between">
                      <td className=" ">
                        <img
                          src={SantoshSir}
                          className="foundersImg "
                          alt=""
                          width={"105px"}
                        />
                        <p>Santosh Singh</p>
                        <p>CEO</p>
                      </td>
                      <td className=" ">
                        <img
                          src={PrakashSir}
                          className="foundersImg "
                          alt=""
                          width={"105px"}
                        />
                        <p>Prakash Saini</p>
                        <p>CEO</p>
                      </td>
                      <td className=" ">
                        <img
                          src={NovaMam}
                          className="foundersImg "
                          alt=""
                          width={"105px"}
                        />
                        <p>Supernova C.</p>
                        <p>CXO</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PageContent;

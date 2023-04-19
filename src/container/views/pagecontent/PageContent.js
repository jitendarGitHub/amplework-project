import "../pagecontent/pagecontent.css";
import { BiBug } from "@react-icons/all-files/bi/BiBug";
import { MdHighQuality } from "@react-icons/all-files/md/MdHighQuality";
import { MdSettingsRemote } from "@react-icons/all-files/md/MdSettingsRemote.esm";
import { VscVersions } from "@react-icons/all-files/vsc/VscVersions";
import { BsFillAlarmFill } from "@react-icons/all-files/bs/BsFillAlarmFill";
import { GrDocumentPerformance } from "@react-icons/all-files/gr/GrDocumentPerformance";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport.esm";
import { Accordion, Button, Card, CardGroup, Container } from "react-bootstrap";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { BsClipboardData } from "@react-icons/all-files/bs/BsClipboardData";
import { GiArcheryTarget } from "@react-icons/all-files/gi/GiArcheryTarget";
import { FiTarget } from "@react-icons/all-files/fi/FiTarget";

import facinating1 from "../../../assets/facinating1.png";
import facinating2 from "../../../assets/facinating2.png";
import facinating3 from "../../../assets/facinating3.png";
import facinating4 from "../../../assets/facinating4.png";
import facinating5 from "../../../assets/facinating5.png";
import facinating6 from "../../../assets/facinating6.png";

import BugActivity from "../../../components/BugActivity";
import ApplicationCard from "../../../components/ApplicationCard";
import Shapcard from "../../../components/ShapCard";
import FacinatingCard from "../../../components/FacinatingCard";

import bgimg from "../../../assets/Group 13516.png";
import Business from "../../../components/BussinessTimeCard";
import Bussiness from "../../../assets/bussiness.png";

import bgImage from "../../../assets/questionBG.png";

const PageContent = () => {
  return (
    <>
      <div className="page-content">
        <section
          className=" flex-wrap d-flex container"
          style={{ backgroundColor: "rgb(250 250 250)" }}
        >
          <div className="col-sm-6 mt-5">
            <h3 className="activity-heading col-sm-9">
              Amplework's Targeted Activities For Application Maintenance
              Support Services
            </h3>
            <p className="activity-desc col-sm-10 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <ul>
              <li>Amplework offers hire</li>
              <li>dedicated full-stack</li>
              <li>developers who posses</li>
            </ul>
          </div>
          <div className="col-sm-6 ">
            <div className="d-flex justify-content-around">
              <BugActivity
                backgroundColor="rgb(240 100 102)"
                icon={<BiBug />}
                color="white"
                title="Bug Busting & Debiugging"
                shadow="10px -6px 0px -2px rgb(218, 178, 179) "
              />
              <BugActivity
                backgroundColor="rgb(244 131 98)"
                icon={<MdHighQuality />}
                color="white"
                title="Quality checks"
                shadow="10px -6px 0px -2px rgb(227, 216, 212) "
              />
            </div>
            <div className="d-flex justify-content-around">
              <BugActivity
                backgroundColor="rgb(158 109 175)"
                icon={<MdSettingsRemote />}
                color="white"
                title="Remote Product Maintenance"
                shadow="10px -6px 0px -2px rgb(205, 185, 211)"
              />
              <BugActivity
                backgroundColor="rgb(78 189 142)"
                icon={<VscVersions />}
                color="white"
                title="Version Enhancement"
                shadow="10px -6px 0px -2px rgb(173, 207, 193)"
              />
            </div>
            <div className="d-flex justify-content-around">
              <BugActivity
                backgroundColor="rgb(247 164 87)"
                icon={<BsFillAlarmFill />}
                color="white"
                title="Load Testing"
                shadow="10px -6px 0px -2px rgb(236, 192, 152)"
              />
              <BugActivity
                backgroundColor="rgb(89 148 245)"
                icon={<BiBug />}
                color="white"
                title="Tech TroubleShooting"
                shadow="10px -6px 0px -2px rgb(157, 178, 212)"
              />
            </div>
            <div className="d-flex justify-content-around">
              <BugActivity
                backgroundColor="rgb(55 189 234)"
                icon={<GrDocumentPerformance />}
                color="white"
                title="Performance Oversight"
                shadow="10px -6px 0px -2px rgb(178, 216, 229)"
              />
              <BugActivity
                backgroundColor="rgb(152 178 245)"
                icon={<BiSupport />}
                color="white"
                title="User Focused support"
                shadow="10px -6px 0px -2px rgb(204, 208, 218)"
              />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="application text-center align-item-center  bg-white">
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
        </section>

        <section>
          <div className="bg-white app-shap text-center">
            <h3 className="shap-heading">
              Let's get your app in shape - contact us now and let the
              <br /> maintenance magic begin
            </h3>
            <p className="shap-para mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s,
            </p>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <Shapcard
                    image={GiArcheryTarget()}
                    title="Fixed"
                    para="Our in-house support matrix and best-in-industry prices will
                resultant in cost reduction by 30% to 40%."
                    bgcolor="rgb(6 21 114)"
                    color="rgb(245 164 3)"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <Shapcard
                    image={FiTarget()}
                    title="issue"
                    para="Slow and glitch software updates with no-real benefits for users?"
                    footer="Amplework’s Solution"
                    bgcolor="rgb(6 21 114)"
                    color="rgb(245 164 3)"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                  <Shapcard
                    image={FiTarget()}
                    title="issue"
                    para="Slow and glitch software updates with no-real benefits for users?"
                    footer="Amplework’s Solution"
                    bgcolor="rgb(6 21 114)"
                    color="rgb(245 164 3)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container text-center bg-light ">
          <h3>
            Fascinating Benefits of Application Maintenance and Support Services
          </h3>
          <p className="facinatinf-para">
            Time to empower your mind with the fascinating benefits of
            application maintenance and support services. So, get
            <br /> ready to empower your mobile application growth with these
            foremost benefits.
          </p>

          <div className="d-lg-flex d-md-flex justify-content-around ">
            <div className=" col-sm-5  ">
              <FacinatingCard
                img={facinating1}
                title="Longer Life span"
                para="Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner."
              />
            </div>
            <div className="col-sm-5">
              {" "}
              <FacinatingCard
                img={facinating2}
                title="Bugs Removal"
                para="Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning in a well-defined manner."
              />
            </div>
          </div>
          <div className="d-lg-flex d-md-flex d-sm-block justify-content-around">
            <div className="col-sm-5">
              <FacinatingCard
                img={facinating3}
                title="Upwards App Performance"
                para="When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth."
              />
            </div>
            <div className="col-sm-5">
              <FacinatingCard
                img={facinating4}
                title="Security Management"
                para="Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management."
              />
            </div>
          </div>
          <div className="d-lg-flex d-md-flex justify-content-around">
            <div className="col-sm-5">
              <FacinatingCard
                img={facinating5}
                title="Data Management"
                para="User’s data is the most precious asset for your business and consistent maintenance empowers data management functions."
              />
            </div>
            <div className="col-sm-5">
              {" "}
              <FacinatingCard
                img={facinating6}
                title="Reduced Tech Debts"
                para="By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues."
              />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="diverse d-flex flex-wrap  justify-content-around">
            <div className="col-sm-6 diverse-first">
              <h3 className="diverse-heading col-sm-9">
                Diverse Levels Of Support Offered By Our Prowess Experts
              </h3>
              <p className="diverse-para col-sm-8">
                We offer support for application maintenance at a diverse level
                of operations to help our clients in accomplishing their
                specific goals. If you are confused that which level of support
                service will be beneficial for you then you can connect with us
                to get valuable insights about operations.
              </p>
            </div>
            <div className="col-sm-6   d-flex  gap-3">
              <div className="first">
                <Card className="mt-3 card-img border-3 text-light text-start ">
                  <Card.Body>
                    <span style={{ fontSize: "14px" }}>Level 1</span>
                    <br />
                    <span style={{ fontSize: "14px" }}>
                      Covers Basic App Services
                    </span>
                    <br />
                    <li>Consists of technical information. </li>
                    <li>Basic system maintenance.</li>
                    <li>Basic bug fixes.</li>
                    <li>Troubleshooting</li>
                    <li>Basic security maintenance.</li>
                  </Card.Body>
                </Card>
                <Card className="mt-3 card-img2  border-3 text-light text-start">
                  <Card.Body>
                    <span style={{ fontSize: "14px" }}>Level 1</span>
                    <br />
                    <span style={{ fontSize: "14px" }}>
                      Covers Basic App Services
                    </span>
                    <br />
                    <li>Consists of technical information. </li>
                    <li>Basic system maintenance.</li>
                    <li>Basic bug fixes.</li>
                    <li>Troubleshooting</li>
                    <li>Basic security maintenance.</li>
                  </Card.Body>
                </Card>
              </div>
              <div className="second mt-4">
                <Card className="mt-3 card-img1 border-3 text-light text-start">
                  <Card.Body>
                    <span style={{ fontSize: "14px" }}>Level 1</span>
                    <br />
                    <span style={{ fontSize: "14px" }}>
                      Covers Basic App Services
                    </span>
                    <br />
                    <li>Consists of technical information. </li>
                    <li>Basic system maintenance.</li>
                    <li>Basic bug fixes.</li>
                    <li>Troubleshooting</li>
                    <li>Basic security maintenance.</li>
                  </Card.Body>
                </Card>
                <Card className="mt-3 card-img3 border-3 text-light text-start">
                  <Card.Body>
                    <span style={{ fontSize: "14px" }}>Level 1</span>
                    <br />
                    <span style={{ fontSize: "14px" }}>
                      Covers Basic App Services
                    </span>
                    <br />
                    <li>Consists of technical information. </li>
                    <li>Basic system maintenance.</li>
                    <li>Basic bug fixes.</li>
                    <li>Troubleshooting</li>
                    <li>Basic security maintenance.</li>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="bussiness text-center">
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
              <Business
                time="10-15 Mins"
                para="Minimum incident Response Time"
              />{" "}
              <Business
                time="2-3 Hours"
                para="Minimum Incident Solution Time"
              />{" "}
              <Business
                time="10-15 Mins"
                para="Minimum incident Response Time"
              />{" "}
              <Business
                time="10-15 Mins"
                para="Minimum incident Response Time"
              />
            </div>
            <div className="mt-5 py-5 container">
              <h3 className="bussiness-heading">
                Are you searching for a dedicated technology partner, not
                <br /> just a service provider?
              </h3>
              <div className="d-lg-flex">
                <div className="col-sm-6 text-start align-self-center">
                  <p>
                    Our clients generated more than $50 million in revenues by
                    creating seamless mobile applications that run without any
                    bugs or glitches. Thus, we continue to upgrade our services
                    to support clients in generating higher revenue for
                    operations.
                  </p>
                  <p>
                    <i
                      className="fa fa-check-circle-o mx-3"
                      style={{ color: "blue", opacity: "0.4" }}
                    />
                    Personalized business services.
                  </p>
                  <p>
                    <i
                      className="fa fa-check-circle-o mx-3"
                      style={{ color: "blue", opacity: "0.4" }}
                    />
                    Advanced practices for DevOps.
                  </p>
                  <p>
                    <i
                      className="fa fa-check-circle-o mx-3"
                      style={{ color: "blue", opacity: "0.4" }}
                    />
                    Proficiency in AI/ML/Blockchain Solutions.
                  </p>
                  <p>
                    <i
                      className="fa fa-check-circle-o mx-3"
                      style={{ color: "blue", opacity: "0.4" }}
                    />
                    Exclusive support for digital transformation.
                  </p>
                  <p>
                    <i
                      className="fa fa-check-circle-o mx-3"
                      style={{ color: "blue", opacity: "0.4" }}
                    />
                    Large scale & complex app building.
                  </p>
                </div>
                <div className="col-sm-6">
                  <img src={Bussiness} width={"90%"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div
            className="question text-center bg-warning pb-1"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h3 className="fw-bold">Frequently Asked Questions</h3>
            <Container className=" pb-4 py-5">
              <div className="d-lg-flex d-md-flex  gap-2  ">
                <div className=" col-sm-6 mt-3">
                  <Accordion
                    defaultActiveKey="0"
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-sm-6 mt-3">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="d-lg-flex d-md-flex  gap-2  ">
                <div className=" col-sm-6 mt-3">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                    defaultActiveKey="0"
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-sm-6 mt-3">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="d-lg-flex d-md-flex  gap-2">
                <div className=" col-sm-6 mt-3 ">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                    defaultActiveKey="0"
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-sm-6 mt-3">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="d-lg-flex d-md-flex  gap-2">
                <div className=" col-sm-6 mt-3 ">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                    defaultActiveKey="0"
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="col-sm-6 mt-3">
                  <Accordion
                    style={{
                      boxShadow: "0px 2px 20px 2px rgb(220, 221, 223)",
                    }}
                  >
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How skilled are your dedicated developers?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Amplework, we feature a team of highly skilled and
                        experienced dedicated developers having several years of
                        expertise in the field of mobile app development
                        solutions.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section></section>
      </div>
    </>
  );
};
export default PageContent;

import { Container } from "react-bootstrap";
import { BiBug } from "@react-icons/all-files/bi/BiBug";
import { BiSupport } from "@react-icons/all-files/bi/BiSupport.esm";
import { MdSettingsRemote } from "@react-icons/all-files/md/MdSettingsRemote.esm";
import { VscVersions } from "@react-icons/all-files/vsc/VscVersions";
import { BsFillAlarmFill } from "@react-icons/all-files/bs/BsFillAlarmFill";
import { GrDocumentPerformance } from "@react-icons/all-files/gr/GrDocumentPerformance";
import { MdHighQuality } from "@react-icons/all-files/md/MdHighQuality";
import "../activity/activity.css";
import Icon from "react-icons-kit";
import BugActivity from "./BugActivity";

const Activity = () => {
  return (
    <>
      <div
        className=" flex-wrap d-flex py-5 mt-3"
        style={{ backgroundColor: "rgb(250 250 250)" }}
      >
        <Container className="flex-wrap d-flex">
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
        </Container>
      </div>
    </>
  );
};
export default Activity;

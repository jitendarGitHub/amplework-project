import {
  BugActivity1,
  BugActivity2,
  BugActivity3,
  BugActivity4,
  BugActivity5,
  BugActivity6,
  BugActivity7,
  BugActivity8,
} from "../../../../assets";
import { BugActivity } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";

const Activity = () => {
  return (
    <section className=" bg-light ">
      <div className=" container  px-4 container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <PrimaryText
              heading="Amplework's Targeted Activities For Application Maintenance Support Services"
              className="activity-heading col-sm-9"
            />
            <SecondaryText
              para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              className="activity-desc col-sm-10"
            />
            <ul className="p-2 mx-1">
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
  );
};
export default Activity;

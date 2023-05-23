import { BugActivity } from "../../../../components";
import { List, PrimaryText, SecondaryText } from "../../../../components/text";
import { BugActivityMock } from "../../../../mockup/ActivityMock";

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
              <List list="Amplework offers hire" />
              <List list="dedicated full-stack" />
              <List list="developers who posses" />
            </ul>
          </div>
          <div className="row col-sm-12 col-md-6 ">
            {BugActivityMock.map((items) => {
              return (
                <div className=" col-lg-6">
                  <BugActivity
                    backgroundColor={items.backgroundColor}
                    icon={items.icon}
                    color="white"
                    title={items.title}
                    shadow={items.shadow}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;

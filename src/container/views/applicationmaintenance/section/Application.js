import { Button, CardGroup } from "react-bootstrap";
import { ApplicationCard } from "../../../../components";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { BsClipboardData } from "@react-icons/all-files/bs/BsClipboardData";

const Application = () => {
  return (
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
            require the advanced solutions to keep the working mechanism of the
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
  );
};
export default Application;

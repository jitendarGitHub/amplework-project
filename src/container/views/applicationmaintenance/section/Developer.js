import { enterprise1 } from "../../../../assets";
import { Cards, DefaultCard } from "../../../../components";

const Developer = () => {
  return (
    <section className="bg-light">
      <div className="developer container ">
        <div className="content text-center my-5">
          <h4 className="fw-bold">Trusted and Skilled Developers</h4>
          <p>
            Our developers are ready to join your team and build amazing mobile
            & web apps.
          </p>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-between">
              <DefaultCard
                cardclass="mt-4"
                imgdivclass=""
                imgclass="testerimg"
                cardimage="https://www.amplework.com/wp-content/uploads/2019/12/6.png"
                headingclass="text-start"
                heading="Prakash Sir"
                paraclass="developer-position"
                para="CTO"
              />
              <DefaultCard
                cardclass="mt-4"
                imgdivclass=""
                imgclass="testerimg"
                cardimage="https://www.amplework.com/wp-content/uploads/2019/12/8.png"
                headingclass="text-start"
                heading="Santosh Sir"
                paraclass="developer-position"
                para="CEO"
              />
              <DefaultCard
                cardclass="mt-4"
                imgdivclass=""
                imgclass="testerimg"
                cardimage="https://www.amplework.com/wp-content/uploads/2019/12/sahib-khan.jpg"
                headingclass="text-start"
                heading="Sahib Khan"
                paraclass="developer-position"
                para="Full Stack Developer"
              />
              <DefaultCard
                cardclass="mt-4"
                imgdivclass=""
                imgclass="testerimg"
                cardimage="https://www.amplework.com/wp-content/uploads/2019/12/rajkumar-1-1200x1180.jpg"
                headingclass="text-start"
                heading="Rajkumar jangid"
                paraclass="developer-position"
                para="Software developer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Developer;

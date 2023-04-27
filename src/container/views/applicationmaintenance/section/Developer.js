import { Button, Card } from "react-bootstrap";
import { DeveloperBG } from "../../../../assets";
import { Cards } from "../../../../components";

const Developer = () => {
  return (
    <section>
      <div className="developer container ">
        <div className="content text-center my-5">
          <h4 className="fw-bold">Trusted and Skilled Developers</h4>
          <p>
            Our developers are ready to join your team and build amazing mobile
            & web apps.
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
  );
};
export default Developer;

import { Button, Card } from "react-bootstrap";
import "../enterpriseweb.css";
import { TechnologyStackMockup } from "../../../../mockup/WebdevMockup";

const TechnologyStacks = (props) => {
  return (
    // <div className="">
    <div className="container text-center">
      <h3 className="p-2">{props.heading}</h3>
      <p className="p-0">{props.para}</p>
      <div className="row ">
        {TechnologyStackMockup.map((items, key) => (
          <div className={`${items.className} p-3`}>
            <h3>{items.text}</h3>
            {items?.btn?.map((item) => (
              <button className={`${items.btnclass} ps-3 pe-3 p-1 m-1`}>
                {item.language}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};
export default TechnologyStacks;

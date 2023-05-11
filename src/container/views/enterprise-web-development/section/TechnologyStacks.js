import "../enterpriseweb.css";
import { TechnologyStackMockup } from "../../../../mockup/WebdevMockup";
import { CustomButton } from "../../../../components";

const TechnologyStacks = (props) => {
  return (
    <div className="container text-center">
      <h3 className="p-2">{props.heading}</h3>
      <p className="p-0">{props.para}</p>
      <div className="row ">
        {TechnologyStackMockup.map((items, key) => (
          <div className={`${items.className} p-3`}>
            <h3>{items.text}</h3>
            {items?.btn?.map((item) => (
              <CustomButton
                btnClass="backcolor ps-3 pe-3 p-1 m-1"
                value={item.language}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechnologyStacks;

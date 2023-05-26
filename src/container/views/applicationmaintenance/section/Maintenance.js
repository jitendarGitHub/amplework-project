import { useNavigate } from "react-router-dom";
import { Dedicated } from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setInputValue } from "../../../../redux/slice/cartSlice";
import { Button } from "react-bootstrap";

const Maintenance = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { inputvalue } = useSelector((state) => state.cart);
  // console.log(inputvalue, "input");
  // const [state, setState] = useState({ss
  //   phone: "",
  // });
  // const handleChange = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  //   console.log(e.target.value, state.phone, "console");
  //   dispatch(setInputValue(e.target.value));
  // };
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-between justify-content-lg-end columnreverse">
          <div className="col-sm-12 col-lg-5 pt-md-2  pl-md-5 align-self-center">
            <img src={Dedicated} width={"90%"} />
          </div>
          {/* <input
              placeholder="Enter phone number"
              name="phone"
              className="form-control"
              value={state.phone}
              onChange={handleChange}
              maxLength={12}
              type="number"
            />
            <div className="">
              <Button onClick={() => navigate("/random")}>fgh</Button>
            </div> */}
          <div className="col-sm-12 col-lg-7">
            <PrimaryText
              className="supporter-title text-primary fw-bold"
              heading="AMPLEWORK SOFTWARE"
            />

            <PrimaryText
              heading="Your dedicated Supporter for App Maintenance Service"
              className="supporter-heading"
            />
            <SecondaryText
              para="App maintenance is a critical aspect because it effectively keeps
              the application functioning in an optimized manner so that it can
              fulfill your audient requirement. At Amplework , we can support
              you in almost everthing from bug fixed to security potches. Our
              prowess developers ensure that the application should stay secure
              and up-to-date"
              className="supporter-para mt-4"
            />
            <SecondaryText
              para="    App maintenance is a critical aspect because it effectively keeps
              the application functioning in an optimized manner so that it can
              fulfill your audient requirement. At Amplework , we can support
              you in almost everthing from bug fixed to security potches."
              className="supporter-para"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Maintenance;

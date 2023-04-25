import { Target } from "../../../../assets";
import { Shapcard } from "../../../../components";

const AppShap = () => {
  return (
    <section style={{ backgroundColor: "rgb(250 250 250)" }}>
      <div className=" app-shap text-center container">
        <h3 className="shap-heading">
          Let's get your app in shape - contact us now and let the
          <br /> maintenance magic begin
        </h3>
        <p className="shap-para mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
          <br /> standard dummy text ever since the 1500s,
        </p>

        <div className="row justify-content-center ">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Shapcard
              image={Target}
              title="Fixed"
              para="Slow and glitch software updates with no-real benefits for users?"
              bgcolor="rgb(6 21 114)"
              color="rgb(245 164 3)"
              footer="Amplework’s Solution"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Shapcard
              image={Target}
              title="issue"
              para="Slow and glitch software updates with no-real benefits for users?"
              footer="Amplework’s Solution"
              bgcolor="rgb(6 21 114)"
              color="rgb(245 164 3)"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Shapcard
              image={Target}
              title="issue"
              para="Slow and glitch software updates with no-real benefits for users?"
              footer="Amplework’s Solution"
              bgcolor="rgb(6 21 114)"
              color="rgb(245 164 3)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppShap;

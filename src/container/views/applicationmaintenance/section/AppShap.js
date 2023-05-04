import { Target } from "../../../../assets";
import { Shapcard } from "../../../../components";
import "../application.css";

const AppShap = () => {
  return (
    <section className="app-shap-section">
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
              bgcolor="rgb(6 21 114)"
              color="rgb(245 164 3)"
              footer="Amplework’s Solution"
              para="Suffering from the high cost off software maintenance"
              changepara="Our in-house support matrix and best-in-industry prices will resultant in cost reduction by 30% to 40%."
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Shapcard
              image={Target}
              footer="Amplework’s Solution"
              bgcolor="rgb(6 21 114)"
              color="rgb(245 164 3)"
              para="Slow and glitch software updates with no-real benefits for users?"
              changepara="For enhance UX by 4x, we roll out updates at a regular interval of 3-5 weeks as a part of CI/CD"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Shapcard
              image={Target}
              para="Need profound resources for program visibility?"
              footer="Amplework’s Solution"
              bgcolor="rgb(6 21 114)"
              color="rgb(245 164 3)"
              changepara="We incorporate in-house KPIs for improving software visibility and maintaining clarity at all levels."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppShap;

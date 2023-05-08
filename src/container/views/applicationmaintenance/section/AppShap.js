import { Target } from "../../../../assets";
import { Shapcard } from "../../../../components";
import { Appshapmockup } from "../../../../mockup/Appshapmockup";
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
          {Appshapmockup.map((items) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Shapcard
                  image={Target}
                  bgcolor="rgb(6 21 114)"
                  color="rgb(245 164 3)"
                  footer="Amplework’s Solution"
                  para={items.para}
                  changepara={items.changepara}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AppShap;

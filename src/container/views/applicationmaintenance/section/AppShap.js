import { useSelector } from "react-redux";
import { Target } from "../../../../assets";
import { Shapcard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import { Appshapmockup } from "../../../../mockup/Appshapmockup";
import "../application.css";

const AppShap = () => {
  const { cart } = useSelector((state) => state);
  return (
    <section className="app-shap-section">
      <div className=" app-shap text-center container">
        <PrimaryText
          heading="Let's get your app in shape - contact us now and let the maintenance magic begin"
          className="shap-heading"
        />
        <h1>{cart.fname}</h1>
        {console.log("initialstate------>", cart.fname)}
        <SecondaryText
          para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          className="shap-para mt-3"
        />
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

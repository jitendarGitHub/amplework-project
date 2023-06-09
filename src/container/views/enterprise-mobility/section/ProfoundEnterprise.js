import { Profound } from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../EnterpriseMobility.css";

const ProfoundEnterprise = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-lg-5">
          <img src={Profound} width={"100%"} />
        </div>
        <div className="col-lg-6 p-lg-5">
          <PrimaryText
            className="profound-heading fs-6"
            heading="AMPLEWORK SOFTWARE"
          />
          <PrimaryText
            className="profound-text"
            heading="Amplework`s Profound Enterprise Mobility Integration"
          />
          <SecondaryText
            className="profound-para"
            para="Amplework Software offers profound enterprise mobility integration
            services to businesses who desires to streamline their process. We
            focus on security, scalability and seamless integration with your
            existing systems. Thus, Amplework's solutions enable businesses to
            increase business efficiency by many folds, enhance collaboration
            and gain a competitive edge in their industry."
          />
          <SecondaryText
            className="profound-para"
            para="Our integration solutions allow employees to access company data and
            applications from their mobile devices which makes it easier to work
            remotely or on-the-go. Our committed team prioritizes your
            business's unique requirements while providing tailored mobile
            solutions that deliver effortless performance for both your
            customers and employees."
          />
        </div>
      </div>
    </div>
  );
};
export default ProfoundEnterprise;

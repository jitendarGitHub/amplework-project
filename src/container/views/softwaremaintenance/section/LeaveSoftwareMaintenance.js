import { Image } from "react-bootstrap";
import { GrowingSoftware, leave } from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../softwaremaintenance.css";

const LeaveSoftwareMaintenance = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-lg-4 align-self-center">
            <PrimaryText
              heading="Leave Software Maintenance to us -Focus on Growing Your Bussiness"
              className="leave-software-heading"
            />
            <SecondaryText
              className="leave-software-para"
              para="Magnificent your business growth by incorporating our software
              maintenance services. We understand that frequent software
              hindrances or challenges create immense difficulty for you to run
              the business effectively. At Amplework, we promise our clients
              that we will take care of all their software challenges while they
              can emphasize the growth of their business units."
            />
            <SecondaryText
              className="leave-software-para"
              para=" So, partner with Amplework for seamless software maintenance that
              provides you complete peace of mind. Our software maintenance and
              support services ensure that your software will stay secure and
              always up-to-date. Although, we are known in the industry for
              delivering timely and result-oriented software services that help
              you to enhance your business revenue."
            />
          </div>
          <div className="col-lg-5 ">
            <Image
              src={GrowingSoftware}
              width={"100%"}
              className="border-class"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default LeaveSoftwareMaintenance;

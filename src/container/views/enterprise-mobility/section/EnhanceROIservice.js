import { Card, Image } from "react-bootstrap";
import "../EnterpriseMobility.css";
import { EnhanceCertificate } from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";

const EnhanceROIservice = () => {
  const ROIcard = (props) => {
    return (
      <Card className="notched-card border-0 p-lg-4 pt-1 m-3">
        <Card.Title className="rio-heading">
          <Image src={props.img} /> &nbsp;&nbsp;
          <span className="heading">{props.title}</span>{" "}
        </Card.Title>
        <Card.Text className="mt-1">{props.para}</Card.Text>
      </Card>
    );
  };
  return (
    <>
      <div className="container ">
        <PrimaryText
          className="text-center"
          heading=" Enhance ROI With Our Customized Mobility Services"
        />
        <SecondaryText
          className="text-center"
          para="Our tested & verified enterprise mobile app development services
          incorporate unique business solutions to empower corporations into the
          market. So, utilizing our solutions can gain competitive advantages to
          enhance your business growth."
        />
        <div className="row">
          {ROIcardMock.map((items) => {
            return (
              <div className="col-lg-4 col-md-6">
                <ROIcard
                  img={items.image}
                  title={items.title}
                  para={items.para}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default EnhanceROIservice;

export const ROIcardMock = [
  {
    image: EnhanceCertificate,
    para: " It involves consulting with businesses to understand their mobile needs and developing a mobile.",
    title: "Enterprise App Consultation",
  },
  {
    image: EnhanceCertificate,
    para: "We offer a user-friendly and visually appealing design that meets the specific needs of businesses.",
    title: "Enterprise Solution Designing",
  },
  {
    image: EnhanceCertificate,
    para: "We develop mobile applications by utilizing the latest technologies and development frameworks to ensure.",
    title: "Enterprise Mobile App Development",
  },
  {
    image: EnhanceCertificate,
    para: "This service involves managing mobile devices, applications and data within an enterprise environment.",
    title: "Enterprise Management Services",
  },
  {
    image: EnhanceCertificate,
    para: "In the final release, we identify and fix any bugs before deployment to make sure that your tech solutions.",
    title: "Enterprise App/Web Testing",
  },
  {
    image: EnhanceCertificate,
    para: "Enable the use of CMS development solutions to effectively manage and develop new enterprise-enabled.",
    title: "Enterprise Maintenance & Support",
  },
  {
    image: EnhanceCertificate,
    para: "Enable the use of CMS development solutions to effectively manage and develop new enterprise-enabled",
    title: "Enterprise CMS Development",
  },
  {
    image: EnhanceCertificate,
    para: "Enable the use of CMS development solutions to effectively manage and develop new enterprise-enabled",
    title: "Enterprise CMS Development",
  },
  {
    image: EnhanceCertificate,
    para: "This service involves managing mobile devices, applications and data within an enterprise environment",
    title: "Enterprise Management Services",
  },
];

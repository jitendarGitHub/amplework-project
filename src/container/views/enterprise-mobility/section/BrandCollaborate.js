import { Card } from "react-bootstrap";
import "../EnterpriseMobility.css";
import {
  Brandimg1,
  Brandimg10,
  Brandimg11,
  Brandimg12,
  Brandimg2,
  Brandimg3,
  Brandimg4,
  Brandimg5,
  Brandimg6,
  Brandimg7,
  Brandimg8,
  Brandimg9,
} from "../../../../assets";
import { BrandCard } from "../../../../components";

// const Brand = (props) => {
//   return (
//     <>
//       <div className="container justify-content-between ">
//         <div className=" justify-content-center m-2">
//           <Card className="brand-card " style={{ width: "18rem" }}>
//             <Card.Body className="">
//               <div className=" card-contents">
//                 <div className="img-block">
//                   <img src={props.img} className="img-fluid" width={"70px"} />
//                 </div>
//                 <Card.Title className="py-2 text-dark">
//                   {props.title}
//                 </Card.Title>
//               </div>
//               <div className="change-contents">
//                 <Card.Title>{props.title}</Card.Title>
//                 <span className="">{props.about}</span>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// };

const BrandCollaborate = () => {
  return (
    <div className="container text-center">
      <h2>Brands we've collaborated with</h2>
      <p>
        Our track record of collaborating with various brands speaks to our
        exceptional process-driven methodology and unparalleled technical
        know-how. You can trust Mindbowser to deliver top-notch results.
      </p>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg1}
            title="FINTECH"
            about="Develop a fin-tech application that represents your brand’s reputation and enhances your brand’s presence in the market."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg2}
            title="TRANSPORT"
            about="Streamline your logistics and transportation operations with our transport application building services - update your logistics units."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg3}
            title="TRAVEL"
            about="Bring your idea to life by developing a healthcare application for better patient management, prescription details, etc."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg4}
            title="HEALTHCARE"
            about=" Now, buildup an online market to connect all your buyers & sellers into an integrated platform for enhancing your revenue growth."
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg5}
            title="MARKETPLACE"
            about="Show the world about your innovative design ideas on your application. Connect with us for developing a fascinating application."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg6}
            title="FASHION"
            about="Give a boost to your education and learning platform for enhancing your user experience in an integrated platform."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg7}
            title="EDUCATION"
            about="Give a platform to your audiences for buying/selling multiple items without facing any downtime errors."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg8}
            title="E-COMMERCE"
            about="Give a platform to your audiences for buying/selling multiple items without facing any downtime errors."
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg9}
            title="RENTAL"
            about="Develop a fin-tech application that represents your brand’s reputation and enhances your brand’s presence in the market."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg10}
            title="ENTERTAINMENT"
            about="Streamline your logistics and transportation operations with our transport application building services - update your logistics units."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg11}
            title="SPORTS"
            about="Bring your idea to life by developing a healthcare application for better patient management, prescription details, etc."
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <BrandCard
            img={Brandimg12}
            title="AGRICULTURE"
            about=" Now, buildup an online market to connect all your buyers & sellers into an integrated platform for enhancing your revenue growth."
          />
        </div>
      </div>
    </div>
  );
};
export default BrandCollaborate;

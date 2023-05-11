import {
  Benifitsofsuccess,
  benifit1,
  benifit2,
  benifit3,
  benifit4,
  benifit5,
  benifit6,
} from "../../../../assets";
import { PrimaryText, SecondaryText } from "../../../../components/text";
import "../enterpriseweb.css";
const BenifitsOfBussiness = () => {
  return (
    <section className="benifit-section">
      <div className="container text-center">
        <PrimaryText heading="Benefits of Enterprise Web Development Company For Business Success" />
        <SecondaryText
          para="  Through enterprise website development agency, we effectively focus on
          re-structuring your website’s structure and adding specific features."
        />
        <div className="row">
          <div className="col-lg-4">
            <div className="d-flex pt-5 benifit-row-reverse">
              <div className="text-end  ">
                <h3 className="benifit-type-heading">
                  Higher Scalability & Performance
                </h3>
                <p>
                  Enterprise web development provides scalable and
                  high-performing solutions that can handle growing business
                  demands and traffic.
                </p>
              </div>
              <div className="p-4 pt-1">
                <div className="shadow-top-right align-self-center benifit-type1">
                  <p className="icon benifit-type-img1 text-center">
                    <img
                      src={benifit1}
                      className="img-fluid pb-2"
                      width={"20px"}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex pt-5">
              <div className="text-end">
                <h3 className="benifit-type-heading">Optimize Your SEO</h3>
                <p>
                  Now, optimize your website for search engines, making it
                  easier for potential customers to find to reach at your
                  business in a minimal time.
                </p>
              </div>
              <div className="p-4 pt-1">
                <div className="shadow-top-right rounded align-self-center benifit-type2">
                  <p className="icon benifit-type-img2 text-center">
                    <img
                      src={benifit2}
                      className="img-fluid rounded-pill pb-2"
                      width={"20px"}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex pt-5">
              <div className="text-end">
                <h3 className="benifit-type-heading">
                  Well-Maintained Consistency
                </h3>
                <p>
                  Incorporation of consistent branding, messaging and user
                  experience across all web properties effectively lead towards
                  better recognition and recall.
                </p>
              </div>
              <div className="p-4 pt-0">
                <div className="shadow-top-right rounded align-self-center benifit-type3">
                  <p className="icon benifit-type-img3 text-center">
                    <img
                      src={benifit3}
                      className="img-fluid rounded-pill pb-2"
                      width={"20px"}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pt-5">
            <img src={Benifitsofsuccess} width={"70%"} />
          </div>
          <div className="col-lg-4">
            <div className="d-flex pt-5">
              <div className="p-4 pt-1">
                <div className="shadow-top-right rounded align-self-center benifit-type4">
                  <p className="icon benifit-type-img4 text-center">
                    <img
                      src={benifit4}
                      className="img-fluid rounded-pill pb-2"
                      width={"20px"}
                    />
                  </p>
                </div>
              </div>
              <div className="text-start">
                <h3 className="benifit-type-heading">
                  Enhance Brand Authenticity
                </h3>
                <p>
                  A well-designed website can enhance your brand's credibility,
                  establish trust with customers, and improve your overall brand
                  authenticity.
                </p>
              </div>
            </div>
            <div className="d-flex pt-5 ">
              <div className="p-4 pt-1">
                <div className="shadow-top-right rounded align-self-center benifit-type5">
                  <p className="icon benifit-type-img5 text-center">
                    <img
                      src={benifit5}
                      className="img-fluid rounded-pill pb-2"
                      width={"22px"}
                    />
                  </p>
                </div>
              </div>
              <div className="text-start">
                <h3 className="benifit-type-heading">
                  Enhance Brand Authenticity
                </h3>
                <p>
                  A well-designed website can enhance your brand's credibility,
                  establish trust with customers, and improve your overall brand
                  authenticity.
                </p>
              </div>
            </div>
            <div className="d-flex pt-5">
              <div className="p-4 pt-1">
                <div className="shadow-top-right rounded align-self-center benifit-type6">
                  <p className="icon benifit-type-img6 text-center">
                    <img
                      src={benifit6}
                      className="img-fluid rounded-pill pb-2"
                      width={"25px"}
                    />
                  </p>
                </div>
              </div>
              <div className="text-start">
                <h3 className="benifit-type-heading">
                  Enhance Brand Authenticity
                </h3>
                <p>
                  A well-designed website can enhance your brand's credibility,
                  establish trust with customers, and improve your overall brand
                  authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="analytics">
            <img
              src="https://www.amplework.com/wp-content/uploads/2023/04/analytics.png"
              width={"55px"}
              className=""
            />
            <h3 className="benifit-type-heading p-2">
              Analytics &amp; Tracking
            </h3>
            <p class="mb-0 benifit-type-bottom">
              Integrating analytics &amp; tracking effectively make sure to
              integrate key
              <br /> market measures for analysing about system performance
              &amp; behaviour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BenifitsOfBussiness;

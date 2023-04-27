import {
  enterprise1,
  enterprise2,
  enterprise3,
  enterprise4,
  enterpeise5,
  enterprise6,
  enterprise7,
  enterprise8,
  EnterpriseBg,
} from "../../../../assets";

const MaintenancBox = () => {
  return (
    <section className="bg-light p-2 pb-5">
      <div className="container maintenance-Section">
        <div className=" maintenance">
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise1} className="fa" alt="" />
            </div>

            <div className="content">
              <h5 className="text-dark fw-bold">
                Proactive Monitoring & Maintenance
              </h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise2} className="fa" alt="" />
            </div>
            <div className="content">
              <h5 className="text-dark fw-bold">Web App Maintenance</h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise3} className="fa" alt="" />
            </div>
            <div className="content ">
              {" "}
              <h5 className="text-dark fw-bold">
                Incident Management and Resolution
              </h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise4} className="fa" alt="" />
            </div>
            <div className="content">
              {" "}
              <h5 className="text-dark fw-bold">Performance Optimization</h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterpeise5} className="fa" alt="" />
            </div>
            <div className="content">
              {" "}
              <h5 className="text-dark fw-bold">
                Application Security and Compliance
              </h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise6} className="fa" alt="" />
            </div>
            <div className="content">
              <h5 className="text-dark fw-bold">Regular Updates & Upgrades</h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise7} className="fa" alt="" />
            </div>
            <div class="content">
              {" "}
              <h5 className="text-dark fw-bold">Application Integration</h5>
              <p className="text-dark">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon text-center align-self-center fs-1 ">
              <img src={enterprise8} className="fa" alt="" />
            </div>
            <div className="content">
              {" "}
              <h3 className="text-dark fw-bold">Customized Support Plans</h3>
              <p className="text-dark ">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MaintenancBox;

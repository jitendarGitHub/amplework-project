import "../application.css";
import {
  Apps1,
  Apps2,
  Apps3,
  Apps4,
  Apps5,
  Apps6,
  Apps7,
  Apps8,
} from "../../../../assets";

const AppsType = () => {
  return (
    <section className="container pb-5 text-center">
      <h5 className="app-type-section">Keep Your Applications Always Shine</h5>
      <h3>Types of Apps We Maintain At Amplework Software</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
        <br /> standard dummy text ever since the 1500s,
      </p>
      <div className="maintain p-1 mt-5">
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center fs-1 ">
            <img src={Apps1} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">Web App</h5>
          </div>

          <div className="contents">
            <h5 className="fw-bold text-white ">Web Apps</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center fs-1 ">
            <img src={Apps2} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">Cloud Apps & SaaS</h5>
          </div>
          <div className="contents">
            <h5 className="text-white fw-bold">Cloud Apps & SaaS</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center fs-1 ">
            <img src={Apps3} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">Enterprise App</h5>
          </div>
          <div className="contents ">
            <h5 className=" text-white  fw-bold">Enterprise Apps</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center fs-1 ">
            <img src={Apps4} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">AR/VR Apps</h5>
          </div>
          <div className="contents">
            {" "}
            <h5 className=" text-white  fw-bold">AR/VR Apps</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center fs-1 ">
            <img src={Apps5} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">Database Apps</h5>
          </div>
          <div className="contents">
            {" "}
            <h5 className=" text-white  fw-bold">Database Apps</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center fs-1 ">
            <img src={Apps6} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">AI/ML Apps</h5>
          </div>
          <div className="contents">
            <h5 className=" text-white  fw-bold">AI/ML Apps</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center ">
            <img src={Apps7} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">Gaming Apps</h5>
          </div>
          <div class="contents">
            <h5 className=" text-white  fw-bold">Gaming Apps</h5>
            <p className=" ">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="maintain-box">
          <div className="maintain-icon text-center align-self-center ">
            <img src={Apps8} className="fa-icon" alt="" />
            <h5 className="mt-4 fw-bold">Hybrid Apps</h5>
          </div>
          <div className="contents">
            <h3 className="text-white fw-bold">Hybrid Apps</h3>
            <p className="">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppsType;

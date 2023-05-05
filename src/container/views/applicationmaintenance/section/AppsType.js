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
import DefaultCard from "../../../../components/card/Index";

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
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps1}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="Web Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />

        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps2}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="Cloud Apps and Saas"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps3}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="Enterpeise Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps4}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="AR/VR Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps5}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="Database Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps6}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="AI/ML Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps7}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="Gaming Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
        <DefaultCard
          headingshow
          cardclass="maintain-box"
          imgdivclass="maintain-icon text-center align-self-center fs-1 "
          imgclass="fa-icon"
          cardimage={Apps8}
          contentclass="contents"
          headingclass=" fw-bold"
          heading="Hybrid Apps"
          paraclass="text-white"
          para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
        />
      </div>
    </section>
  );
};
export default AppsType;

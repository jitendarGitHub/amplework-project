import {
  enterprise1,
  enterprise2,
  enterprise3,
  enterprise4,
  enterpeise5,
  enterprise6,
  enterprise7,
  enterprise8,
} from "../../../../assets";
import { DefaultCard } from "../../../../components";

const MaintenancBox = () => {
  return (
    <section className="bg-light p-2 pb-5">
      <div className="container maintenance-Section">
        <div className=" maintenance">
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise1}
            contentclass="content"
            headingclass="text-dark fw-bold"
            heading="Web App Maintenance"
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise2}
            contentclass="content"
            headingclass="text-dark fw-bold"
            headingstyle={{ visibility: "hidden" }}
            heading="Incident Management and Resolution"
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise3}
            contentclass="content"
            headingclass="text-dark fw-bold"
            headingstyle={{ visibility: "hidden" }}
            heading="Incident Management and Resolution"
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise4}
            contentclass="content"
            headingclass="text-dark fw-bold"
            headingstyle={{ visibility: "hidden" }}
            heading="Performance Optimization"
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterpeise5}
            contentclass="content"
            headingclass="text-dark fw-bold"
            headingstyle={{ visibility: "hidden" }}
            heading="Application Security and Compliance"
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise6}
            contentclass="content"
            headingclass="text-dark fw-bold"
            heading="Regular Updates & Upgrades"
            headingstyle={{ visibility: "hidden" }}
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise7}
            contentclass="content"
            headingclass="text-dark fw-bold"
            heading="Application Integration"
            headingstyle={{ visibility: "hidden" }}
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
          <DefaultCard
            cardclass="box"
            imgdivclass="icon text-center align-self-center fs-1"
            imgclass="fa"
            cardimage={enterprise8}
            contentclass="content"
            headingclass="text-dark fw-bold"
            heading="Customized Support Plans"
            headingstyle={{ visibility: "hidden" }}
            paraclass="text-dark"
            para=" Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum"
          />
        </div>
      </div>
    </section>
  );
};
export default MaintenancBox;

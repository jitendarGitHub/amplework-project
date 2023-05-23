import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { SiTimescale } from "@react-icons/all-files/si/SiTimescale";
import { VscGraph } from "@react-icons/all-files/vsc/VscGraph";
import { Image, Table } from "react-bootstrap";
import { NovaMam, PrakashSir, SantoshSir } from "../../../../assets";
import "../application.css";
import { PrimaryText, SecondaryText } from "../../../../components/text";
const CompanyOverview = () => {
  return (
    <div className="col-sm-12 col-lg-5  p-3 text-white company-section ">
      <PrimaryText heading="Quick Stats" className="QuickStart fs-3" />

      {mock.map((items) => {
        return (
          <div className="d-flex">
            <div className="col-lg-7 col-7">
              <div className="d-flex align-items-baseline">
                <PrimaryText
                  className="text-warning fw-bold projectHeading"
                  heading={items.heading}
                />
                <div className="img">
                  <span className="text-light fs-1">{items.logo}</span>
                </div>
              </div>
              <SecondaryText className="projectPara" para={items.para} />
            </div>
            <div className="col-sm-5 ">
              <div className="d-flex align-items-baseline">
                <div className="d-flex align-items-baseline">
                  <PrimaryText
                    className="text-warning fw-bold projectHeading"
                    heading={items.heading2}
                  />
                  <div className="img">
                    <span className="text-light fs-1">{items.logo2}</span>
                  </div>
                </div>
              </div>
              <SecondaryText className="projectPara" para={items.para2} />
            </div>
          </div>
        );
      })}
      <PrimaryText className="topExecutive" heading="Top Executives" />
      <Table responsive="lg" className="table table-borderless">
        <tbody className="text-center text-white">
          <tr className="justify-content-between">
            <td className=" ">
              <Image
                src={SantoshSir}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <SecondaryText para=" Santosh Singh" />
              <SecondaryText para="CEO" />
            </td>
            <td className=" ">
              <Image
                src={PrakashSir}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <SecondaryText para="Prakash Saini" />
              <SecondaryText para="CTO" />
            </td>
            <td className=" ">
              <Image
                src={NovaMam}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <SecondaryText para="Supernova C." />
              <SecondaryText para="CXO" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default CompanyOverview;
const mock = [
  {
    heading: "170M+",
    logo: <FiLayers />,
    para: "Successful Projects",
    heading2: "92%",
    logo2: <FaUsers />,
    para2: "Client retention",
  },
  {
    heading: "$200M+",
    logo: <VscGraph />,
    para: "Our client overall revenue",
    heading2: "1M+",
    logo2: <SiTimescale />,
    para2: "Work hours",
  },
];

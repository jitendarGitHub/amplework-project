import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { SiTimescale } from "@react-icons/all-files/si/SiTimescale";
import { VscGraph } from "@react-icons/all-files/vsc/VscGraph";
import { Table } from "react-bootstrap";
import { NovaMam, PrakashSir, SantoshSir } from "../../../../assets";
import "../application.css";
import { PrimaryText, SecondaryText } from "../../../../components/text";
const CompanyOverview = () => {
  return (
    <div className="col-sm-12 col-lg-5  p-3 text-white company-section ">
      <h3 className="QuickStart">Quick Stats</h3>
      <div className="d-flex">
        <div className="col-lg-7 col-7">
          <div className="d-flex align-items-baseline">
            <PrimaryText
              className="text-warning fw-bold projectHeading"
              heading="170+"
            />
            <div className="img">
              <span className="text-light fs-1">{<FiLayers />}</span>
            </div>
          </div>
          <SecondaryText className="projectPara" para="Successful Projects" />
        </div>
        <div className="col-sm-5 ">
          <div className="d-flex align-items-baseline">
            <div className="d-flex align-items-baseline">
              <PrimaryText
                className="text-warning fw-bold projectHeading"
                heading="92%"
              />
              <div className="img">
                <span className=" text-light fs-1">{<FaUsers />}</span>
              </div>
            </div>
          </div>
          <SecondaryText className="projectPara" para="Client retention" />
        </div>
      </div>
      <div className="d-flex ">
        <div className="col-lg-7 col-7">
          <div className="d-flex align-items-baseline">
            <PrimaryText
              className="text-warning fw-bold projectHeading"
              heading="$200M+"
            />
            <div className="img">
              <span className="fs-1 text-light ">{<VscGraph />}</span>
            </div>
          </div>
          <SecondaryText
            className="projectPara"
            para="Our clients overall revenue"
          />
        </div>
        <div className="col-sm-5">
          <div className="d-flex align-items-baseline">
            <div className="d-flex align-items-baseline">
              <PrimaryText
                className="text-warning fw-bold projectHeading"
                heading="1M+"
              />
              <div className="img">
                <span className="fs-1 text-light ">{<SiTimescale />}</span>
              </div>
            </div>
          </div>
          <SecondaryText className="projectPara" para="Work hours" />
        </div>
      </div>
      <PrimaryText className="topExecutive" heading="Top Executives" />
      <Table responsive="lg" className="table table-borderless">
        <tbody className="text-center text-white">
          <tr className="justify-content-between">
            <td className=" ">
              <img
                src={SantoshSir}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <SecondaryText para=" Santosh Singh" />
              <SecondaryText para="CEO" />
            </td>
            <td className=" ">
              <img
                src={PrakashSir}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <SecondaryText para="Prakash Saini" />
              <SecondaryText para="CTO" />
            </td>
            <td className=" ">
              <img
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

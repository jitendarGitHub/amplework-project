import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { SiTimescale } from "@react-icons/all-files/si/SiTimescale";
import { VscGraph } from "@react-icons/all-files/vsc/VscGraph";
import { Table } from "react-bootstrap";
import { NovaMam, PrakashSir, SantoshSir } from "../../../../assets";
import "../application.css";
const CompanyOverview = () => {
  return (
    <div className="col-sm-12 col-lg-5  p-3 text-white company-section ">
      <h3 className="QuickStart">Quick Stats</h3>
      <div className="d-flex">
        <div className="col-lg-7 col-7">
          <div className="d-flex align-items-baseline">
            <h1 className="text-warning fw-bold projectHeading">170+</h1>
            <div className="img">
              <span className="text-light fs-1">{<FiLayers />}</span>
            </div>
          </div>
          <p className="projectPara">Successful Projects</p>
        </div>
        <div className="col-sm-5 ">
          <div className="d-flex align-items-baseline">
            <div className="d-flex align-items-baseline">
              <h1 className="text-warning fw-bold projectHeading">92%</h1>
              <div className="img">
                <span className=" text-light fs-1">{<FaUsers />}</span>
              </div>
            </div>
          </div>
          <p className="projectPara">Client retention</p>
        </div>
      </div>
      <div className="d-flex ">
        <div className="col-lg-7 col-7">
          <div className="d-flex align-items-baseline">
            <h1 className="text-warning fw-bold projectHeading">$200M+</h1>
            <div className="img">
              <span className="fs-1 text-light ">{<VscGraph />}</span>
            </div>
          </div>
          <p className="projectPara">Our clients overall revenue</p>
        </div>
        <div className="col-sm-5">
          <div className="d-flex align-items-baseline">
            <div className="d-flex align-items-baseline">
              <h1 className="text-warning fw-bold projectHeading">1M+</h1>
              <div className="img">
                <span className="fs-1 text-light ">{<SiTimescale />}</span>
              </div>
            </div>
          </div>
          <p className="projectPara">Work hours</p>
        </div>
      </div>

      <h3 className="topExecutive">Top Executives</h3>
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
              <p>Santosh Singh</p>
              <p>CEO</p>
            </td>
            <td className=" ">
              <img
                src={PrakashSir}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <p>Prakash Saini</p>
              <p>CEO</p>
            </td>
            <td className=" ">
              <img
                src={NovaMam}
                className="foundersImg "
                alt=""
                width={"105px"}
              />
              <p>Supernova C.</p>
              <p>CXO</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default CompanyOverview;

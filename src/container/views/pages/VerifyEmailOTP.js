import { useNavigate } from "react-router";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { API } from "../../../apiService";
import { Flip, ToastContainer, toast } from "react-toastify";
import { Image } from "react-bootstrap";
import {
  CCard,
  CCardGroup,
  CCol,
  CCollapse,
  CContainer,
  CRow,
} from "@coreui/react";
export default function VerifyEmailOtp(props) {
  const navigate = useNavigate();

  function SweetAlert() {
    const myTimer = swal("Good job!", "Successful Logged In", "success", {
      timer: 1000,
    });
  }

  const [state, setState] = useState({
    otp: "",
    role: "",
    email: "",
  });
  const { otp, role, email } = state;
  const handleChange = (enteredOtp) => {
    setState({ ...state, otp: enteredOtp });
    console.log("onchange-----", enteredOtp);
    console.log("otp---", state);
  };

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const emails = params.get("email");

  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    const email = emails;
    const data = {
      email: emails,
      role: "user",
    };
    console.log("resend otp---", data);
    API.forgetPassword(data)
      .then((res) => {
        toast.success("SMS send Successful");
        setSeconds(30);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const verification = (e) => {
    e.preventDefault();
    const data = {
      otp: otp,
      email: emails,
      //   password: "123456",
      role: "user",
    };
    console.log("data------", data);
    API.verifyOtp(data)
      .then((response) => {
        console.log("response", response);
        if (response.data.success) {
          navigate("/reset-password");
          SweetAlert();
        } else {
          console.log("please correct your OTP");
        }
        console.log("response-------", response);
        return response;
      })
      .catch((error) => {
        toast.error("Enter correct OTP!");
        console.log("::::error----", error);
        return error;
      });
  };

  return (
    <CContainer className="bg-light min-vh-100 flex-row d-flex align-items-center">
      <CRow className="w-100">
        <CCol>
          <CCardGroup>
            <CCard className="p-4 border-0">
              {" "}
              <div className="text-center mt-5">
                <h5 className="text-center">
                  Enter 4 digit code sent to your Email
                </h5>
                <div className="d-flex justify-content-center">
                  <Image
                    src="https://img.icons8.com/?size=1x&id=eBEo6FOQZ3v4&format=png"
                    className="p-3"
                  />

                  <h6 className="text-success align-self-center"> {emails}</h6>
                </div>

                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHove
                  theme="dark"
                  limit={1}
                  transition={Flip}
                />
                <form onSubmit={verification}>
                  {" "}
                  <div
                    id="form1"
                    action="#"
                    method="POST"
                    className="otp mt-3  d-flex item-center justify-content-center gap-3"
                  >
                    <OTPInput
                      value={otp}
                      onChange={handleChange}
                      numInputs={4}
                      inputStyle={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        border: "1px solid black",
                      }}
                      renderSeparator={<span className="mx-2"> </span>}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>
                  <Button
                    type="submit"
                    className={
                      otp.length == 4
                        ? "bg-success form-control w-25 mt-3"
                        : "bg-secondary disabled form-control w-25 mt-3"
                    }
                  >
                    OK
                  </Button>
                </form>

                <div className="countdown-text mt-3">
                  {seconds > 0 ? (
                    <p style={{ color: "#ccc" }}>
                      Resend Code: ( in {seconds < 10 ? `0${seconds}` : seconds}{" "}
                      secs)
                    </p>
                  ) : (
                    <button
                      disabled={seconds > 0}
                      style={{ color: seconds > 0 ? "#DFE3E8" : "#0c831f" }}
                      onClick={resendOTP}
                    >
                      Resend Code
                    </button>
                  )}
                </div>
              </div>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  );
}

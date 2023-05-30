import { useNavigate } from "react-router";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { API } from "../../../apiService";
import { Flip, ToastContainer, toast } from "react-toastify";
export default function VerifyOtp(props) {
  const navigate = useNavigate();

  function SweetAlert() {
    const myTimer = swal("Good job!", "Successful Logged In", "success", {
      timer: 1000,
    });
  }

  const [state, setState] = useState({
    otp: "",
    role: "",
  });
  const { otp, role } = state;
  const handleChange = (enteredOtp) => {
    setState({ otp: enteredOtp });
    console.log("onchange-----", enteredOtp);
    console.log("otp---", state);
  };

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const phone = params.get("phone");
  const countryCode = "+";

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
    const data = {
      phone: countryCode + phone,
      role: "user",
    };
    API.sendOtp(data)
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

  const validate = (e) => {
    e.preventDefault();
    const data = {
      otp: otp,
      phone: phone,
      role: "user",
    };
    console.log("phone----", data);
    API.verifyOtp(data)
      .then((response) => {
        console.log("response---ddssddss", response.success);
        if (response) {
          SweetAlert();
          navigate("/sign-up");
          console.log(":::::response---", response);
        } else {
          console.log("error message ----");
        }
      })
      .catch((error) => {
        console.log("::::error----", error);
      });
  };

  return (
    <div className="text-center mt-5">
      <span className="text-center">
        Enter 4 digit code sent to your phone Number<br></br> {phone}{" "}
      </span>
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
      <form onSubmit={validate}>
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
            Resend Code: ( in {seconds < 10 ? `0${seconds}` : seconds} secs)
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
  );
}

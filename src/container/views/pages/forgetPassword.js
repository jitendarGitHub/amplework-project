import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { LoginBg } from "../../../assets";
import { API } from "../../../apiService";
import { useDispatch } from "react-redux";
import { fetchUserForgetPasswordData } from "../../../redux/slice/Action";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    role: "",
  });

  const { email, role } = state;

  const onSubmit = (e) => {
    const data = {
      email: email,
      role: "user",
    };
    console.log("data", data);
    e.preventDefault();

    API.forgetPassword(data)
      .then((response) => {
        console.log("res", response);
        if (response.data.success) {
          navigate({
            pathname: "/email-verification",
            search: `?email=${email}`,
          });
        } else {
          toast.error("Check your Email!");
        }
        return response;
      })
      .catch((err) => {
        console.log("forgetpass------err", err);
        return err;
      });
  };

  // dispatch(fetchUserForgetPasswordData(data))
  // .then((response) => {
  //   console.log("res", response);
  //   if (response.data.success) {
  //     navigate({
  //       pathname: "/email-verification",
  //       search: `?email=${email}`,
  //     });
  //   } else {
  //     toast.error("Check your Email!");
  //   }
  //   return response;
  // })
  // .catch((err) => {
  //   console.log("forgetpass------err", err);
  //   return err;
  // });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard
                className="p-4 text-white border-0"
                style={{ backgroundColor: "#0d6efd" }}
              >
                <CCardBody>
                  <CForm onSubmit={onSubmit}>
                    <h1>Forget Password</h1>
                    <p className="text-light" style={{ fontSize: "14px" }}>
                      Enter your Email for the Verification process,we will send
                      4 digit code on Your email.
                    </p>
                    <CInputGroup className="mb-3 mt-3">
                      <input
                        className="form-control "
                        type="email"
                        name="email"
                        value={email}
                        placeholder="jitendra@amplework.com"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow className="mt-4  justify-content-center text-center">
                      <CCol xs={12}>
                        <CButton
                          type="submit"
                          color="success"
                          className="w-100"
                        >
                          Send
                        </CButton>
                        <ToastContainer
                          position="top-center"
                          autoClose={2000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggables
                          pauseOnHove
                          theme="dark"
                          limit={1}
                          transition={Flip}
                        />
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgetPassword;

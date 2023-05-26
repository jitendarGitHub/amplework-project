import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { ToastContainer, toast, Flip } from "react-toastify";
import { API } from "../../../apiService";
import { LoginBg } from "../../../assets";

const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    first_name: "",
    dob: "",
    referral_code: "",
    password: "",
    phone: "",
    last_name: "",
    role: "user",
  });

  const {
    email,
    first_name,
    last_name,
    role,
    phone,
    password,
    dob,
    referral_code,
  } = state;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("password length must be 8 to 14");
    } else if (password.length > 14) {
      toast.error("password length must be 8 to 14");
    } else if (phone.length < 6 || phone.length > 14) {
      toast.error("Enter valid Phone number!");
    } else {
      const data = {
        email: "jitenda@amplew.com",
        phone: phone,
        first_name: first_name,
        dob: "2002-05-09",
        referral_code: "123456",
        password: password,
        last_name: last_name,
        role: "user",
      };
      API.signup(data).then((res) => {
        if (res.data.success) {
          navigate("/api/users/login");
        } else {
          toast.error("filll out formality");
        }
      });
    }
  };
  console.log("state----", state);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
      <CContainer>
        {/* <p className=" text-center fs-4" onClick={() => navigate("")}>
          <CIcon icon={cilArrowLeft} className="mx-2" width={"40px"} />
          Back to Login
        </p> */}
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard
                className="p-4 border-0 text-white "
                style={{ backgroundColor: "#0d6efd" }}
              >
                <h1 className="container">Sign Up</h1>
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <CRow className="mb-3">
                      <CCol sm={12}>
                        <input
                          type="text"
                          name="first_name"
                          value={first_name}
                          Placeholder="First Name"
                          className="form-control border-3 border-top-0 border-start-0 border-end-0"
                          onChange={handleChange}
                          required
                        />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol sm={12}>
                        <input
                          type="text"
                          value={last_name}
                          name="last_name"
                          placeholder="Last Name"
                          className="form-control border-3 border-top-0 border-start-0 border-end-0"
                          onChange={handleChange}
                          required
                        />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol sm={12}>
                        <input
                          type="tel"
                          value={phone}
                          name="phone"
                          placeholder="Mobile"
                          className="form-control border-3 border-top-0 border-start-0 border-end-0"
                          onChange={handleChange}
                          required
                        />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol sm={12}>
                        <input
                          type="password"
                          value={password}
                          name="password"
                          placeholder="Password"
                          className="form-control border-3 border-top-0 border-start-0 border-end-0"
                          onChange={handleChange}
                          required
                        />
                      </CCol>
                    </CRow>
                    <p className="text-center">
                      Already a member?{" "}
                      <a
                        href="/api/users/login"
                        className="fs-5 "
                        style={{ textDecoration: "none", color: "#080a50" }}
                      >
                        LogIn
                      </a>
                    </p>

                    <CRow className="">
                      <CButton
                        type="submit"
                        color="dark "
                        className="border-0 p-3 px-5"
                      >
                        Sign Up{" "}
                      </CButton>
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

export default SignUp;

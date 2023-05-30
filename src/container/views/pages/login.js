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
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch } from "react-redux";
import { API } from "../../../apiService";
import { AmpleLogo, LoginBg } from "../../../assets";
import { cilLockLocked, cilPhone } from "@coreui/icons";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const { email, password, role } = state;

  console.log("state", state);

  const validate = (e) => {
    e.preventDefault();
    if (password.length == 0) {
      toast.error("Password must be Required");
    } else if (password.length < 8 || password.length > 14) {
      toast.error("password length must be 8 to 14");
    } else {
      const data = {
        email: email,
        password: password,
        role: role,
      };
      API.login(data).then((res) => {
        console.log("response of data-----", res?.data);
        const { accessToken } = res.data.data;
        localStorage.setItem("token", accessToken);
        if (res?.data?.success) {
          navigate("/who-we-are");
        } else {
          toast.error("Check your Credential.....");
        }
      });
    }
  };
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
                  <CForm onSubmit={validate}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your accounts
                    </p>

                    <CInputGroup className="mb-3 mt-3">
                      <CInputGroupText>
                        <CIcon icon={cilPhone} size="8xl" />
                      </CInputGroupText>
                      <input
                        placeholder="Enter Your Email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={handleChange}
                        // maxLength={12}
                        type="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3 mt-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} size="lg" />
                      </CInputGroupText>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="warning" className="px-4">
                          Login
                        </CButton>
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
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton
                          // color="light"
                          className="px-0"
                          onClick={() => navigate("/sign-up")}
                        >
                          <span>Sign Up?</span>
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-center justify-content-center"
                style={{ backgroundColor: "#080a37" }}
              >
                <h1 className="fw-bold text-success">
                  <img src={AmpleLogo} width={"100%"} alt="" />
                </h1>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;

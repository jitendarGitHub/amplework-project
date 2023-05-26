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
    phone: "",
    password: "",
    role: "admin",
  });

  const { phone, password, role } = state;

  console.log("state", state);

  const validate = (e) => {
    e.preventDefault();
    if (phone.length == 0) {
      toast.error("Enter Phone number!");
    } else if (phone.length < 6 || phone.length > 14) {
      toast.error("Enter valid Phone number!");
    } else if (password.length == 0) {
      toast.error("Password must be Required");
    } else if (password.length < 8 || password.length > 14) {
      toast.error("password length must be 8 to 14");
    } else {
      const data = {
        phone: phone,
        password: password,
        role: "admin",
      };
      API.login(data).then((res) => {
        console.log("ressssssss---", res);
        if (res.data.success) {
          navigate("/");
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
                      Sign In to your account
                    </p>

                    <CInputGroup className="mb-3 mt-3">
                      <CInputGroupText>
                        <CIcon icon={cilPhone} size="8xl" />
                      </CInputGroupText>
                      <input
                        placeholder="Enter phone number"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={handleChange}
                        maxLength={12}
                        type="number"
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

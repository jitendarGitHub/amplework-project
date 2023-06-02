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
import { API } from "../../../apiService";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    password: "",
    cpassword: "",
  });
  const { password, cpassword } = state;

  const onSubmit = (e) => {
    const data = {
      ["current-password"]: password,
      ["new-password"]: cpassword,
    };
    e.preventDefault();
    if (password != cpassword) {
      toast.error("Check Your Confirm Password");
    } else {
      API.changePassword(data)
        .then((response) => {
          console.log("response", response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  /*-----------------------------*/
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
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
                    <h1>Reset Your Password</h1>
                    <p className="text-medium-emphasis mb-4">
                      Create New Password your accounts
                    </p>
                    <span>New Password</span>
                    <CInputGroup className="mb-3">
                      <input
                        placeholder="New Password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={handleChange}
                        type="text"
                      />
                    </CInputGroup>
                    <span className="mt-3">Confirm Password</span>
                    <CInputGroup className="mb-3">
                      <input
                        placeholder="Confirm Password"
                        name="cpassword"
                        className="form-control"
                        value={cpassword}
                        onChange={handleChange}
                        type="text"
                      />
                    </CInputGroup>

                    <CRow className="mt-4">
                      <CCol xs={6}>
                        <CButton type="submit" color="warning" className="">
                          Reset
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

export default ResetPassword;

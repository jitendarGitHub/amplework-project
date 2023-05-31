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
import { API } from "../../../apiService";
import { cilLockLocked, cilPhone } from "@coreui/icons";

const ForgetPassword = () => {
  //   const navigate = useNavigate();

  //   const [state, setState] = useState({
  //     email: "",
  //     password: "",
  //     role: "user",
  //   });

  //   const { email, password, role } = state;

  //   console.log("state", state);

  //   const validate = (e) => {
  //     e.preventDefault();
  //     if (password.length == 0) {
  //       toast.error("Password must be Required");
  //     } else if (password.length < 8 || password.length > 14) {
  //       toast.error("password length must be 8 to 14");
  //     } else {
  //       const data = {
  //         email: email,
  //         password: password,
  //         role: role,
  //       };
  //       API.login(data).then((res) => {
  //         console.log("response of data-----", res?.data);
  //         const { accessToken } = res.data.data;
  //         localStorage.setItem("token", accessToken);
  //         if (res?.data?.success) {
  //           navigate("/who-we-are");
  //         } else {
  //           toast.error("Check your Credential.....");
  //         }
  //       });
  //     }
  //   };
  //   const handleChange = (e) => {
  //     setState({ ...state, [e.target.name]: e.target.value });
  //   };

  //   return (
  //     <div
  //       className="bg-light min-vh-100 d-flex flex-row align-items-center"
  //       style={{
  //         backgroundImage: `url(${LoginBg})`,
  //         backgroundRepeat: "no-repeat",
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //       }}
  //     >
  //       <CContainer>
  //         <CRow className="justify-content-center">
  //           <CCol md={8}>
  //             <CCardGroup>
  //               <CCard
  //                 className="p-4 text-white border-0"
  //                 style={{ backgroundColor: "#0d6efd" }}
  //               >
  //                 <CCardBody>
  //                   <CForm onSubmit={validate}>
  //                     <h1>Forget Password</h1>

  //                     <CInputGroup className="mb-3 mt-3">
  //                       <CInputGroupText>
  //                         <CIcon icon={cilPhone} size="8xl" />
  //                       </CInputGroupText>
  //                       <input
  //                         placeholder="Enter "
  //                         name="password"
  //                         className="form-control"
  //                         value={email}
  //                         onChange={handleChange}
  //                         type="email"
  //                       />
  //                     </CInputGroup>
  //                     <CInputGroup className="mb-3 mt-3">
  //                       <CInputGroupText>
  //                         <CIcon icon={cilLockLocked} size="lg" />
  //                       </CInputGroupText>
  //                       <input
  //                         className="form-control"
  //                         type="password"
  //                         name="password"
  //                         value={password}
  //                         placeholder="Password"
  //                         onChange={handleChange}
  //                       />
  //                     </CInputGroup>
  //                     <CRow></CRow>
  //                     <CRow className="mt-4">
  //                       <CCol xs={6}>
  //                         <CButton type="submit" color="warning" className="">
  //                           Login
  //                         </CButton>
  //                         <ToastContainer
  //                           position="top-center"
  //                           autoClose={2000}
  //                           hideProgressBar={false}
  //                           newestOnTop={false}
  //                           closeOnClick
  //                           rtl={false}
  //                           pauseOnFocusLoss
  //                           draggables
  //                           pauseOnHove
  //                           theme="dark"
  //                           limit={1}
  //                           transition={Flip}
  //                         />
  //                       </CCol>
  //                     </CRow>
  //                   </CForm>
  //                 </CCardBody>
  //               </CCard>
  //             </CCardGroup>
  //           </CCol>
  //         </CRow>
  //       </CContainer>
  // </div>
  <></>;
  //   );
};

export default ForgetPassword;

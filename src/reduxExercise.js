import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, decrement, increment, remove } from "./redux/slice/cartSlice";
import { fetchUserData } from "./redux/slice/Action";
import { API } from "./apiService";
import { toast } from "react-toastify";

export const ReduxExercise = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    id: "",
  });
  const { cart } = useSelector((state) => state);
  const { inputvalue } = useSelector((state) => state.cart);
  console.log("222222222", inputvalue);
  const dispatch = useDispatch();
  console.log(cart, "cart");
  const data = {
    fname: state.fname,
    lname: state.lname,
    id: state.id,
  };
  const addToCart = () => {
    dispatch(add(1));
  };
  const removeToCart = () => {
    dispatch(remove(1));
  };
  const decrement1 = () => {
    dispatch(decrement(1));
  };
  const increment1 = () => {
    dispatch(increment(1));
  };

  const LoginApi = () => {
    dispatch(fetchUserData(data));
  };

  const validate = (e) => {
    e.preventDefault();

    if (state.phone.length == 0) {
      toast.error("Enter Phone number!");
    } else if (state.phone.length < 6 || state.phone.length > 14) {
      toast.error("Enter valid Phone number!");
    } else if (state.password.length == 0) {
      toast.error("Password must be Required");
    } else if (state.password.length < 8 || state.password.length > 14) {
      toast.error("password length must be 8 to 14");
    } else {
      const data = {
        phone: state.phone,
        password: state.password,
        role: "admin",
      };
      console.log("datassss------>", data);
      API.login(data);
    }
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    // console.log('e--', e.target.name, e.target.value)
  };

  return (
    <div className="text-center justify-content-center">
      <h1>Update Value by +1 ={cart.add}</h1>
      <h1>
        <button
          className="btn btn-success btn-lg btn-block"
          onClick={addToCart}
        >
          Add{" "}
        </button>
      </h1>
      <br />
      <br />
      <h1>Update Value by -1 ={cart.remove}</h1>
      <h1>
        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={removeToCart}
        >
          Remove{" "}
        </button>
      </h1>
      <br />
      <br />
      <h1>Input Value Access:- </h1>
      <h1>{inputvalue}</h1>
      <div className=" d-flex">
        <button
          className="btn btn-success btn-lg btn-block"
          onClick={decrement1}
        >
          Amount-1{" "}
        </button>
        <h1> {cart.Amount}</h1>

        <button
          className="btn btn-danger btn-lg btn-block"
          onClick={increment1}
        >
          Amount+1{" "}
        </button>
      </div>
      <input type="text" value={state.fname} />
      <button onClick={LoginApi}>Api</button>

      <form onSubmit={validate}>
        <input
          placeholder="Enter phone number"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          maxLength={12}
          type="number"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

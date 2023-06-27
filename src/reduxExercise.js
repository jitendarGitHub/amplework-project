import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, add, addItem, updateItem } from "./redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";

function Redux() {
  const { count, addto, update } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  console.log("addto----", addto);
  const dispatch = useDispatch();
  const [state, setState] = useState();
  useEffect(() => {
    if (update?.id) {
      setInput(update);
    }
    console.log("update", update);
  }, [update]);
  const addition = () => {
    dispatch(add(1));
  };
  const subtraction = () => {
    dispatch(remove(1));
    console.log("sub=------", subtraction);
  };

  const [input, setInput] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });
  const { id, firstName, lastName } = input;

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("=======", input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const countIndex = addto.findIndex((item) => item.id == update.id);
    if (countIndex == -1) {
      dispatch(addItem(input));
      console.log("addItem------------>", input);
    } else {
      dispatch(updateItem(input));
      console.log("else input---", input);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <select value={id} name="id" onChange={handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        {/* <input type="text" value={id} name="id" onChange={handleChange} /> */}
        <input
          type="text"
          placeholder="firstname"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="lastName"
          placeholder="ladstname"
          value={lastName}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      <br />
      <br />
      <button onClick={() => navigate("/redux-data")}>Result</button>
      <br />
      <br />

      <br />
      <div className="d-flex">
        <button
          onClick={addition}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        >
          +
        </button>
        <h1> score :{count}</h1>
        <button
          onClick={subtraction}
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Redux;

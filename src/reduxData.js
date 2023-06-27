import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteItem, pop, updateItem } from "./redux/slice/cartSlice";
import { useState } from "react";

const ReduxData = () => {
  //   const search = window.location.search;
  //   const params = new URLSearchParams(search);
  //   const id = params.get("id");
  const { addto, update, remove } = useSelector((state) => state.cart);
  const [id, setId] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updates = (e) => {
    dispatch(updateItem(e));
    navigate("/random");
  };
  const Pop = (e) => {
    dispatch(pop(e.id));
  };
  const Delete = (e) => {
    setId(dispatch(deleteItem(id)));
    console.log("id---=>", id);
  };

  return (
    <>
      <table className="table">
        <tr style={{ border: "2px solid red" }}>
          <th style={{ border: "2px solid red" }}>id</th>
          <th style={{ border: "2px solid red" }}>firstName</th>
          <th style={{ border: "2px solid red" }}>Lastname</th>
          <th style={{ border: "2px solid red" }} colSpan="2">
            Action
          </th>
        </tr>
        {addto.map((item) => {
          return (
            <>
              <tr>
                <td style={{ border: "2px solid red" }}>{item.id}</td>{" "}
                <td style={{ border: "2px solid red" }}>{item.firstName}</td>
                <td style={{ border: "2px solid red" }}>{item.lastName}</td>
                <td style={{ border: "2px solid red", textAlign: "center" }}>
                  <button
                    onClick={() => updates(item)}
                    style={{
                      borderRadius: "20px",
                      background: "green",
                      border: "none",
                    }}
                  >
                    Update
                  </button>
                </td>
                <td style={{ border: "2px solid red", textAlign: "center" }}>
                  <button
                    onClick={Delete}
                    style={{
                      borderRadius: "20px",
                      background: "red",
                      border: "none",
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
      {addto.length > 0 ? (
        <div className="text-center">
          <button
            onClick={Pop}
            style={{
              borderRadius: "10px",
              background: "red",
              border: "none",
              width: "100px",
              height: "50px",
              color: "white",
            }}
          >
            pop
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={() => navigate("/random")}
            style={{
              borderRadius: "10px",
              background: "blue",
              border: "none",
              width: "100px",
              height: "50px",
              color: "white",
            }}
          >
            Add Item
          </button>
        </div>
      )}
    </>
  );
};
export default ReduxData;

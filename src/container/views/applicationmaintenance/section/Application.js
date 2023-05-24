import { useDispatch, useSelector } from "react-redux";
import { CustomButton, DefaultCard } from "../../../../components";
import { PrimaryText, SecondaryText } from "../../../../components/text";

import { Applicationmockup } from "../../../../mockup/ApplicationMockup";
import { add, remove } from "../../../../redux/slice/cartSlice";
import { useSnackbar } from "notistack";
import { API } from "../../../../apiService";
import { useState } from "react";

const Application = (item) => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    id: "",
  });
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = ({ items }) => {
    const data = {
      fname: state.fname,
      lname: state.lname,
      id: state.id,
    };
    // console.log("datattatattatatta---------->", state.fname);
    dispatch(add(API.login(data)));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
    API.login().then((res) => {
      console.log("res", res);
    });
  };
  const removeFromCart = ({ items }) => {
    console.log("datas---->", dispatch(remove(items.image)));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <section className="">
      <div className="container">
        <div className="application text-center align-item-center">
          <PrimaryText
            heading="Our Advanced Application Support Service - Elevate Your
            Application's Application`s."
          />
          <SecondaryText
            para="Complex applications which are configured with the latest APIs require the advanced solutions to keep the working mechanism of the applications in a perfect shape. At Amplework,"
            className=".h6"
          />
          <input
            type="number"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />
          <div className="row">
            {Applicationmockup.map((items) => {
              return (
                <div className="col-lg-4 p-0">
                  <DefaultCard
                    cardclass="text-start p-3 pt-4  application-cart"
                    imgdivclass="pb-3"
                    headingclass="card-title"
                    paraclass="card-description"
                    cardimage={items.cardimage}
                    heading={items.heading}
                    para={items.para}
                    cardstyle={items.cardstyle}
                    imgstyle={items.imgstyle}
                  />
                </div>
              );
            })}
          </div>
          <CustomButton
            value="GET A FREE QUOTE"
            btnClass="free-quote mt-4"
            action={addToCart}
          />
          {/* {products.map((items, index) => {
            console.log("index", index);
            return (
              <div className="" key={index} item={items}>
                <CustomButton
                  value="GET A FREE QUOTE"
                  btnClass="free-quote mt-4"
                  action={addToCart}
                />
                {console.log("items", items.rating)}
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};
export default Application;

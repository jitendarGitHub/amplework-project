const BugActivity = (props) => {
  return (
    <>
      <div className="  mt-4">
        <div className="d-flex gap-3 ">
          <div
            className=" shadow-top-right rounded align-self-center"
            style={{
              backgroundColor: `${props.backgroundColor}`,
              color: `${props.color}`,
              boxShadow: `${props.shadow}`,
            }}
          >
            <p className="icon  text-center ">
              <img src={props.icon} className="img-fluid" />
            </p>
          </div>
          <p className="  ">{props.title}</p>
        </div>
      </div>
    </>
  );
};
export default BugActivity;

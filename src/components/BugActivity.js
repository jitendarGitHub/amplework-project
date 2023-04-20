const BugActivity = (props) => {
  return (
    <>
      <div className="first mt-4">
        <div className="d-flex gap-3 ">
          <div
            className=" shadow-top-right rounded"
            style={{
              backgroundColor: `${props.backgroundColor}`,
              color: `${props.color}`,
              boxShadow: `${props.shadow}`,
            }}
          >
            <p className="icon  mx-2  ">{props.icon}</p>
          </div>
          <p className="  ">{props.title}</p>
        </div>
      </div>
    </>
  );
};
export default BugActivity;

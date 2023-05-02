const PhasesCard = (props) => {
  return (
    <>
      <div
        className={`${props.class} row pb-0`}
        style={{
          flexDirection: `${props.direction}`,
          backgroundImage: `url(${props.bgimage})`,
          backgroundPosition: `${props.backgroundposition}`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={` col-lg-6 align-self-center p-5 pb-lg-0 pt-lg-0  text-center`}
        >
          <img src={props.img} width={"100%"} className="p-lg-5  img-fluid" />
        </div>
        <div className="col-lg-6 d-flex align-self-center">
          <h1 className="phase-heading ">{props.head}</h1>
          <div className="phase-content align-self-center">
            <h3 className="phase-about ">{props.about}</h3>
            <p className="phase-para pe-lg-5">{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PhasesCard;

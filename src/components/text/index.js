const PrimaryText = (props) => {
  const { heading, className } = props;
  return <h2 className={`${className}`}>{heading}</h2>;
};

const SecondaryText = (props) => {
  const { para, className } = props;
  return <p className={`${className}`}>{para}</p>;
};

export { PrimaryText, SecondaryText };

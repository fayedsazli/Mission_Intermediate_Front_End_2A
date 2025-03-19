const Button = ({text,backgroundColor = "rgba(62, 207, 76, 1)" ,color ="rgba(255, 255, 255, 1)"}) => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg btn-block  align-self-center fs-6 "
      style={{
        backgroundColor:`${backgroundColor}`,
        color: `${color}`
      }}
      >
      {text}
    </button>
  );
};
export default Button;
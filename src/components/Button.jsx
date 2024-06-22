import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  const { setCounter, counter, value } = props;
  const renderSign = () => {
    if (value === "+") {
      return <FontAwesomeIcon icon="fa-solid fa-plus" />;
    } else if (value === "-") {
      return <FontAwesomeIcon icon="fa-solid fa-minus" />;
    } else {
      return "Reset";
    }
  };
  return (
    <button
      className={value}
      onClick={() => {
        if (value === "-") {
          setCounter(counter - 1);
        } else if (value === "+") {
          setCounter(counter + 1);
        } else {
          setCounter(0);
        }
      }}
    >
      {renderSign()}
    </button>
  );
};
export default Button;

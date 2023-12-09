import ActivityLoader from "../Loading";
import "./style.css";

const Button = ({
  title = "",
  onClick = () => {},
  backgroundColor = "rgba(120, 121, 241, 1)",
  color = "white",
  borderRadius = "8px",
  marginRight = "0px",
  loading = false,
  colorLoading = "",
}) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      disabled={loading}
      style={{
        backgroundColor,
        borderColor: color,
        color: loading ? colorLoading : color,
        borderRadius,
        marginRight,
      }}
    >
      {loading ? <ActivityLoader color={color} /> : title}
    </button>
  );
};

export default Button;

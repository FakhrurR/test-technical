import "./style.css";

const ActivityLoader = ({color = "black"}) => {
  return (
    <div>
      <label color={color}>Loading...</label>
    </div>
  );
};

export default ActivityLoader;

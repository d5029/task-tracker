import { FaTimes } from "react-icons/fa";
const Task = () => {
  return (
    <div className="task">
      <h3>
        TEST
        <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>test</p>
    </div>
  );
};

export default Task;

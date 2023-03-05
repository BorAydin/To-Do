import Card from "./shared/Card";
import { FaTimes, FaCheck } from "react-icons/fa";
import { todoDelete, todoUpdate } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.todo.lang);

  const handleDelete = (todo) => {
    if (lang) {
      if (window.confirm("Are you sure ?")) {
        dispatch(todoDelete(todo));
      }
    } else {
      if (window.confirm("Emin misin ?")) {
        dispatch(todoDelete(todo));
      }
    }
  };

  const handleUpdate = (todo) => {
    dispatch(todoUpdate(todo));
  };

  return (
    <Card active={todo.done}>
      <div className="text-display">{todo.todo}</div>
      <button onClick={() => handleDelete(todo)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleUpdate(todo)} className="ok">
        <FaCheck color="purple" />
      </button>
    </Card>
  );
}

export default Todo;

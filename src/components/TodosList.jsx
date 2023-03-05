import Todo from "./Todo";
import { useSelector } from "react-redux";

function TodosList() {
  const { todos } = useSelector((state) => state.todo);
  const lang = useSelector((state) => state.todo.lang);

  if (!todos || (todos.length === 0 && lang)) {
    return <p> There isn't todo </p>;
  } else if (!todos || (todos.length === 0 && lang === false)) {
    return <p> Yapılacak şey yok. </p>;
  }

  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodosList;

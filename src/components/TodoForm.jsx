import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { todoAdd } from "../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function TodoForm() {
  const [text, setText] = useState("");

  const lang = useSelector((state) => state.todo.lang);
  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" && lang) {
      alert("Please, add a todo");
    } else if (text === "" && lang === false) {
      alert("Lütfen, giriş alanını boş bırakmayın.");
    } else {
      dispatch(
        todoAdd({
          todo: text,
          done: false,
          id: uuidv4(),
        })
      );
    }
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>{lang ? "What will you do ?" : "Ne Yapacaksın ?"}</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} />
          <Button type="submit">{lang ? "Submit" : "Gönder"}</Button>
        </div>
      </form>
    </Card>
  );
}

export default TodoForm;

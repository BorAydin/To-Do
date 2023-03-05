import Flag from "react-flagkit";
import { useSelector, useDispatch } from "react-redux";
import { changeTR, changeGB } from "../features/todoSlice";

function Header() {
  const lang = useSelector((state) => state.todo.lang);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <h2>{lang ? "To Do List" : "Yapılacaklar Listesi"} </h2>
        <div className="lang">
          <Flag
            country="GB-ENG"
            role="button"
            onClick={() => dispatch(changeGB())}
          />
          <Flag
            country="TR"
            role="button"
            onClick={() => dispatch(changeTR())}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

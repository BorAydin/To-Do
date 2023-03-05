import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <TodoForm />
        <TodosList />
      </div>
    </>
  );
}

export default App;

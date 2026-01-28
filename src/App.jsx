import "./App.css";
import Counter from "./components/Counter/Counter";
import { galleryData } from "./components/Gallery/data";
import Gallery from "./components/Gallery/Gallery";
import TodoItem from "./components/Todolist/TodoItem";
import TodoList from "./components/Todolist/TodoList";
import TogglePara from "./components/TogglePara/TogglePara";
import UpdatEmail from "./components/UpdateEmail/UpdatEmail";

function App() {
  let name = "salman";
  return (
    <div>
      <h1>HELLO WORLD {name}</h1>
      <Counter name={name} age={40} />

      {/* <div className="d-flex">
      <Gallery image="react.svg" title="React JS" />
      <Gallery image="vite.svg" title="Vite"/>
    </div> */}

      <div className="d-flex">
        {galleryData.map( item => <Gallery {...item} key={item.id}/> )}
      </div>
      
      <TogglePara />
      <UpdatEmail />
      <TodoList />
    </div>
  );
}

export default App;

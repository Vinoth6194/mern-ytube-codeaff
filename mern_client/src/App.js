import "./App.css";
import PostMessages from "./components/PostMessages";
import { Provider } from "react-redux";
import { store } from "./actions/store";

function App() {
  return (
    <div className="App">
      CRUD App using MERN Stack -Vinothkumar S
      <Provider store={store}>
        <PostMessages />
      </Provider>
    </div>
  );
}

export default App;

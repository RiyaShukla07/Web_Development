import './App.css';
import Todo from './component/todo';
import {Provider} from "react-redux";
import { store } from './app/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
       <Todo/>
    </Provider>
    </>
  );
}

export default App;

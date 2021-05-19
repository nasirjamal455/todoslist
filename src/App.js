import './App.css';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux'
import TodoList from './components/TodoList';
import TodoReducer from './store/reducers/todos';
const RootReducer = combineReducers({
  Todos:TodoReducer
});
const store = createStore(RootReducer);
function App() {


  return (
    <Provider store={store}>
    <div className="App">
     <TodoList />
    </div>
    </Provider>
  );
}

export default App;

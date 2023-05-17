import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { reducer } from './reducer/reducer';
import { decNumber, incNumber } from './redux/ActionTypes';
function App() {
  const myState=useSelector((state)=>state.reducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
     <button onClick={()=>dispatch(decNumber(1))}>-</button><p>Counter:{myState}</p><button onClick={()=>dispatch(incNumber(1))}>+</button>
    </div>
  );
}

export default App;

import './App.scss';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ChartScreen from './screen/ChartScreen';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< HomeScreen />}></Route>
        <Route exact path='/chart' element={< ChartScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;

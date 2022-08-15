import layer1 from './loading/layer1.png';
import layer2 from './loading/layer2.png';
import layer3 from './loading/layer3.png';
import layer4 from './loading/layer4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={layer1} className="loading-animation" id='layer1' alt="logo" />
        <img src={layer2} className="loading-animation" id='layer2' alt="logo" />
        <img src={layer3} className="loading-animation" id='layer3' alt="logo" />
        <img src={layer4} className="loading-animation" id='layer4' alt="logo" />
      </header>
    </div>
  );
}

export default App;

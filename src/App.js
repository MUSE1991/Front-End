import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserView>
      </BrowserView>
      <MobileView>
        <Login></Login>
      </MobileView>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './components/A2SDailyLiftView/A2SDailyLiftView'
import A2SDailyLiftView from './components/A2SDailyLiftView/A2SDailyLiftView';
import Header from './components/NavBar/header'

function App() {

    return (
        
        <div className="App">
            <Header></Header>
          <A2SDailyLiftView></A2SDailyLiftView>
      </div>
  );
}

export default App;

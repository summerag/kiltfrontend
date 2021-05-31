import Nav from './components/nav'
import Routes from './router'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes />
      </Router>

      
    </div>

  );
}

export default App;

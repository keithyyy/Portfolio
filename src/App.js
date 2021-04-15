import { HashRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;

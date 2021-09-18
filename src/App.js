import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js'
import Projects from './components/Projects/Projects.js'
import Battlestations from './components/Battlestations/Battlestations.js'
import Builds from './components/Builds/Builds.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout} from 'antd';
const { Header } = Layout;

function App() {
  return (
    <Router>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', lineHeight: '40px', height: '40px' }}>
      <Navbar></Navbar>
    </Header>
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/battlestations" component={Battlestations} />
            <Route path="/builds" component={Builds} />
        </Switch>
      </div>   
     </Router>
  );
}

export default App;

import "./styles/App.css";
import Users from "./components/Users";
import HomePage from "./components/HomePage";
import Statistics from "./components/Statistics";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={Statistics} />
        </Router>
      </div>
    </div>
  );
}

export default App;

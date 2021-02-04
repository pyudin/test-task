import logo from "./logo.svg";
import "./App.css";
import Users from "./components/Users";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Router>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={Users} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

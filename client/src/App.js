import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import DetailView from "./components/post/DetailView";
import CreateView from "./components/post/CreateView";
import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateView from "./components/post/UpdateView";
function App() {
  return (
    <Router>
      <Header />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <DetailView />
          </Route>
          <Route path='/create'>
            <CreateView/>
          </Route>
          <Route path='/update/:id'>
            <UpdateView/>
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;

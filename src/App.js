import './App.scss';
import { Login } from "./Login";
import { Register } from "./Register";
import { Route, Switch, useLocation } from "react-router-dom";
import { NotFound } from "./NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={250}
        classNames="fade"
        key={location.pathname}
      >
        <div className="App">
          <Switch location={location}>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
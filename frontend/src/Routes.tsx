import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './pages/List';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

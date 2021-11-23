import  { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { User } from "./pages/User";


function App() {
  return (
    <BrowserRouter>
        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/user/:user" component={User} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
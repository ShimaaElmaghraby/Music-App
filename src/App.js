import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Cover from './Components/Cover';
import Error from './Components/Error';
import ArtistDetails from './Components/ArtistDetails';



const App = ()=>{
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Cover}/>
        <Route path="/artist/:id"  component={ArtistDetails}/>

        <Route path='*' component={Error}/>
      </Switch>
    </Router>
  )
}

export default App;

import './App.css';
import {Route, Switch} from 'react-router-dom'; 
import Event from './components/Event/Event';
import Buy from './components/Buy/Buy'; 
import Ticket from'./components/Ticket/Ticket'; 

function App() {
  return (
    <section>
      

    <Switch>
      
     <Route path ="/" component={Event} exact />
      <Route path="/buy/:id" component ={Buy} />
      <Route path="/ticket/:id" component={Ticket} />

    </Switch>
    </section>
  );
}

export default App;

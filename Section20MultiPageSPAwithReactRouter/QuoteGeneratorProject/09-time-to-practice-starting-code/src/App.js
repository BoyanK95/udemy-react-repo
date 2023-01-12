import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetails from "./pages/QuotesDetails";

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuotesDetails />
      </Route>
      <Route path='/new-quote'>
      <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;

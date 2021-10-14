import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from '../pages/AllQuotes';
import NewQuote from '../pages/NewQuote';
import NotFound from '../pages/NotFound';
import QuoteDetail from '../pages/QuoteDetail';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact component={AllQuotes} />
            <Route path="/quotes/:quoteId" component={QuoteDetail} />
            <Route path="/new-quote" exact component={NewQuote} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}

export default Routes;
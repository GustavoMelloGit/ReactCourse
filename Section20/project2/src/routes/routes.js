import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('../pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('../pages/QuoteDetail'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const AllQuotes = React.lazy(() => import('../pages/AllQuotes'));

const Routes = () => {
    return (
        <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" exact component={AllQuotes} />
                <Route path="/quotes/:quoteId" component={QuoteDetail} />
                <Route path="/new-quote" exact component={NewQuote} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Suspense>
    );
}

export default Routes;
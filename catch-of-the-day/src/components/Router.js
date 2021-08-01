import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

function Router() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default Router

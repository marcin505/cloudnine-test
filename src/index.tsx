import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import SalonsListView from 'components/SalonsListView';
import SalonView from 'components/SalonView';
import reportWebVitals from './reportWebVitals';
import SalonsProvider from 'store/SalonsProvider';

ReactDOM.render(
  <React.StrictMode>
    <SalonsProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <SalonsListView />
          </Route>
          <Route path="/salon-details/:salonId">
            <SalonView />
          </Route>
        </Switch>
      </HashRouter>
    </SalonsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

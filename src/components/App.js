import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectionPage, SchemaPage, ModelPage, NotFoundPage } from 'pages';
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ConnectionPage}/>
      <Route path="/schema/:connectionName" component={SchemaPage}/>
      <Route path="/model" component={ModelPage}/>
    </Switch>
  );
};

export default App;

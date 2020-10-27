import React from 'react';
import { Provider } from 'react-redux';
import Homepage from './Pages/Homepage';
import StarshipDetail from './Pages/StarshipDetail';
import PageNotFound from './Pages/PageNotFound';
import bg from '../src/Assets/images/bg.jpg';
import globalStore from './Store/GlobalStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchResultPage from './Pages/SearchResultPage';

const store = globalStore();
function App() {
  return (
    <Provider store={store}>
      <div
        className='App container-fluid'
        style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}
      >
        <Router>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/starship/:id' exact component={StarshipDetail} />
            <Route
              path='/search/result/:id'
              exact
              component={SearchResultPage}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

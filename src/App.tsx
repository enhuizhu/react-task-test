import React from 'react';
import './App.scss';
import { AppBar, Toolbar } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './store/store';
import { HomeContainer } from './pages/home/Home';
import { getTaskData } from './store/actions/tasks.action';
import { DetailContainer } from './pages/detail/Detail';
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getTaskData());
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <AppBar position="static" className="app-bar">
              <Toolbar>
                <Link to="/"><img src="/Alfa logo.svg"/></Link>        
              </Toolbar>
            </AppBar>
            <Route path="/" exact component={HomeContainer}></Route>
            <Route path="/task/:id" component={DetailContainer}></Route>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

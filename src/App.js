import React from "react";
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import ManPage from "./components/ManPage/ManPage";
import WomenPage from "./components/WomenPage/WomenPage";
import Header from "./components/Header/Header";
import Alert from "./components/UI/Alert/Alert";
import {useSelector} from "react-redux";

function App() {

  const isAlertVisible = useSelector(state => state.GlobalElementsReducer)

  return (
      <div className="App">
        <Header />
        {isAlertVisible.alertPopup.visible && <Alert />}

        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/men" component={ManPage}/>
          <Route path="/women" component={WomenPage}/>
          <Redirect to='/'></Redirect>
          {/*<Route render={() => <h1>Страница не найдена</h1>} />*/}
        </Switch>

      </div>
  );
}

export default App;

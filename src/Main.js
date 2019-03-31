import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import Event from './components/about/Event';
import Parent from './components/parentToChild/Parent';
import Home from './components/about/Home';
import User from './components/user/User';
import ListKey from './components/listKey/ListKey';
import Lifecycle from './components/lifecycle/Lifecycle';
import PureComponent from './components/pureComponent/PureComponent';
import RefsAndDOM from './components/refs-dom/RefsAndDOM';
import PropTypesCom from './components/props-type/PropTypes';
import SampleComponent from './components/higher-order-components/SampleComponent';

//import StaticTypeChecking from './components/static-type-checking/StaticTypeChecking';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = ({isLogedin}) => (
  <main>
    <Switch>
      <Route path="/" exact strict component={Home}/>
      <Route path="/about/" strict component={AboutPage}/>
      <Route path="/user/:username" strict 
      render={({match})=>(
        isLogedin?(<User username={match.params.username}/>):(<Redirect to="/"/>)
      )}/>
      <Route path="/event" strict component={Event}/>
      <Route path="/parentChild" strict component={Parent}/>
      <Route path="/lifecycle" strict component={Lifecycle}/>
      <Route path="/pureComponent" strict component={PureComponent}/>
      <Route path="/refsDom" strict component={RefsAndDOM}/>
      <Route path="/propTypes" strict component={PropTypesCom}/>
      <Route path="/higherOrderComponent" strict component={SampleComponent} />
      

      <Route path="/listkey" strict component={ListKey}/>


    </Switch>  
  </main>
)
//PropTypes
export default Main

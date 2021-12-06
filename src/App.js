import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import './b_sass/main.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import TestColors from './components/TestColors/TestColors';

// Quote Components
import Quote from './components/Quote/Quote';
import { connect } from 'react-redux';
import mapStoreToProps from './redux/mapStoreToProps';


function App(props) {

  return (
    <Router>
      <div className="App" style={{ height: props.store.quote === -1 ? "auto" : "100vh" }}>

        {props.store.quote === -1 ? <Header /> : ''}
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/services'} component={Services} />
          <Route exact path={'/login'} component={Login} />
          <Route path={'/quote'} component={Quote} />
          <Route exact path='/contact' component={Contact} />

          {/* <Route exact path={'/testColors'} component={TestColors} /> */}
        </Switch>
        {props.store.quote === -1 ? <Footer /> : ''}
      </div>
    </Router >
  );
}

export default connect(mapStoreToProps)(App);

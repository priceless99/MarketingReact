import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Scheduled from './components/Scheduled'
import NewMessage from './components/NewMessage'
import CustomNavLink from './components/CustomNavLink'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <ul>
            <li className={'is-active'} onClick={() => this.setState({ pageNum: 'home' })}>
              <CustomNavLink to='/' activeOnlyWhenExact={true} label="Home" />
            </li>
            <li onClick={() => this.setState({ pageNum: 'scheduled' })} >
              <CustomNavLink to='/scheduled' activeOnlyWhenExact={true} label="Scheduled" />
            </li>
            <li onClick={() => this.setState({ pageNum: 'newmessage' })} >
              <CustomNavLink to='/newmessage' activeOnlyWhenExact={true} label="New Message" />
            </li>
          </ul>

        </div>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/newmessage' render={() => <NewMessage />} />
          <Route path='/scheduled' render={() => <Scheduled />} />
        </Switch>
      </BrowserRouter >

    );
  }
}
export default App;

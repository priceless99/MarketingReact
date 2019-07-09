import React from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import Homes from './components/Home'
import Scheduled from './components/Scheduled'
import NewMessage from './components/NewMessage'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import EventNote from '@material-ui/icons/EventNote';
// import PersonOutline from '@material-ui/icons/PersonOutline';
import Home from '@material-ui/icons/Home'
import Message from '@material-ui/icons/Message';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      customers: [],
      pageNum: 'home',
    }
  }
  componentDidMount() {
    axios.get(`https://5d17ee708060b10014297de6.mockapi.io/messages`)
      .then(res => {
        this.setState({ messages: res.data })
        console.log(res.data)
        console.log(this.state.messages)
      })
      .catch(err => console.log(err))
    axios.get(`https://5d17ee708060b10014297de6.mockapi.io/customers`)
      .then(res => {
        this.setState({ customers: res.data })
        console.log(res.data)
        console.log(this.state.customers)
      })
      .catch(err => console.log(err))

  }

  updateMessages = (val) => {
    axios.post(`https://5d17ee708060b10014297de6.mockapi.io/messages`, val)
      .then(res => this.setState({ messages: [...this.state.messages, val] }))
      .catch(err => window.alert('cannot post'))

  }


  render() {
    return (
      <BrowserRouter>

    

        <Switch>
          <Route exact path='/' render={() => <Homes customers={this.state.customers} />} />
          <Route path='/newmessage' render={() => <NewMessage updateMessages={this.updateMessages} />} />
          <Route path='/scheduled' render={() => <Scheduled messages={this.state.messages} />} />
        </Switch>

        <footer>
        <div id='grad1'>
          <Link to='/scheduled'> <Button variant={`${this.state.pageNum === 'scheduled' ? 'contained' : ''}`} className='header iconColor' onClick={() => this.setState({ pageNum: 'scheduled' })}>
           <div className='but'>
             <div className='buttonIcon'><EventNote/></div>
             <br/>
             {/* Home */}
           </div> </Button></Link>
          <Link to='/'> <Button variant={`${this.state.pageNum === 'home' ? 'contained' : ''}`} className='header iconColor' onClick={() => this.setState({ pageNum: 'home' })} >
          <div className='but'>
             <div className='buttonIcon'><Home/></div>
             <br/>
             {/* Scheduled */}
           </div> </Button></Link>
          <Link to='/newmessage'><Button variant={`${this.state.pageNum === 'newmessage' ? 'contained' : ''}`} className='header iconColor' onClick={() => this.setState({ pageNum: 'newmessage' })} >
          <div className='but'>
             <div className='buttonIcon'><Message/></div>
             <br/>
             {/* Message */}
           </div> </Button></Link>
        </div>
        </footer>

      </BrowserRouter >


    );
  }
}
export default App;

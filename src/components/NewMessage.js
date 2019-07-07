import React from 'react'
import { Link } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      text: false,
      email: false,
      push: false,
      send: 'now',
      date: '',
      time: '',
      frequency: '',
    }
  }

  sendData = () => {
    this.props.updateMessages(this.state)
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>

        <h2>Enter a new message:</h2>
        <div><textarea id="newMsg" className='messageInput' placeholder='Type here...' value={this.state.input} onChange={e => this.setState({ input: e.target.value })} cols="30" rows="10"></textarea>
        </div>
        <div>
          <h2>Send to:</h2>
          <p id="switches">Text:<input onChange={(e) => this.setState({ text: e.target.checked })} value={this.state.text} type="checkbox" /></p>
          <p id="switches">Email:<input onChange={(e) => this.setState({ email: e.target.checked })} value={this.state.email} type="checkbox" /></p>
          <p id="switches">Push Notification:<input onChange={(e) => this.setState({ push: e.target.checked })} value={this.state.push} type="checkbox" /></p>
        </div>
        <div>
          <h3>When to send the messages:</h3>
          <input type="radio" name="schedule" value='now' onClick={(e) => this.setState({ send: e.target.value })}></input>Now
          <input type="radio" name="schedule" value="schedule" onClick={(e) => this.setState({ send: e.target.value })}></input>Schedule
        </div>
        {this.state.send === 'schedule' && (
          <div>
            <p>Date:
            <input onChange={(e) => this.setState({ date: e.target.value })} type="date" /></p>
            <p>Time:
            <input onChange={(e) => this.setState({ time: e.target.value })} type="time" /></p>
            <p>Frequency:
              <select onChange={(e) => this.setState({ frequency: e.target.value })}>
                <option value="oncetime">Once Time</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </p>

          </div>
        )}
        <div>
          <Link to='/scheduled'><button onClick={this.sendData}>SEND</button></Link>
        </div>
      </div>
    )
  }
}

export default NewMessage
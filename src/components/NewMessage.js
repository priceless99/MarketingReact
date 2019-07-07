import React from 'react';
import { Link } from 'react-router-dom';
import FormControlLabelPosition from './FormControlLabelPosition';
import '../NewMessage.css';


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
      <div id="body">
        <h1>What do you want to send?</h1>
        <hr id="break"></hr>
        <h2>Message</h2>
        <div>
          <input className='subjectInput' placeholder='Subject...'></input>
          <textarea id="textarea" className='messageInput' placeholder='Enter your message here...' value={this.state.input} onChange={e => this.setState({ input: e.target.value })}></textarea>
        </div>
        <hr id="break"></hr>
        <div>
          <h2>Send</h2>
          <FormControlLabelPosition/>
          {/* <p>Text:<input onChange={(e) => this.setState({ text: e.target.checked })} value={this.state.text} type="checkbox" /></p>
          <p>Email:<input onChange={(e) => this.setState({ email: e.target.checked })} value={this.state.email} type="checkbox" /></p>
          <p>Push Notification:<input onChange={(e) => this.setState({ push: e.target.checked })} value={this.state.push} type="checkbox" /></p> */}
        </div>
        <hr id="break"></hr>
        <div>
          <h2>Set Time</h2>
          <p><input id="radio" type="radio" name="schedule" value='now' onClick={(e) => this.setState({ send: e.target.value })}></input>Now</p>
          <p><input id="radio" type="radio" name="schedule" value="schedule" onClick={(e) => this.setState({ send: e.target.value })}></input>Schedule</p>
        </div>
        {this.state.send === 'schedule' && (
          <div id="dateTime">
            <table>
              <th><h3>Date: </h3></th>
              <th><input onChange={(e) => this.setState({ date: e.target.value })} type="date" /></th>
              <tr>
                <td><h3>Time: </h3></td>
                <td><input onChange={(e) => this.setState({ time: e.target.value })} type="time" /></td>
              </tr>
              <tr>
                <td><h3>Frequency: </h3></td>
                <td><select onChange={(e) => this.setState({ frequency: e.target.value })}>
                <option value="oncetime">One Time</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select></td>
              </tr>
            </table>
          </div>
        )}
        <div id="send">
          <Link to='/scheduled'><button id="sendBtn" onClick={this.sendData}>SEND</button></Link>
        </div>
      </div>
    )
  }
}

export default NewMessage
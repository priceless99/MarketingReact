import React from 'react';
import { Link } from 'react-router-dom';
import '../NewMessage.css';
import DropdownExampleSelection from './Dropdown'


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
      subject: ''
    }
  }

  sendData = () => {
    this.props.updateMessages(this.state)
  }

  changeFrequency = (value) =>{
    this.setState({ frequency: value })
  }

  render() {
    return (
      <div className='bodyPad' id="body">
                <div className='pad'>
        <h2 className="ui header extendTitle">
           <i className="pencil alternate icon"></i>
           <div class="content">
              Create Message
            </div>
        </h2>

        </div>
        {/* <h1>What do you want to send?</h1> */}
        {/* <hr id="break"></hr> */}
        <div>
          
        <div class="ui form">
        <div class="field">
        <h3 className='ui header'>Content</h3>
        <div class="ui input">
          <input onChange={(e) => this.setState({ subject: e.target.value})} value={this.state.subject} className='subjectInput' placeholder='Subject...'></input>
        </div>
        </div>
  


          <div class="field">
          <textarea id="textarea" className='messageInput' placeholder='Enter your message here...' value={this.state.input} onChange={e => this.setState({ input: e.target.value })}></textarea> 
          </div>
          </div>
        </div>
        
        {/* <hr id="break"></hr> */}
        <div>
        <h3 className='ui header headPad'>Method</h3>
          <div class="ui list">
            <div className='item'>
          <div class="ui toggle checkbox item">
          <input onChange={(e) => this.setState({ text: e.target.checked })} value={this.state.text} type="checkbox" />
          <label>Text message</label>
          </div>
          </div>
          <div className='item'>
          <div class="ui toggle checkbox">
        <input onChange={(e) => this.setState({ email: e.target.checked })} value={this.state.email} type="checkbox" />
        <label>Email</label>
          </div>
          </div>
          <div className='item'>
          <div class="ui toggle checkbox">
          <input onChange={(e) => this.setState({ push: e.target.checked })} value={this.state.push} type="checkbox" />
        <label>Push Notification</label>
          </div>
          </div>
          </div>
        </div>



        <hr id="break"></hr>
        <div>
          <h2>Set Time</h2>
          {/* <div class="ui form">
            <div class="inline fields">
              <div class="field"> */}
                {/* <div class="ui radio checkbox"> */}
                  <input id="radio" type="radio"  name="schedule" value='now' onClick={(e) => this.setState({ send: e.target.value })}></input>
                    <label>Now</label>
                {/* </div> */}
              </div>
              {/* <div class="field"> */}
               {/* <div class="ui radio checkbox"> */}
                <input id="radio" type="radio" name="schedule" value="schedule" onClick={(e) => this.setState({ send: e.target.value })}></input>
                   <label>Schedule</label>
                {/* </div> */}
              {/* </div> */}
            {/* </div>
          </div>
        </div> */}
        {this.state.send === 'schedule' && (
          <div id="dateTime">
            <table>
              <th><h3>Date: </h3></th>
        <div class="ui input">

              <th><input onChange={(e) => this.setState({ date: e.target.value })} type="date" /></th>
              </div>
              <tr>
                <td><h3>Time: </h3></td>
                <td><input onChange={(e) => this.setState({ time: e.target.value })} type="time" /></td>
              </tr>
              <tr>
              < DropdownExampleSelection changeFrequency={this.changeFrequency}  />

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
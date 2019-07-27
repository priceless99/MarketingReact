import React from 'react';
import { Link } from 'react-router-dom';
import DropdownExampleSelection from './Dropdown'
import DateForm from './DatePicker'


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
  changeDate = (value) => {
    this.setState({ date: value})
  }
  changeTime = (value) => {
    this.setState({ time: value})
  }
  

  render() {
    return (
      <div className='bodyPad' id="body">
                <div className='pad'>
        <h2 className="ui header extendTitle">
           <i className="pencil alternate icon"></i>
           <div className="content">
              Create Message
            </div>
        </h2>

        </div>
        <div>
          
        <div className="ui form">
        <div className="field">
        <h3 className='ui header'>Content</h3>
        <div className="ui input">
          <input onChange={(e) => this.setState({ subject: e.target.value})} value={this.state.subject} className='subjectInput' placeholder='Subject...'></input>
        </div>
        </div>
  


          <div className="field">
          <textarea id="textarea" className='messageInput' placeholder='Enter your message here...' value={this.state.input} onChange={e => this.setState({ input: e.target.value })}></textarea> 
          </div>
          </div>
        </div>
        
        <div>
        <h3 className='ui header headPad'>Method</h3>
          <div className="ui list">
            <div className='item'>
          <div className="ui toggle checkbox item">
          <input onChange={(e) => this.setState({ text: e.target.checked })} value={this.state.text} type="checkbox" />
          <label>Text message</label>
          </div>
          </div>
          <div className='item'>
          <div className="ui toggle checkbox">
        <input onChange={(e) => this.setState({ email: e.target.checked })} value={this.state.email} type="checkbox" />
        <label>Email</label>
          </div>
          </div>
          <div className='item'>
          <div className="ui toggle checkbox">
          <input onChange={(e) => this.setState({ push: e.target.checked })} value={this.state.push} type="checkbox" />
        <label>Push Notification</label>
          </div>
          </div>
          </div>
        </div>



        <hr id="break"></hr>
        <div>
          <h3 className="ui header">Set Time</h3>
     
                  <input id="radio" type="radio"  name="schedule" value='now' onClick={(e) => this.setState({ send: e.target.value })}></input>
                    <label>Now</label>
              </div>
                <input id="radio" type="radio" name="schedule" value="schedule" onClick={(e) => this.setState({ send: e.target.value })}></input>
                   <label>Schedule</label>
        
        {this.state.send === 'schedule' && (
          <div id="dateTime">

              < DateForm changeTime = {this.changeTime} changeDate={this.changeDate} />
              <div className="itempad"> 
              < DropdownExampleSelection changeFrequency={this.changeFrequency}  />
              </div>
              
  
          </div>
        )}
        <div id="send">
          <Link to='/scheduled'><button className='ui basic button' id="sendBtn" onClick={this.sendData}>SEND</button></Link>
        </div>
      </div>
    )
  }
}

export default NewMessage
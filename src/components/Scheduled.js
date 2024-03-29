import React from 'react'
import ConfirmExampleConfirm from './Confirm'
import ModalModalExample from './Modal'

let itemStyle = {
display: 'inline-flex',
float: 'right'
}

class Scheduled extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      input: '',
      text: false,
      email: false,
      push: false,
      send: 'now',
      date: '',
      time: '',
      frequency: '',
      subject: '',
    }
  }
  showModal = () => {
    this.setState({
      show: true
    })
  }
  hideModal = () => {
    this.setState({
      show: false
    })
  }
  delete = (index) => {
    this.props.deleteMessages(index)
  }
  modal = (item) => {              // Passing this function down to use as props in the Child component
    this.setState({
      input: item.input,
      text: item.text,
      email: item.email,
      push: item.push,
      send: item.send,
      date: item.date,
      time: item.time,
      frequency: item.frequency,
      subject: item.subject
    })
    console.log(item.input)     
  }


  render() {
    return (
      <div className='bodyPad'>
        <div className='pad'>
          <h2 className="ui header">
            <i className="calendar alternate icon"></i>
            <div className="content">
              Scheduled
            </div>
          </h2>

        </div>
        {this.props.messages.map((item, index) =>
          <div className='itemPad' key={index}>
            <div className="ui vertical fluid menu ">
              <div className="item">
                {item.input}
                {/* <i onClick={()=>this.props.deleteMessages(index)} className="trash alternate outline icon"></i> */}
                <div style={itemStyle}>
                <ConfirmExampleConfirm delete={this.delete} />
                <ModalModalExample showText={this.state} modal={() => this.modal(item)} />   
                </div>
                {/* // now the modal is actually taking in this items specific inputs and state */}


                {/* <i onClick={() => {
                  this.setState({
                    input: item.input,
                    text: item.text,
                    email: item.email,
                    push: item.push,
                    send: item.send,
                    date: item.date,
                    time: item.time,
                    frequency: item.frequency,
                  })
                  this.showModal()
                  console.log(this.state.input)
                }

                } class="envelope open outline icon" ></i> */}


              </div>

            </div>
          </div>

        )}
        {/* <Modal show={this.state.show} handleClose={this.hideModal}>
          <div>
            <h1>{this.state.input}</h1>


          </div>
          <br />
          <div className='fluid ui horizontal menu'>
            <div className='item'>
              Send Method: {this.state.text ? 'Text' : ''}
              {this.state.email ? 'Email' : ''}
              {this.state.push ? 'Push' : ''}
            </div>
          </div>
        </Modal> */}
      </div>
    )
  }
}

export default Scheduled
import React from 'react'

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className='ui button' style={{ textAlign: 'center' }} onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

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
    }

  }
showModal =() => {
        this.setState({
          show: true
        })
}

hideModal = () => {
        this.setState({
          show: false
        })
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
            <div className="item" >
            {item.input}
            
            <i onClick={()=>this.props.deleteMessages(index)} className="trash alternate outline icon"></i>

            <i onClick={ ()=>{
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
            }
            
              } class="envelope open outline icon" ></i>

              
            </div>
          
          </div>
          </div>
          
        )}
        <Modal show={this.state.show} handleClose={this.hideModal}>
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
        </Modal>
      </div>
    )
  }
}

export default Scheduled
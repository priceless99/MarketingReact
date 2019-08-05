import React from 'react'
import { Header, Modal, Icon } from 'semantic-ui-react'

class ModalModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  details = (item) => {
    this.setState({ open: true })
    this.props.modal(item)                    // using the function in parent component, passing it down as prop
    // to setState of the users input,
  }
  envelopeIcon = () => (
    <div>
      <Icon name='envelope open outline icon' />
    </div>
  )

  render() {
    return (

      <Modal trigger={<i onClick={this.details}><this.envelopeIcon /></i>} closeIcon >
        <Modal.Content image>
          <Modal.Description>
            <Header>Subject: {this.props.showText.subject}</Header>
            <h4>Message: {this.props.showText.input}</h4>
            <p> Send Method: {this.props.showText.text ? 'Text' : ''},
                          {this.props.showText.email ? 'Email' : ''}
              {this.props.showText.push ? 'Push' : ''}
            </p>
            <p>Schedule: {this.props.showText.send === 'now' ? 'Now' : `${this.props.showText.date} at ${this.props.showText.time} ${this.props.showText.frequency} `} </p>

            {/* // attempt at returning JSX to this child Component but can't pass through
                                              current state to show user input, email, etc. */}

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalModalExample
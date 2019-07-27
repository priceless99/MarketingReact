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
            <Header>{this.props.showText.input}</Header>

           <p> Send Method: {this.props.showText.text ? 'Text' : ''},
                          {this.props.showText.email ? 'Email' : ''}
                          {this.props.showText.push ? 'Push' : ''}
          </p>

            {/* // attempt at returning JSX to this child Component but can't pass through
                                              current state to show user input, email, etc. */}

            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalModalExample
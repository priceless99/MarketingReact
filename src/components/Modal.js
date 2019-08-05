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


            <p>
              <span className="bold">Message:</span>  {this.props.showText.input}

            </p>

            <p> <span className="bold">Send Method:</span> {this.props.showText.text ? 'Text' : ''} &nbsp;
                          {this.props.showText.email ? 'Email' : ''} &nbsp;
                          {this.props.showText.push ? 'Push' : ''}
            </p>


            <p>
              {this.props.showText.send === 'now' ? "Schedule: Now" :
                <div> <span className="bold">Time:</span>&nbsp;
            {this.props.showText.time}
                  <div>
                    <span className="bold">Frequency: </span>  &nbsp;
            {this.props.showText.frequency}</div>
                </div>

              }
            </p>
            {/* // attempt at returning JSX to this child Component but can't pass through
                                              current state to show user input, email, etc. */}

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ModalModalExample
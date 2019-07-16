import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

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

  render() {
    return (

      <Modal trigger={<Button onClick={this.details}>SHOW</Button>} >
        <Modal.Content image>
          <Modal.Description>
            <Header>Default Profile Image</Header>


            <h1>{this.props.showText.input}</h1>
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
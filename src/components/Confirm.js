import React, { Component } from 'react'
import { Confirm, Icon } from 'semantic-ui-react'

class ConfirmExampleConfirm extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  confirm = () => { 

    this.setState({ 
      open: false
     })

     this.props.delete()

  }
  trashIcon = () => (
    <div>
      <Icon name='trash alternate outline' />
    </div>
  )
  

  render() {
    return (
      <div>
        <i onClick={this.open}><this.trashIcon /></i>
        
        <Confirm size="fullscreen" open={this.state.open} onCancel={this.close} onConfirm={this.confirm} />
      </div>
    )
  }
}

export default ConfirmExampleConfirm
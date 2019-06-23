import React from 'react'

class Scheduled extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      text: false,
      email: false,
      push: false,
      now: false,
      schedule: false,
    }
  }
  render() {
    return (
      <div>
        Scheduled
      </div>
    )
  }
}

export default Scheduled
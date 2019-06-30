import React from 'react'

class Scheduled extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        {this.props.messages.map((item, index) =>
          <div key={index}>
            {item.input}
          </div>
        )}
      </div>
    )
  }
}

export default Scheduled
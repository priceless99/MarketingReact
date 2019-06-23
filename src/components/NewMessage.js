import React from 'react'

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  render() {
    return (
      <div>
        <div><textarea value={this.state.input} onChange={e => this.setState({ input: e.target.value })} cols="30" rows="10"></textarea>
        </div>
        <div>
          <h2>Send to:</h2>
        </div>
      </div>
    )
  }
}

export default NewMessage
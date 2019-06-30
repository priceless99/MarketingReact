import React from 'react'

class CustomerDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingDetails: false
    }
  }
  render() {
    return (
      <div>
        <p onClick={() => this.state.showingDetails ? this.setState({ showingDetails: false }) : this.setState({ showingDetails: true })}>{this.props.name}</p>
        {this.state.showingDetails && (
          <div>
            <p>Full Name: {this.props.name}</p>
            <p>Phone Number: {this.props.phonenumber}</p>
            <p>Email: {this.props.email}</p>
          </div>
        )}
      </div>
    )
  }
}

export default CustomerDetails
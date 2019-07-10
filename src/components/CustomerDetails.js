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
            <div className="ui card">
              <div className="content">
                <div className="header">{this.props.name}</div>
                <div className="meta">Phone Number: {this.props.phonenumber}</div>
                <div className="description">
                  Email: {this.props.email}
                </div>
              </div>
  </div>
        )}
      </div>
    )
  }
}

export default CustomerDetails
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
        <p onClick={() => this.state.showingDetails ? this.setState({ showingDetails: false }) : this.setState({ showingDetails: true })}>{this.props.item.name}</p>
        {this.state.showingDetails && (
          <div className="ui card">
            <div className="content">
              <div className="header">{this.props.item.name}</div>
              <div className="meta">Phone Number: {this.props.item.phonenumber}</div>
              <div className="description">
                Phone Opt In: {this.props.item.phoneoptin ? "Yes" : "No"}
              </div>
              <div className="description">
                Email: {this.props.item.email}
              </div>
              <div className="description">
                Email Opt In: {this.props.item.emailoptin ? "Yes" : "No"}
              </div>
              <div className="description">
                App Download: {this.props.item.appoptin ? "Yes" : "No"}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CustomerDetails
import React from 'react'
import CustomerDetails from './CustomerDetails'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCustomer: false,
    }
  }
  render() {
    return (
      <div>
        <h2>Databases:</h2>
        <div>
          <button onClick={() => this.state.showCustomer ? this.setState({ showCustomer: false }) : this.setState({ showCustomer: true })}>Customers</button>
          {this.state.showCustomer && this.props.customers.map((item, index) =>
            <CustomerDetails key={index} name={item.name} phonenumber={item.phonenumber} email={item.email} />
          )}
        </div>

      </div>
    )
  }
}

export default Home
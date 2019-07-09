import React from 'react'
import CustomerDetails from './CustomerDetails'

class Homes extends React.Component {
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
          <button className="ui basic button " onClick={() => this.state.showCustomer ? this.setState({ showCustomer: false }) : this.setState({ showCustomer: true })}>Customers</button>
         <div className="ui fluid vertical menu"> {this.state.showCustomer && this.props.customers.map((item, index) =>
            <div className="item"><CustomerDetails key={index} name={item.name} phonenumber={item.phonenumber} email={item.email} /> </div>
          )}
          </div>
        </div>

      </div>
    )
  }
}

export default Homes
import React from 'react'
import {
    DateInput,
    TimeInput,
    // DateTimeInput,
    // DatesRangeInput
  } from 'semantic-ui-calendar-react';

  export class DateForm extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        date: '',
        time: '',
        // dateTime: '',
        // datesRange: ''
      };
    }
   
    handleChange = (event, {name, value}) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({ [name]: value });
      }
      this.props.changeDate(value)
    }
    handleChange1 = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
        this.props.changeTime(value)
      }
   
    render() {
      return (
          <form>
          <DateInput
            name="date"
            closable = 'false'
            placeholder="Date"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
          />
          <TimeInput
            name="time"
            placeholder="Time"
            closable = 'false'
            value={this.state.time}
            iconPosition="left"
            onChange={this.handleChange1}
          />
          {/* <DateTimeInput
            name="dateTime"
            placeholder="Date Time"
            value={this.state.dateTime}
            iconPosition="left"
            onChange={this.handleChange}
          />
          <DatesRangeInput
            name="datesRange"
            placeholder="From - To"
            value={this.state.datesRange}
            iconPosition="left"
            onChange={this.handleChange}
          /> */}
          </form>
      );
    }
  }
  export default DateForm
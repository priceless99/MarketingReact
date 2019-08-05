import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const FrequencyOptions = [
  {
    text: 'One Time',
    value: 'Once',
  },
  {
    text: 'Weekly',
    value: 'Weekly',
  },
  {
    text: 'Monthly',
    value: 'Monthly',
  },
 
]

const DropdownExampleSelection = (props) => {
    const handleOnChange = (e, data) => {
    props.changeFrequency(data.value)
 }
    return(
  <Dropdown
    placeholder='Frequency'
    fluid
    selection
    options={FrequencyOptions}
    onChange={handleOnChange}
  />
)
    }
export default DropdownExampleSelection


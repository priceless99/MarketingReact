import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const FrequencyOptions = [
  {
    text: 'One Time',
    value: 'oncetime',
  },
  {
    text: 'Weekly',
    value: 'weekly',
  },
  {
    text: 'Monthly',
    value: 'monthly',
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


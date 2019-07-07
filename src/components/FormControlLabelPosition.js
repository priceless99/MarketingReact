import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import '../FormControlLabelPos.css';

function FormControlLabelPosition() {
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <table>
            <th><h3>Text</h3></th>
            <th><FormControlLabel
              value="Text"
              control={<Switch color="primary" />}
              labelPlacement="start"
            /></th>
            <tr>
                <td><h3>Email</h3></td>
                <td><FormControlLabel
              value="Email"
              control={<Switch color="primary" />}
              labelPlacement="start"
            /></td>
            </tr>
            <tr>
                <td><h3>Push Notification</h3></td>
                <td><FormControlLabel
              value="Push Notification"
              control={<Switch color="primary" />}
              labelPlacement="start"
            /></td>
            </tr>
        </table>
      </FormGroup>
    </FormControl>
  );
}

export default FormControlLabelPosition;

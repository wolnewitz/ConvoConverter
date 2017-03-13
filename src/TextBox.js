import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const textAreaStyles = {
  height: '500px',
}

const TextBox = ({convo, handleConvoChange}) =>
  <FormGroup controlId="formControlsTextarea">
    <ControlLabel>Convo</ControlLabel>
    <FormControl
      style={textAreaStyles}
      componentClass="textarea"
      placeholder="Paste and edit conversation here..."
      value={convo}
      onChange={(e) => handleConvoChange(e)}
    />
  </FormGroup>;

export default TextBox;

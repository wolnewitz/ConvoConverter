import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

const ReplaceText = ({nameBox, newName, submitTextForm, handleTextChange}) => {
  return (
    <Form onSubmit={(e)=>submitTextForm(e)}>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl
          name="nameBox"
          value={nameBox}
          type="text"
          placeholder="Original"
          onChange={(e)=>handleTextChange(e)}
        />
      </FormGroup>
      {' '}
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Change To:</ControlLabel>
        {' '}
        <FormControl
          placeholder="Replacement"
          name="newName"
          value={newName}
          type="text"
          onChange={(e)=>handleTextChange(e)}
        />
      </FormGroup>
      {' '}
      <Button type="submit">
        Replace!
      </Button>
    </Form>
  );
}

export default ReplaceText;

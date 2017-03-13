import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

const ReplaceText = ({}) => {
  return (
    <Form>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl type="text" placeholder="Original" />
      </FormGroup>
      {' '}
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Change To:</ControlLabel>
        {' '}
        <FormControl placeholder="Replacement" />
      </FormGroup>
      {' '}
      <Button>
        Replace!
      </Button>
    </Form>
  );
}

export default ReplaceText;

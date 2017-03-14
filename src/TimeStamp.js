import React from 'react';
import { Button } from 'react-bootstrap';

const TimeStamp = ({removed, removeClick}) => {
  if(!removed) {
    return <Button
      style={{margin: '10px 0'}}
      className="btn-danger"
      onClick={() => removeClick()}
    >
      Remove Timestamps
    </Button>
  }
  return null;
}

export default TimeStamp;

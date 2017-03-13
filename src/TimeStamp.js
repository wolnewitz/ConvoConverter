import React from 'react';
import { Button } from 'react-bootstrap';

const TimeStamp = ({removed}) => {
  if(!removed) {
    return <Button
      style={{margin: '10px 0'}}
      className="btn-danger"
    >
      Remove TimeStamps
    </Button>
  }
  return null;
}

export default TimeStamp;

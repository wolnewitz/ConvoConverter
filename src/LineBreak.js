import React from 'react';
import { Checkbox } from 'react-bootstrap';

const LineBreak = ({checkLineBreakBox, breakBoxChecked}) =>
  <Checkbox
    onChange={(e) => checkLineBreakBox(e)}
    value={breakBoxChecked}
  >
    Line Breaks
  </Checkbox>;

export default LineBreak;

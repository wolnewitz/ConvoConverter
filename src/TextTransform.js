import React from 'react';
import ReplaceText from './ReplaceText';
import TimeStamp from './TimeStamp';
import LineBreak from './LineBreak';

const TextTransform = ({removed}) => {
  return (
    <div class="container">
      <ReplaceText />
      <TimeStamp removed={removed} />
      <LineBreak />
    </div>
  );
}

export default TextTransform;

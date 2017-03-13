import React from 'react';
import ReplaceText from './ReplaceText';
import TimeStamp from './TimeStamp';

const TextTransform = ({removed}) => {
  return (
    <div class="container">
      <ReplaceText />
      <TimeStamp removed={removed} />
    </div>
  );
}

export default TextTransform;

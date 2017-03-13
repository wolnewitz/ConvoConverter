import React from 'react';
import ReplaceText from './ReplaceText';
import TimeStamp from './TimeStamp';
import LineBreak from './LineBreak';

const TextTransform = ({removed, nameBox, replaceName, handleTextChange, submitTextForm}) => {
  return (
    <div class="container">
      <ReplaceText
        nameBox={nameBox}
        replaceName={replaceName}
        submitTextForm={submitTextForm}
        handleTextChange={handleTextChange}
      />
      <TimeStamp removed={removed} />
      <LineBreak />
    </div>
  );
}

export default TextTransform;

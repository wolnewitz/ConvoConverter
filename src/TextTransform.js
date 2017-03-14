import React from 'react';
import ReplaceText from './ReplaceText';
import TimeStamp from './TimeStamp';
import LineBreak from './LineBreak';

const TextTransform = ({removed, nameBox, newName, handleTextChange, submitTextForm}) => {
  return (
    <div>
      <ReplaceText
        nameBox={nameBox}
        newName={newName}
        submitTextForm={submitTextForm}
        handleTextChange={handleTextChange}
      />
      <TimeStamp removed={removed} />
      <LineBreak />
    </div>
  );
}

export default TextTransform;

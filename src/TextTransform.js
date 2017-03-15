import React from 'react';
import ReplaceText from './ReplaceText';
import TimeStamp from './TimeStamp';
import LineBreak from './LineBreak';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Glyphicon, Button } from 'react-bootstrap';

const copyFlashStyle = {
  color: 'red',
  marginLeft: '10px',
}

const TextTransform = ({removed, nameBox, newName, handleTextChange, submitTextForm, removeClick, checkLineBreakBox, breakBoxChecked, handleCopy, copied, convo}) => {
  return (
    <div>
      <ReplaceText
        nameBox={nameBox}
        newName={newName}
        submitTextForm={submitTextForm}
        handleTextChange={handleTextChange}
      />
      <TimeStamp
        removed={removed}
        removeClick={removeClick}
      />
      <LineBreak
        checkLineBreakBox={checkLineBreakBox}
        breakBoxChecked={breakBoxChecked}
      />
      <CopyToClipboard
        text={convo}
        onCopy={() => handleCopy()}
      >
        <Button className="btn-primary">Copy<Glyphicon
            glyph="copy"
            style={{padding: '3px'}}
          />
        </Button>
      </CopyToClipboard>
      { copied ? <span style={copyFlashStyle}>Copied To Clipboard!</span> : null }
    </div>
  );
}

export default TextTransform;

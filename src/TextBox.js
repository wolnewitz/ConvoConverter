import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FormGroup, FormControl, ControlLabel, Glyphicon } from 'react-bootstrap'

const textAreaStyles = {
  height: '500px',
}

const TextBox = ({convo, handleConvoChange, handleCopy, copied}) =>
  <FormGroup controlId="formControlsTextarea">
    <ControlLabel>Convo</ControlLabel>
    { copied ? <span>Copied To Clipboard!</span> : null }
    <CopyToClipboard
      text={convo}
      onCopy={() => handleCopy()}
    >
      <Glyphicon
        glyph="copy"
        style={{marginLeft: '390px', display: 'inline-block'}}
      />
    </CopyToClipboard>
    <FormControl
      style={textAreaStyles}
      componentClass="textarea"
      placeholder="Paste Skype conversation here"
      value={convo}
      onChange={(e) => handleConvoChange(e)}
    />
  </FormGroup>;

export default TextBox;

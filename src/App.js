import React, { Component } from 'react';
import { Col, PageHeader, Grid, Row } from 'react-bootstrap'
import TextBox from './TextBox';
import TextTransform from './TextTransform';
import replaceName from './replaceName';
import removeTimestamps from './removeTimestamps';
import insertLineBreaks from './insertLineBreaks';
import removeLineBreaks from './removeLineBreaks';

class App extends Component {
  state = {
    convo: '',
    nameBox: '',
    newName: '',
    timeStampsRemoved: false,
    breakBoxChecked: false,
  };

  handleConvoChange = (e) => {
    if (e.target.value === '') {
      this.setState({
        timeStampsRemoved: false,
        breakBoxChecked: false,
        convo: e.target.value,
      })
    } else {
      this.setState({convo: e.target.value});
    }
  }

  handleTextChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitTextForm = (e) => {
    e.preventDefault();
    const { convo, nameBox, newName } = this.state;
    const newConvo = replaceName(convo, nameBox, newName);
    this.setState({
      convo: newConvo,
      nameBox: '',
      newName: '',
      breakBoxChecked: false,
    });
  }

  removeClick = (e) => {
    if (!this.state.convo.length) { return; }
    this.setState({
      timeStampsRemoved: true,
      convo: removeTimestamps(this.state.convo),
    })
  }

  checkLineBreakBox = (e) => {
    if (!this.state.breakBoxChecked) {
      this.setState({
        convo: insertLineBreaks(this.state.convo, this.state.timeStampsRemoved),
        breakBoxChecked: !this.state.breakBoxChecked,
      })
    } else {
      this.setState({
        convo: removeLineBreaks(this.state.convo),
        breakBoxChecked: !this.state.breakBoxChecked,
      })
    }
  }

  render() {
    const {
      timeStampsRemoved,
      nameBox,
      newName,
      breakBoxChecked
    } = this.state;

    return (
      <Grid>
        <Row>
          <PageHeader className="text-center text-primary">Convo Converter</PageHeader>
          <Col xs={8} md={8}>
            <TextBox
              convo={this.state.convo}
              handleConvoChange={this.handleConvoChange}
            />
          </Col>
          <Col xs={4} md={4}>
            <TextTransform
              removed={timeStampsRemoved}
              nameBox={nameBox}
              newName={newName}
              handleTextChange={this.handleTextChange}
              submitTextForm={this.submitTextForm}
              removeClick={this.removeClick}
              checkLineBreakBox={this.checkLineBreakBox}
              breakBoxChecked={breakBoxChecked}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

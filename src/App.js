import React, { Component } from 'react';
import { Col, PageHeader, Grid, Row } from 'react-bootstrap'
import TextBox from './TextBox';
import TextTransform from './TextTransform';
import replaceName from './replaceName';
import removeTimestamps from './removeTimestamps';

class App extends Component {
  state = {
    convo: '',
    nameBox: '',
    newName: '',
    timeStampsRemoved: false,
  };

  handleConvoChange = (e) => {
    this.setState({convo: e.target.value});
  }

  handleTextChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitTextForm = (e) => {
    e.preventDefault();
    const { convo, nameBox, newName } = this.state;
    const newConvo = replaceName(convo, nameBox, newName);
    this.setState({convo: newConvo});
  }

  removeClick = () => {
    this.setState({
      timeStampsRemoved: true,
      convo: removeTimestamps(this.state.convo),
    })
  }

  render() {
    const { timeStampsRemoved, nameBox, newName }= this.state;
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
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

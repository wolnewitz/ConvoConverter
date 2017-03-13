import React, { Component } from 'react';
import { Col, PageHeader, Grid, Row } from 'react-bootstrap'
import TextBox from './TextBox';
import TextTransform from './TextTransform';

class App extends Component {
  state = {
    convo: '',
    nameBox: '',
    replaceName: '',
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
    console.log('form submitted')
  }

  render() {
    const { timeStampsRemoved, nameBox, replaceName }= this.state;
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
              replaceName={replaceName}
              handleTextChange={this.handleTextChange}
              submitTextForm={this.submitTextForm}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Col, PageHeader, Grid, Row } from 'react-bootstrap'
import TextBox from './TextBox';
import TextTransform from './TextTransform';

class App extends Component {
  state = {
    convo: '',
    timeStampsRemoved: false,
  };

  handleConvoChange = (e) => {
    this.setState({convo: e.target.value});
  }

  render() {
    const { timeStampsRemoved } = this.state;
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
            <TextTransform removed={timeStampsRemoved}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

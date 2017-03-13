import React, { Component } from 'react';
import { Col, PageHeader, Grid, Row } from 'react-bootstrap'
import TextBox from './TextBox';

class App extends Component {
  state = {
    convo: ''
  };

  handleConvoChange = (e) => {
    console.log('this', this, 'e', e);
    this.setState({convo: e.target.value});
  }

  render() {
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
            right column
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

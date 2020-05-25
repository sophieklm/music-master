import React from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  search() {
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Music Master</header>
        <div>
          <FormGroup>
            <InputGroup>
              <FormControl
                value={this.state.query}
                onChange={(event) => {
                  this.setState({ query: event.target.value });
                }}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    this.search();
                  }
                }}
                type="text"
                placeholder="Search for an artist"
              />
              <Button onClick={() => this.search()}>Search</Button>
            </InputGroup>
          </FormGroup>
          <div className="gallery">Gallery</div>
          <div className="profile">
            <div>Name</div>
            <div>Picture</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

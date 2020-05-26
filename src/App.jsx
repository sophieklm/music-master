import React from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import request from 'request';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  async search() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;

    const auth = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'client_credentials',
      },
      json: true,
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(client_id + ':' + client_secret).toString('base64'),
      },
    };

    const BASE_URL = 'https://api.spotify.com/v1/search';
    const FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;

    request.post(auth, async (error, response, body) => {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: FETCH_URL,
          headers: {
            Authorization: 'Bearer ' + token,
          },
          json: true,
        };
        request.get(options, (error, response, body) => {
          const artist = body.artists.items[0];
          this.setState({ artist });
        });
      }
    });
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

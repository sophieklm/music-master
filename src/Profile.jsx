import React from 'react';

class Profile extends React.Component {
  renderArtist() {
    if (this.props.artist) {
      return (
        <div className="profile">
          <img
            alt="Profile"
            className="profile-image"
            src={this.props.artist.images[0].url}
          />
          <div>{this.props.artist.name}</div>
          <div>{this.props.artist.followers.total}</div>
          <div>
            {this.props.artist.genres.map((genre, k) => {
              const genres = this.props.artist.genres;
              genre =
                genre !== genres[genres.length - 1]
                  ? ` ${genre},`
                  : ` ${genre}`;
              return <span key={k}>{genre}</span>;
            })}
          </div>
        </div>
      );
    }
    return;
  }

  render() {
    return <div>{this.renderArtist()}</div>;
  }
}

export default Profile;

import React from 'react';

class Profile extends React.Component {
  renderImage() {
    if (this.props.artist.images[0]) {
      return (
        <img
          alt="Profile"
          className="profile-image"
          src={this.props.artist.images[0].url}
        />
      );
    }
  }
  renderArtist() {
    if (this.props.artist) {
      return (
        <div className="profile">
          {this.renderImage()}
          <div className="profile-info">
            <div className="profile-name">{this.props.artist.name}</div>
            <div className="profile-followers">
              Followers: {this.props.artist.followers.total}
            </div>
            <div className="profile-genres">
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

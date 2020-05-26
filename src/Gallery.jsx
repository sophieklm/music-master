import React from 'react';

class Gallery extends React.Component {
  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map((track, k) => {
          const image = track.album.images[0].url;
          return (
            <div key={k} className="track">
              <img src={image} className="track-image" alt="track" />
              <p className="track-text">{track.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;

/**
 * Module dependencies
 */

var React = require('react');
var SoundCloud = require('../');

var url = 'https://soundcloud.com/hucci/hucci-cashmere';
var url2 = 'https://soundcloud.com/hucci/g-frsh-panic-cord-prod-hucci';

var Example = React.createClass({
  getInitialState: function() {
    return {
      url: url
    };
  },

  _changeUrl: function() {
    var newUrl = this.state.url === url ? url2 : url;
    this.setState({url: newUrl});
  },

  _onPlayerReady: function() {
    console.log('PLAYER READY');
  },

  _onVideoReady: function() {
    console.log('VIDEO READY');
  },

  _onPlay: function() {
    console.log('PLAYING');
  },

  _onPause: function() {
    console.log('PAUSED');
  },

  _onEnd: function() {
    console.log('ENDED');
  },

  render: function() {
    var visualOpts = {
      visual: true
    };

    return (
      <div className='example'>
        <SoundCloud url={this.state.url} 
                    opts={visualOpts}
                    onPlay={this._onPlay} 
                    onPause={this._onPause}
                    onEnd={this._onEnd} />

        <div className='changeUrl'>
          <button onClick={this._changeUrl}>Change url</button>
        </div>
      </div>
    );
  }
});

/**
 * Render Example
 */

React.render(<Example />, document.querySelector('section.content'));
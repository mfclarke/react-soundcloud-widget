/**
 * Module dependencies
 */

var React = require('react');
var SoundCloud = require('../');

var url = 'https://soundcloud.com/sylvanesso/coffee';
var url2 = 'https://soundcloud.com/diplo/ty-dolla-ign-stand-for-prod-diplo';

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
    return (
      React.createElement("div", {className: "example"}, 
        React.createElement(SoundCloud, {
          url: this.state.url, 
          onPlay: this._onPlay, 
          onPause: this._onPause, 
          onEnd: this._onEnd,
          opts: {
            visual: true
          }
        }), 

        React.createElement("div", {className: "changeUrl"}, 
          React.createElement("button", {onClick: this._changeUrl}, "Change url")
        )
      )
    );
  }
});

/**
 * Render Example
 */

React.render(React.createElement(Example, null), document.querySelector('section.content'));

var React = require('react');
var ReactDom = require('react-dom');

var reactWaveSurfer = React.createClass({
  getInitialState: function(){
    return ({
      song: this.props.song,
      playing: this.props.playing
    });
  },
  componentDidMount: function () {
    this.setState({visual: this.initWavesurfer()});
  },
  componentWillReceiveProps: function(nextProps) {
    this.state.visual.playPause();
    this.setState({
      playing: nextProps.playing
    });
  },
  initWavesurfer: function () {
    var visualContainer = ReactDom.findDOMNode(this.refs.waveContainer);
    var visual = WaveSurfer.create({
      container: visualContainer,
      waveColor: 'blue',
      progressColor: 'purple',
      barWidth: '3',
      height: "90",
      maxCanvasWidth: 200
    });
    visual.load(this.state.song.audio_url);
    return visual;
  },
  render: function () {
    return <div className="wave-surfer" ref="waveContainer" ></div>;
  }
});

module.exports = reactWaveSurfer;

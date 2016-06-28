var React = require('react');
var ReactDom = require('react-dom');

var reactWaveSurfer = React.createClass({
  getInitialState: function(){
    return ({
      song: this.props.song
    });
  },
  componentDidMount: function () {
    this.initWavesurfer();
  },
  initWavesurfer: function () {
    var visualContainer = ReactDom.findDOMNode(this.refs.waveContainer);
    var visual = WaveSurfer.create({
      container: visualContainer,
      waveColor: 'Violet',
      progressColor: 'purple',
      barWidth: '3',
      height: "90",
      maxCanvasWidth: 200
    });
    visual.load(this.state.song.audio_url);
    // var track = this.props.track;
    // var height = 128;
    // var visible = true;
    //
    // var containerClass = "wave-" + track.id;
    // var container = $(containerClass)[0];
    //
    // var this.wavesurfer = WaveSurfer.create({
    //   container: container,
    //   height: height,
    //   visible: visible
    // });
    //
    // this.wavesurfer.load(track.audio_url);
  },
  render: function () {
    return <div className="wave-surfer" ref="waveContainer" ></div>;
  }
});

module.exports = reactWaveSurfer;

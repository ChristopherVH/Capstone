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
    this.setState({visual: this.initWavesurfer(this.props.song.audio_url)});
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.song !== this.state.song){
      this.setState({song: nextProps.song});
      this.state.visual.destroy();
      var newWave = this.initWavesurfer(nextProps.song.audio_url);
      this.setState({visual : newWave});
      newWave.on('ready', function(){
        newWave.playPause();
      });
    }else {
      this.state.visual.playPause();
    }
    this.setState({
      playing: nextProps.playing
    });
  },
  initWavesurfer: function (audio_url) {
    var visualContainer = ReactDom.findDOMNode(this.refs.waveContainer);
    var visual = WaveSurfer.create({
      container: visualContainer,
      waveColor: 'blue',
      progressColor: 'purple',
      barWidth: '3',
      height: "90",
      maxCanvasWidth: 200
    });
    visual.load(audio_url);
    return visual;
  },
  componentWillUnmount: function(){
    this.state.visual.destroy();
  },
  render: function () {
    return <div className="wave-surfer" ref="waveContainer" ></div>;
  }
});

module.exports = reactWaveSurfer;

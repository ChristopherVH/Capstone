var React = require('react');
var ReactDom = require('react-dom');

var reactWaveSurfer = React.createClass({
  getInitialState: function(){
    return ({
      song: this.props.song,
      playing: this.props.playing,
      loading: true
    });
  },
  componentDidMount: function () {
    this.setState({visual: this.initWavesurfer(this.props.song.audio_url)});
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.song.title !== this.state.song.title){
      this.setState({song: nextProps.song});
      this.state.visual.destroy();
      var newWave = this.initWavesurfer(nextProps.song.audio_url);
      this.setState({visual : newWave});
      if (nextProps.song.playlist_id !== undefined){
        newWave.on('ready', function(){
          newWave.playPause();
        });
      }
    }else if(nextProps.playing === true){
      this.state.visual.play();
    }else if(nextProps.playing === false && this.state.playing === true){
      this.state.visual.pause();
    }
    this.setState({
      playing: nextProps.playing
    });
  },
  initWavesurfer: function (audio_url) {
    var that = this;
    var visualContainer = ReactDom.findDOMNode(this.refs.waveContainer);
    var visual = WaveSurfer.create({
      container: visualContainer,
      waveColor: '#007DFF',
      progressColor: '#BB16F0',
      barWidth: '3',
      height: "90",
      maxCanvasWidth: 200
    });
    visual.load(audio_url);
    visual.on('ready', function(){
      that.setState({loading: false});
    });
    return visual;
  },
  loadingAnimation: function(){
    if (this.state.loading){
      return(
        <div className="cs-loader">
          <div className="cs-loader-inner">
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
            <label>	●</label>
          </div>
        </div>);
      }
  },
  componentWillUnmount: function(){
    this.state.visual.destroy();
  },
  render: function () {
    return (<div classname="surfer-and-animation-container">
      {this.loadingAnimation()}
      <div className="wave-surfer" ref="waveContainer" ></div>
    </div>
      );
  }
});

module.exports = reactWaveSurfer;

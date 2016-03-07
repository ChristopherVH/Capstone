var React = require('react');

 WaveSurfer = React.createClass({
  componentDidMount: function () {
  },
  _initWavesurfer: function () {
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
    return <div className={"wave-" + this.props.track.id }></div>;
  }
});

module.exports = WaveSurfer;

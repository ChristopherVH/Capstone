var React = require('react');
var SongStore = require("../stores/SongStore.js");
var ApiUtil = require("../util/apiUtil.js");
var Collection = require("./Collection.jsx");

var Greeting = React.createClass({
  render: function(){
    return(
      <div>
        <ul className="greeting-page">
          <div className="greeting-vid">
            <div className="move-up">
              <video width="100%" autoPlay>
                <source src="http://mazwai.com/system/posts/videos/000/000/005/original/marc_lorenz--sky_cloudy_time-lapse.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
          <Collection/>
        </ul>
      </div>
    )
  }
})

module.exports = Greeting;

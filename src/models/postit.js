// postit.js
import Backbone from 'backbone';

var Postit = Backbone.Model.extend({
  defaults: {
    color: "#000000",
    text: ""
  }
});


export default Postit;

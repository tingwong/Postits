// postit.js
import Backbone from 'backbone';

var Postit = Backbone.Model.extend({
  defaults: {
    "text": "Default Post-it Text",
    "color": "#AC1200"
  }
});

export default Postit;

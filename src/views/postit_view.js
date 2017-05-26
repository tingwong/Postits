import Backbone from 'backbone';
import Postit from '../models/postit.js';
import _ from 'underscore';
import $ from 'jquery';

var PostitView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

  },
  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default PostitView;

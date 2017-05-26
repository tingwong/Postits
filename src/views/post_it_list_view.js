import Backbone from 'backbone';
import Postit from '../models/postit.js';
import PostitView from './postit_view.js';
import _ from 'underscore';
import $ from 'jquery';

var PostItListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "update", this.render);
  },
  render: function(){
    console.log("rendering");
    var that = this;
    that.$('#postits').empty();
    this.model.each(function(task) {
      var postItView = new PostitView({
          template: that.template,
          model: task
        });
      that.$('#postits').append(postItView.render().$el);
    });


    return this;
  },
  events: {
    'click button.button': "addPostit"
  },
  getFormFields: function() {
    // Get the values from the fields
        var formText = this.$('#text').val();
        this.$('#text').val('');

        var formColor = this.$('#color').val();
        this.$('#color').val('#ffff88');

        return {
          text: formText,
          color: formColor
        };
  },
  addPostit: function() {
    console.log("adding");
    var postIt = new Postit(this.getFormFields());
    console.log("Adding to PostIt to collection");
    this.model.add(postIt);
  }
});

export default PostItListView;

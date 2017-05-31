import _ from 'underscore';
import $ from 'jquery';
import 'jquery-colpick';

import Postit from 'models/postit';
import PostitList from 'collections/postit_notes';

var postitTemplate;
var postitList;

var postitData = [{
  text: "Backbone is a library not a Framework.",
  color: "#AC1200"
},
{
  text: "That means it doesn't dictate to you how the code is structured",
  color: "#752310"
}];

var readPostitForm = function() {
  var textData = $('#text').val();
  $('#text').val('');

  var colorData = $('#color').val();
  $('#color').val('');

  var formData = {};
  if (textData && textData != "") {
    formData["text"] = textData
  }
  if (colorData && colorData != "") {
    formData["color"] = colorData
  }
  return formData;
};

var render = function(postit) {
  var jsonPostit = postit.toJSON();
  var generatedHTML = postitTemplate(jsonPostit);

  $('#postits').append(generatedHTML);
};

var renderList = function(postitList) {
  // Clear the unordered list
  $('#postits').empty();

  // Iterate through the list rendering each Task
  postitList.each(function(postit) {
    render(postit);
  });
};


$(document).ready(function() {
  console.log("Lets go!");
  postitTemplate = _.template($('#postit-template').html());

  postitList = new PostitList(postitData);

  postitList.on("update", function() {
    renderList(postitList);
  });

  renderList(postitList);

  $('#add-postit').click(function(event) {
    var formData = readPostitForm();
    console.log(formData);

    var postit = new Postit(formData);
    render(postit);
  });
});


// end

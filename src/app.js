import './styles/foundation.scss';
import './styles/style.css';
import './styles/colpick.css';
import _ from 'underscore';
import PostitNotes from './collections/postit_notes.js';
import PostitView from './views/postit_view.js';
import PostItListView from './views/post_it_list_view.js';

import Postit from './models/postit.js';
import 'jquery-colpick';


var postitStandins = [{
    text: "This is a test",
    color: "#AC1200"
},
{
    text: "Another Test",
    color: "#752310"
}];

$(document).ready(function() {
  $('#example-color').colpick({
            onSubmit:function(hsb,hex,rgb,el,bySetColor) {
                $(el).val('#'+hex);
                $(el).colpickHide();
            }
        });

  var postits = new PostitNotes(postitStandins);
  var postitView = new PostItListView({
    model: postits,
    template: _.template($("#postit-template").html()),
    el: 'main'
  });

  postitView.render();


});

// end

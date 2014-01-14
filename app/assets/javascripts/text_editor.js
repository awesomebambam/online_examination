window.presentElement = "";
//triggered when coming from other page
$(document).on('page:load',function(){
  //  show_wysihtml5();
  on_page_load();
});

//triggered on page refresh
$(function(){
  //  show_wysihtml5();
  on_page_load();
});

//Show tool bar
function show_tinymce_toolbar(){

  $(".container").click(function(e){show_tinymce_toolbar()})
    if (document.activeElement.nodeName == "TEXTAREA" ) {   //if activeElement is text area then show tool bar
      $(document.activeElement).addClass("mceEditor");
      tinyMCE.init({
        mode: "textareas",
      }); 
    }//if 
  presentElement = document.activeElement;
}


function hide_prev_toolbar(){
  // $(".wysihtml5-sandbox").hide()
  //$(presentElement).css('display','block');
  //if($(presentElement).data('wysihtml5'))
  //  $(presentElement).data('wysihtml5').editor.toolbar.hide();

}

function on_page_load(){
  show_tinymce_toolbar();
}

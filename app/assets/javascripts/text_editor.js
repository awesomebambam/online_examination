window.presentElement = "";
//triggered when coming from other page
$(document).on('page:load',function(){
  show_wysihtml5();
});

//triggered on page refresh
$(function(){
  show_wysihtml5();
});

//on click trigger show function 
function show_wysihtml5(){
  $(".container").click(function(e){show_wysi_toolbar()})
}

//Show tool bar
function show_wysi_toolbar(){
  if (document.activeElement.nodeName == "TEXTAREA" ) {   //if activeElement is text area then show tool bar
    $(document.activeElement).wysihtml5();
    hide_prev_toolbar()
  } 
  presentElement = document.activeElement;
}


function hide_prev_toolbar(){
 // $(".wysihtml5-sandbox").hide()
  //$(presentElement).css('display','block');
  //if($(presentElement).data('wysihtml5'))
  //  $(presentElement).data('wysihtml5').editor.toolbar.hide();

}

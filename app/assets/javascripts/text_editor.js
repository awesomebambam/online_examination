window.presentElement = "";
$(document).on('page:load',function(){ on_page_load();});
$(function(){ on_page_load();});


function on_page_load(){
 $("#no_of_options").change(function(e){ render_options() });
 $('textarea.tinymce').blur(function() { save_content()  });
 $(".container").click(function(e){show_tinymce_toolbar()});
 render_options();
 
}//on_page_load



//Show tool bar
function show_tinymce_toolbar(){

  if (document.activeElement.nodeName == "TEXTAREA" ) {   //if activeElement is text area then show tool bar
    console.log("you clicked on", document.activeElement)
//      save_content()
//      hide_prev_toolbar() 
      $(document.activeElement).addClass("mceEditor")
      tinyMCE.init({
        mode: "textareas",
//        editor_selector: "mceEditor",
        plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste save"
        ]
      }); 
  }//if 
//  presentElement = document.activeElement;
}


function hide_prev_toolbar(){
  $('div[id*="mce_"]').remove()
  debugger
  $(presentElement).css('display','block')
  console.log("done with hiding")
  $(presentElement).removeClass("mceEditor");
  var attr = $(presentElement).attr('aria-hidden');
  if (!(attr === undefined)) {
  $(presentElement).removeAttr("aria-hidden"); 
   }
  // $(".wysihtml5-sandbox").hide()
  //$(presentElement).css('display','block');
  //if($(presentElement).data('wysihtml5'))
  //  $(presentElement).data('wysihtml5').editor.toolbar.hide();
}


function save_content(){
  // $(presentElement).HTML = tinymce.get(presentElement.).getContent()
     if (tinymce.get(presentElement.id) !== undefined) {
     presentElement.innerHTML = tinyMCE.get(presentElement.id).getContent()
     }
}

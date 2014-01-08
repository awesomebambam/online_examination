$(function(){

      $('a.take-exam').click(function(e){
        e.preventDefault()
        window.open(attr('href'),'exam',"scrollbars=no");
      })

})



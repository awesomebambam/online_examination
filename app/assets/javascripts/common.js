$(function(){

      $('a.take-exam').click(function(e){
        e.preventDefault()
        window.open($(this).attr('href'),'exam',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350");
      })

})


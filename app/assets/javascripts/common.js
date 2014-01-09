var qIndex = 0;
var execute = true;

$(function(){
    
    qindex = gon.questions.length;
    renderNextQuestion(qIndex);
    console.log("In common.js");
      $('a.take-exam').click(function(e){
        e.preventDefault()
        window.open($(this).attr('href'),'exam',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350");
      })
})


   function renderNextQuestion(qIndex){
   if (execute) {     
     console.log(qIndex); 
     console.log("rendering first question");
     var title = document.getElementById("qTitle");
     var desc = document.getElementById("qDescription");
     var options = document.getElementById("questionOptions");
     title.innerHTML = gon.questions[qIndex].title;
     desc.innerHTML = gon.questions[qIndex].description;

     for ( var key in gon.questions[qIndex].options ) { 
      var radio =  document.createElement('input');
          radio.id = gon.questions[qIndex]._id.$oid;  
          radio.type = 'radio';
          radio.name = gon.questions[qIndex]._id.$oid;
          radio.value = key;
       options.appendChild(radio);
       $(options).append(' ');
       $(options).append(gon.questions[qIndex].options[key]);
       $(options).append('<br><br>');
     } // for loop ends
    execute = false; 
   }//if 
       
   } //render next question ends here 


    function nextQuestion(){
     console.log("Next Question"); 
    }

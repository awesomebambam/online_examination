window.qIndex = 0;
window.exam_started = false;
window.questionNo =0;
window.lastQuestionIndex = 0;
$(function(){
       window.qIndex = 0; 
      $('a.take-exam').click(function(e){
        e.preventDefault()
        window.open($(this).attr('href'),'exam',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350");
      })

      $('a.start-exam').click(function(e){
       renderNextQuestion(); 
      })

      lastQuestionIndex = gon.questions.length - 1;
      if(!exam_started){
      question_container =  document.getElementById("question");
      question_container.hidden = true;
      question_footer_nav =  document.getElementById("question-footer-nav");
      question_footer_nav.hidden = true;
      question_nav =  document.getElementById("question-nav");
      question_nav.hidden = true;
      qIndex = 0;
      }
    
 

});

function display_question_div(){
      question_container =  document.getElementById("question");
      question_container.hidden = false;
      question_footer_nav =  document.getElementById("question-footer-nav");
      question_footer_nav.hidden = false;
      question_nav =  document.getElementById("question-nav");
      question_nav.hidden = false;
      exam_start_button =  document.getElementById("exam-start-button");
      exam_start_button.hidden = true;

}

function renderNextQuestion(questionNo){
   if (questionNo == 0 || questionNo == -1){
   window.qIndex += 1; 
   }
  renderQuestion(window.qIndex);
}

function renderPreviousQuestion(questionNo){
  if (questionNo == 0){
   window.qIndex -= 1; 
  }
  renderQuestion(window.qIndex);
}
function renderFirstQuestion(){
    populateQuestionNavBar();
    window.qIndex = 0
    window.questionNo = 0;
    renderQuestion(0)
}
function renderQuestion(questionNo){
  debugger;
  var next_question_button = document.getElementById("next-question-button");
  var prev_question_button = document.getElementById("prev-question-button");
     if (questionNo == lastQuestionIndex)
     {
       prev_question_button.style.visibility = 'hidden'; 
      }
     else
     {  prev_question_button.style.visibility = 'visible'; 
     }
     
     if( questionNo == 0)
     {
         next_question_button.style.visibility = 'hidden';
     }else
     {
         next_question_button.style.visibility = 'visible';
     }
     window.qIndex = questionNo
     reset_divs_and_variables();
     display_question_div();
     console.log("rendering first question");
     var title = document.getElementById("qTitle");
     var desc = document.getElementById("qDescription");
     var options = document.getElementById("questionOptions");
     title.innerHTML = gon.questions[window.qIndex].title;
     desc.innerHTML = gon.questions[window.qIndex].description;

     for ( var key in gon.questions[window.qIndex].options ) { 
      var radio =  document.createElement('input');
          radio.id = gon.questions[window.qIndex]._id.$oid;  
          radio.type = 'radio';
          radio.name = gon.questions[window.qIndex]._id.$oid;
          radio.value = key;
       options.appendChild(radio);
       $(options).append(' ');
       $(options).append(gon.questions[window.qIndex].options[key]);
       $(options).append('<br><br>');
     } // for loop ends
 } //render next question ends here 

function reset_divs_and_variables(){
       
     var options = document.getElementById("questionOptions");
     options.innerHTML = "";

}//reset divs and variables ends here

function populateQuestionNavBar(){
   var button_div = document.getElementById("question-nav-button");  
   var question_no;
     for(question_no = 1;question_no <= gon.questions.length;question_no++ ){
   var buttonnode = document.createElement('input');
       buttonnode.type = 'button';  
       buttonnode.name = 'Q'+ question_no; 
       buttonnode.value = 'Q' + question_no;
       buttonnode.id = 'Q' + question_no;
       buttonnode.className = 'btn btn-danger';
       buttonnode.onclick =  onClickHandler(question_no-1); 
                     
       button_div.appendChild(buttonnode);
       $(button_div).append('<td></tr><tr><td>');
     } //for
     
}//popoulate Question Nav bar ends here 


function onClickHandler(i){
   return function(){
     renderQuestion(i);
     return false;
   };
}

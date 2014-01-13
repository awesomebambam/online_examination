window.qIndex = 0;
window.exam_started = false;
window.questionNo; 
window.lastQuestionIndex = 0;
window.answers =  {};
window.flagged = {};
window.previousQuestion = 0;
window.checkedOption = -1;

$(function(){
  qIndex = 0; 
  $('a.take-exam').click(function(e){
//               e.preventDefault()
//               window.open($(this).attr('href'),'exam',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350");
  })

//  $('a.start-exam').click(function(e){ renderNextQuestion(); })
  $('#questionOptions').click(function(e){ flag_nav_bar()  })
  $("#result-container").hide();
if(!exam_started){
  renderFirstQuestion();
  exam_started = true;
  qIndex = 0;
  }
});

//render next question
function renderNextQuestion(questionNo){
  if (questionNo == 0 || questionNo == -1) qIndex += 1;
  renderQuestion(qIndex);
}

//render previous question
function renderPreviousQuestion(questionNo){
  if (questionNo == 0) qIndex -= 1;
  renderQuestion(qIndex);
}

//render first question
function renderFirstQuestion(){
 // set_session_time(); 
  populateQuestionNavBar();
  window.lastQuestionIndex = gon.questions.length - 1;
  display_question_div();
  window.qIndex = 0;
  window.questionNo = 0;
  renderQuestion(0);
  
}

function renderQuestion(questionNo){
  window.questionNo = questionNo;
  saveAnswer();
  //Navigation keys NEXT and PREV  
  questionNo == lastQuestionIndex ? $("#next-question-button").hide() : $("#next-question-button").show();
  questionNo == 0                 ? $("#prev-question-button").hide() : $("#prev-question-button").show();
  qIndex = questionNo
    $("#questionOptions").html("");  
  $("#qTitle").html(gon.questions[qIndex].title);
  $("#qDescription").html(gon.questions[qIndex].description);
  render_radio_button(); 
  previousQuestion = qIndex;
} //render next question ends here 

function saveAnswer(){
  var  qid = gon.questions[previousQuestion]._id.$oid;
  var query = 'input\[name\=\"'+ qid + '\"\]:checked';
  gon.questions[previousQuestion].selected_option = $(query, '#questionOptions').val(); 
  answers[qid] = $(query,'#questionOptions').val();
}//saveAnswer


function showResults(){
  saveAnswer();   
  $.ajax({
    type: "POST",
    url: '/u/exam/' + gon.eid.$oid + '/answer', 
    data: {
      data: answers, 
    },
    success: function (data) {
      hide_question_div();
      var $response = $(data);
      var result_data = $response.find('#result-container').html();
      debugger;

      $('#result').append(result_data);
      $('#result').show();
    }
  });
}//show results


function flagQuestion(){
  var e = "#Q" + (questionNo+1);
  var qid = gon.questions[questionNo]._id.$oid;

  if( $(e).attr("class") == "btn btn-warning" ){
    $(e).removeClass("btn-warning btn-danger");
    answers[qid] == '-1' || answers[qid] === undefined ? $(e).addClass("btn-danger") : $(e).addClass("btn-success") 
  }else{ 
    $(e).removeClass("btn-danger btn-success");
    $(e).addClass("btn-warning");
  }

}//flag question

function flag_nav_bar(){
  var e = "#Q" + (questionNo+1);
  if($('input:radio:checked').length > 0 && $(e).attr("class") == "btn btn-danger"){      
     $(e).addClass("btn-success");
     $(e).removeClass("btn-danger");
   }
  if( $('input:radio:checked').length = 0 && (e).attr("class") == "btn btn-success"){
     $(e).addClass("btn-danger");
     $(e).removeClass("btn-success");
   }
}//flag navbar

function check_time_up(){
   
}

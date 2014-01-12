
function hide_question_div(){
  $("#question").hide();
  $("#question-footer-nav").hide();
  $("#question-nav").hide();
  $("#time-left").hide();
  $("#end-test-div").hide();
}

function display_question_div(){
  $("#question").show();
  $("#question-footer-nav").show();
  $("#question-nav").show();
  $("#exam-start-button").hide();
  $("#time-left").show();
  $("#end-test-div").show();
}

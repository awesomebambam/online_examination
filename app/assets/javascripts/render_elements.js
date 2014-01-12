function render_radio_button(){
  var options = document.getElementById("questionOptions");
  for ( var key in gon.questions[window.qIndex].options ) { 
    var radio =  document.createElement('input');
    radio.id =  key ;  
    radio.type = 'radio';
    radio.name = gon.questions[window.qIndex]._id.$oid;
    radio.value = key;
    checkedOption = answers[radio.name];
    if ( key == checkedOption )
      radio.checked = true; 

    options.appendChild(radio);
    $(options).append(' ');
    $(options).append(gon.questions[window.qIndex].options[key]);
    $(options).append('<br><br>');
  }

}//render radio button 

function onClickHandler(i){
  return function(){
    renderQuestion(i);
    return false;
  };
}//onclickhandler to avoid for loop closure


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
    //populate answers,flagged hash
    qid = gon.questions[question_no-1]._id.$oid;
    answers[qid] = '-1'
      flagged[qid] = false;
  } //for
}//popoulate Question Nav bar ends here 



function clearOptions(){
 $("input:radio").attr("checked", false);
}

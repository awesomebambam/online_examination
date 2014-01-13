class U::ExamsController < ApplicationController
  layout nil  
  layout 'exam', :except => [:answer]
  before_action :set_exam

  def take
  end

  def question
    remove_answer_from_question
    gon.eid = @exam.id
    gon.questions = @questions
    gon.start_time = Time.now;
    gon.time = @exam.time;
    session[:start_time] = Time.now;
  end

  def answer
    session[:marks] = 0.0
    @questions.each do |question|
     ( params[:data] != nil && params[:data]["#{question.id}"] == question.correct_option) ? session[:marks] += 1 : session[:marks] -= 1/3
    end 
  end

  def set_start_time
    session[:start_time] = Time.now
  end

  def remove_answer_from_question
    @questions.each do   |question|
      question.correct_option = ""
    end
  end

  private
  def set_exam
    @exam = Exam.find(params[:id])
    @questions= @exam.questions.order_by(:created_at => 'ASC')
    @qcount = @exam.questions.count
  end

end

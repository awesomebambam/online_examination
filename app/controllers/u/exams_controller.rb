class U::ExamsController < ApplicationController
  layout nil  
  layout 'exam', :except => [:answer]
  before_action :set_exam

   def take
     session[:questions] = 0
     session[:start_time] = Time.now
   end

   def question
     @qindex = params[:qindex].to_i - 1
     remove_answer_from_question
     gon.eid = @exam.id
     gon.questions = @questions
   end

   def answer
      session[:marks] = 0.0
      @questions.each do |question| 
      @qid = question.id;
       if (params[:data]["#{@qid}"] == question.correct_option)
         session[:marks] += 1
       else
         session[:marks] -= 1/3
       end
      end 
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

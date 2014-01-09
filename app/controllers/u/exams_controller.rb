class U::ExamsController < ApplicationController
   layout 'exam'

   def take
     session[:marks] = 0.0
     session[:questions] = 0
     session[:start_time] = Time.now
     @exam = Exam.find(params[:id])
     @questions = @exam.questions 
       
   end

   def question
      
     @qindex = params[:qindex].to_i - 1
     @exam = Exam.find(params[:id])
     @qcount = @exam.questions.count
     @question = @exam.questions.order_by(:created_at => 'ASC')[@qindex]
     @questions= @exam.questions
     remove_answer_from_question 
     gon.questions = @questions
   end

   def answer
      @exam = Exam.find(params[:id])
      @question = Question.find(params[:question_id])
      @answer_id = params[:question_id]
      @answer = params[@answer_id]
      @qindex = params[:qindex].to_i - 1
      @qcount = @exam.questions.count
      @question = @exam.questions.order_by(:created_at => 'ASC')[@qindex]
      
      if !@exam.time_left?(session[:start_time])
        redirect_to "/u/exam/#{@exam.id}/result", alert: "Your time is up"
        return
      end
      if @question.correct_option ==  @answer 
         session[:marks] += 1
      end

      session[:questions] += 1
      
      if @qcount == @qindex + 1
          redirect_to "/u/exam/#{@exam.id}/result"
      else
      redirect_to "/u/exam/#{@exam.id}/question/#{@qindex+2}"
      end

   end

   def result
     @exam = Exam.find(params[:id])
   end
  
    def remove_answer_from_question
     @questions.each do   |question|
      question.correct_option = ""
     end
    end

end

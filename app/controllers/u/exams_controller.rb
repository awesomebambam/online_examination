class U::ExamsController < ApplicationController
  layout nil  
  layout 'exam', :except => [:answer]

   def take
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
     @questions= @exam.questions.order_by(:created_at => 'ASC')
     remove_answer_from_question
     gon.eid = @exam.id
     gon.questions = @questions
   end

   def answer
      session[:marks] = 0.0
      @exam = Exam.find(params[:id])
      @qcount = @exam.questions.count
      @questions = @exam.questions 
      logger.info("exam id being fetched" + @exam.questions[0].id); 
   
      @questions.each do |question| 
      @qid = question.id;
       if (params[:data]["#{@qid}"] == question.correct_option)
         session[:marks] += 1
       else
         session[:marks] -= 1/3
       end
      end 
   end

   def result
     binding.pry
     @exam = Exam.find(params[:id])
   end
  
    def remove_answer_from_question
     @questions.each do   |question|
      question.correct_option = ""
     end
    end

end

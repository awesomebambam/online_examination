class QuestionsController < ApplicationController
  before_action :set_question, only: [:show, :edit, :update, :destroy]
  before_action :set_exam

  # GET /questions
  # GET /questions.json
  def index
  end

  # GET /questions/1
  # GET /questions/1.json
  def show
  end

  # GET /questions/new
  def new
    @question = Question.new()
  end

  # GET /questions/1/edit
  def edit
  end

  # POST /questions
  # POST /questions.json
  def create
    @question = @exam.questions.build(question_params)
    if @question.save
      redirect_to exam_question_path(@exam, @question), notice: 'Question was successfully created.'
    else
      render action: 'new'
    end
  end

  # PATCH/PUT /questions/1
  # PATCH/PUT /questions/1.json
  def update
    respond_to do |format|
      if @question.update(question_params)
        format.html { redirect_to exam_question_path(@exam, @question), notice: 'Question was successfully updated.' }
      else
        format.html { render action: 'edit' }
      end
      
    end
  end

  # DELETE /questions/1
  # DELETE /questions/1.json
  def destroy
    @question.destroy
    respond_to do |format|
      format.html { redirect_to exam_questions_path(@exam) }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_question
    @question = Question.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def question_params
    params.require(:question).permit(:title, :description,:correct_option)
    
    params.require(:question).tap do |whitelisted|
      whitelisted[:options] = params[:question][:options]
    end
end
  

  def set_exam
    @exam = Exam.find(params[:exam_id])
  end
end

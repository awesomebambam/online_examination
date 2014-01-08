class TestUsersController < ApplicationController
  before_action :set_test_user, only: [:show, :edit, :update, :destroy]

  # GET /test_users
  # GET /test_users.json
  def index
    @tu = User.all
    @test_users = User.all
  end

  # GET /test_users/1
  # GET /test_users/1.json
  def show
  end

  # GET /test_users/new
  def new
    @test_user = TestUser.new
  end

  # GET /test_users/1/edit
  def edit
  end

  # POST /test_users
  # POST /test_users.json
  def create
    @user = User.new
    @user.name = test_user_params["name"]
    @user.email = test_user_params["email"]
    @user.role = test_user_params["role"]
    @user.password = test_user_params["password"]
    
    respond_to do |format|
      if @user.save
        format.html { redirect_to test_users_path, notice: 'Test user was successfully created.' }
        format.json { render action: 'show', status: :created, location: @test_user }
      else
        format.html { render action: 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /test_users/1
  # PATCH/PUT /test_users/1.json
  def update
    respond_to do |format|
      if @test_user.update(test_user_params)
        format.html { redirect_to @test_user, notice: 'Test user was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @test_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /test_users/1
  # DELETE /test_users/1.json
  def destroy
    @test_user.destroy
    respond_to do |format|
      format.html { redirect_to test_users_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_user
      @test_user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_user_params
      params.require(:test_user).permit(:name, :email, :role, :password)
    end
end

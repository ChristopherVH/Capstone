class SessionsController < ApplicationController
  def new
    @user = User.new
    if current_user
      redirect_to "/#/user/#{current_user.id}"
    end
  end

  def create
   @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
   if @user
     sign_in(@user)
     redirect_to "/#/user/#{@user.id}"
   else
     flash.now[:errors] = ["Invalid username or password"]
     render :new
   end
  end

  def destroy
    if signed_in?
       sign_out
    end
    render :new
  end
end

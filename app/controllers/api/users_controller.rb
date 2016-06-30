# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  profile_url     :string
#  cover_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Api::UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(profile_url: params[:profile_url])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password, :username, :profile_url, :cover_url)
  end
end

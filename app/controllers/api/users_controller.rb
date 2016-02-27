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

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end

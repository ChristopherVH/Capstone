class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      @likes = Hash.new()
      current_user.likes.each do |like|
        @likes[like.song_id] = like
      end
      render :show
    else
      render json: "Please sign in"
    end
  end
end

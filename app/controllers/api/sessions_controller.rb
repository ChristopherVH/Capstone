class Api::SessionsController < ApplicationController
  def show
    @user = current_user
    @likes = Hash.new()
    current_user.likes.each do |like|
      @likes[like.song_id] = like
    end
    render :show
  end
end

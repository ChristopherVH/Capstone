# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  song_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::LikesController < ApplicationController
  before_action :require_signed_in!

  def create
   like = current_user.likes.new(song_id: params[:song_id])

   if like.save
     @song = like.song
   else
     render json: like.errors.full_messages
   end
  end

  def destroy
   like = current_user.likes.find_by(song_id: params[:song_id])

   if like
     like.destroy
     @song = like.song
   else
     render json: "You cannot unlike this"
   end
  end

  private
  def song_params
    params.require(:song).permit(:song_id)
  end
end

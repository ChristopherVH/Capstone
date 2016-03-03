class Api::PlaylistSongsController < ApplicationController
  def create
   @playlistsong = PlaylistSong.new(song_id: params[:song_id], playlist_id: params[:playlist_id], ord: params[:ord])
   if @playlistsong.save
     render json: "added"
   else
     render json: @playlistsong.errors.full_messages
   end
  end

  def update
    @playlistsong = PlaylistSong.find(params[:id])
    if @playlistsong && @playlistsong.update(playlist_song_params)
      render json: "updated"
    else
      render json: "This playlist song cannot be updated by you"
    end
  end

  def destroy
   @playlistsong = PlaylistSong.find(params[:id])

   if @playlistsong
     PlaylistSong.destroy(params[:id])
     render json: "deleted"
   else
     render json: "You cannot remove this playlist song"
   end
  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id,:song_id,:ord)
  end
end

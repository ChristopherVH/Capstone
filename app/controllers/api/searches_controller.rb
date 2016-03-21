class Api::SearchesController < ApplicationController
  def index
    @users = User.search(params[:searchTerm].downcase)
    @playlists = Playlist.search(params[:searchTerm].downcase)
    @songs = Song.search(params[:searchTerm].downcase)
    render :index
  end

end

class Api::SearchesController < ApplicationController
  def index
    @users = User.search(params[:searchTerm])
    @playlists = Playlist.search(params[:searchTerm])
    @songs = Song.search(params[:searchTerm])
    render :index
  end

end

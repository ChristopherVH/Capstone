class Api::PlaylistsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :destroy, :update]

  def create
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destroy
    @playlist = Playlist.find_by(params[:id])
    if @playlist.user_id == current_user.id && @playlist.destroy
      render :index
    else
      render json: "This playlist cannot be deleted by you"
    end
  end

  def update
    @playlist = Playlist.find_by(params[:id])
    if @playlist.user_id == current_user.id && @playlist.update
      render :show
    else
      render json: "This song cannot be updated by you"
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def index
    @user = User.find_by(id: params[:user_id])
    if @user
      @playlists = @user.playlists
    else
      @playlists = Playlist.order(created_at: :desc)
    end
  end

  private
  def playlist_params
    params.require(:song).permit(:title, :description)
  end
end

# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ActiveRecord::Base
  validates :ord, :playlist_id, :song_id, presence: true
  validates :song_id, uniqueness: { scope: :playlist_id }
  validates :ord, uniqueness: { scope: :playlist_id }
  belongs_to :playlist
  belongs_to :song
end

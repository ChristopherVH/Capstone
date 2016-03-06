# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  artist     :string           not null
#  genre      :string           not null
#  image_url  :string
#  audio_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ActiveRecord::Base
  validates :user_id, :title, :artist, :genre, :audio_url, presence: true
  belongs_to :user
  has_many :likes
  has_many :likers, through: :likes, source: :user

  def self.search(query)
    where("title like ?", "%#{query}%").limit(5)
  end

end

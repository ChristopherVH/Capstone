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

class Like < ActiveRecord::Base
  validates :user_id, :song_id, presence: true
  validates :user_id, uniqueness: { scope: :song_id }
  belongs_to :user
  belongs_to :song
end

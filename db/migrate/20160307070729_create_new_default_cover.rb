class CreateNewDefaultCover < ActiveRecord::Migration
  def change
    change_column_default(:users, :cover_url, 'https://images.unsplash.com/reserve/qw4JvEnzT3iyU1HR9Ed5_DSC02436.jpg')
  end
end

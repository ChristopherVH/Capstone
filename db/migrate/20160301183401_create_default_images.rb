class CreateDefaultImages < ActiveRecord::Migration
  def change
    change_column_default(:songs, :image_url, 'http://www.lovespirals.com/wp-content/themes/soundcheck212/images/default-artwork.png')
    change_column_default(:users, :profile_url, 'http://cutepuppypictures.net/wp-content/uploads/2013/03/cute-samoyed-puppy_thumb.jpg')
    change_column_default(:users, :cover_url, 'http://www.timelinecoverbanner.com/facebook-covers/2013/02/above-clouds.jpg')
  end
end

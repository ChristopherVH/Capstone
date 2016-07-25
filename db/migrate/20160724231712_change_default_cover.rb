class ChangeDefaultCover < ActiveRecord::Migration
  def change
    change_column_default(:users, :cover_url, 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto/v1469403690/cloudssws_aebiir.jpg')
  end
end

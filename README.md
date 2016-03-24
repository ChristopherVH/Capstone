# NimbusPlaylist

Link to live site: [NimbusPlaylist][heroku]

[heroku]: nimbusplaylist.herokuapp.com

---

NimbusPlaylist is a single-page web app inspired by Soundcloud, where users can create a profile, explore songs from various artists, create playlists, and like songs.

# Features

- Hand rolled user authentication

Utilizing BCrypt's methods to hash and salt sensitive user information I was able to create a secure rails-side auth that also passes current user information to a Flux store to communicate wether a user has been logged in or not.
![sign_in]

- Error messages

Users have the ability to play any songs and view profiles without needing an account, error messages appear if user-type actions are attempted while not logged in.

![errors]

- Search

Each searchable model contains a special method that uses active-record to do a case insensitive query for a maximum of 5 results of each respective search item.

![search]

- Personal feed

Each time any user-associated element is created (ie like or playlist) it updates the users feed in real time, putting the most recently created element at the top of the feed.

![profile]
- Splash page

Each song has a like association from which we can judge which songs are currently "trending" based on the number of likes, here they are displayed within the feed in descending order.

![front_page]

# Built using

- React
- Flux
- Rails
- Jbuilder
- Bcrypt
- Bootstrap
- Heroku



[sign_in]: ./docs/readme_photos/sign_in.png
[errors]: ./docs/readme_photos/error_message.png
[search]: ./docs/readme_photos/search.png
[profile]: ./docs/readme_photos/profile.png
[front_page]: ./docs/readme_photos/front_page.png

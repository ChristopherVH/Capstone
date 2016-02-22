# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: https://enigmatic-escarpment-61315.herokuapp.com/

## Minimum Viable Product

NimbusPlaylist is a web application inspired by Soundcloud built using Ruby on Rails
and React.js. NimbusPlaylist allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Play songs using the embedded media player at the bottom of the page
- [ ] Be able to like songs
- [ ] Create, read, edit, and delete playlists
- [ ] Have separate page for double click on album or song
- [ ] Use queue and loop features within the media player

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after sign in

### Phase 2: Song Model, API, and basic APIUtil (2 days)

**Objective:** Play & like songs using the embedded media player at the bottom of the page.

- [ ] create `Song` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Songs (`SongsController`)
- [ ] jBuilder views for songs
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days)

**Objective:** Songs can be Liked, Played, and added to playlist with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each Song component, building out the flux loop as needed.
  - [ ] `SongIndex`
  - [ ] `SongIndexItem`

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Playlists (1 day)

**Objective:** Songs belong to playlists, and can be viewed by User.

- [ ] create `PlayList` model
- build out API, Flux loop, and components for:
  - [ ] Playlist CRUD
  - [ ] adding Songs requires a Playlist
  - [ ] moving Songs to a different Playlist
  - [ ] viewing Songs by Playlist
- Use CSS to style new views


### Phase 6: Tags (1.5 days)

**Objective:** Songs can be tagged by genre, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for Songs
  - [ ] searching Songs by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Songs (0.5 days)

**objective:** Enable complex styling of songs.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Add following and unfollowing of users
- [ ] Pagination / infinite scroll for collection
- [ ] Be able to add comments to songs
- [ ] Upload audio files

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

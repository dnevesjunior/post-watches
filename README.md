# Post Watches

Project with Ruby on Rails / React to show posts and an external API with news related to watches

The project was accompanied by a Trello table, which includes details on tasks and PRs related to each one. You can have a look [here](https://trello.com/b/uZ5NzqaO/postwatches)

## Development

### Local environment

You can run the application by following these steps:

You will need Ruby 2.7 and PostgreSQL installed

1. Install bundler: `gem install bundler`

2. Install remaining dependencies: `bundle install`

3. Run `bundle exec rails db:setup` to create the database and seed it on development

4. Run `yarn` to install javascript dependencies

5. Run `bundle exec rails server` to start the server

You can change database settings on `/config/database.yml`

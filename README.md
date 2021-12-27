# Ruby on Rails 6 API + React + Docker Jumpstart

\** A starter app to help people create the Rails+React monolith with independent projects Rails is in *backend* folder and React in *frontend\* folder.

- [Ruby](https://www.ruby-lang.org/en/) 2.7.3
- [Rails](https://rubyonrails.org/) 6.0.2
- [React.js](https://reactjs.org/) 16.13.1
- [NodeJS] (https://nodejs.org/es/blog/release/v16.0.0/) 16.0.0
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation & serve - 5 steps, 4 cmds. ##

## All cmds from root folder of repo, NOT inside frontend or backend folders ##

1. $ git clone https://github.com/xhostcom/symmetrical-rails-6-react-docker.git

## Setup from repo root  ##

2. $ docker-compose run frontend yarn
3. $ docker-compose run backend rake db:create

## Start  ##

4. $ docker-compose up -d (then repeat without -d)

## Serve ##

5. Browser = http://localhost:3000

## More Details  ##

### Backend ###

The combination, Rails + PostgreSQL + Docker Compose, is derived from this work [Rails-React-TypeScript-Docker](https://github.com/ohbarye/rails-react-typescript-docker-example/) updated and fixed to have the essentials to build on..

### Frontend  ###

Bootstrapped with _create-react-app_

## Author

Paul Anthony McGowan - xhostcom@gmail.com

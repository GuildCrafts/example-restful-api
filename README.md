# Example RESTful API

Example RESTful API app using PostgreSQL + Node.js/Express.

It is a loose implementation of a Quora clone called **Kwora**.

## Ways to Use this Repo

- Practice writing routes
- Practice interacting with an API
- As a backend to build a web UI on top of

Other things you could do:

- Extend the existing database => add more columns/tables to your database to support more complext data modeling
- Migrate to a different tool/library/framework => pick a different library (like `knex` for SQL queries) and update the code to use this library

## Getting Started

1. Clone this repo
2. Install all npm packages

    ```
    $ npm install
    ```
3. Create database, update schemas, add seed data (optional)

    ```
    $ npm run db:create
    ...
    $ npm run db:schema
    ...
    $ npm run db:seed
    ...
    ```

4. Start the server

    ```
    $ npm start
    ```

To see other available commands, use `$ npm run` or read the `package.json` file.

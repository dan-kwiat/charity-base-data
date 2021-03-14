# CharityBase Data

## Initialising the Database

This script creates the CharityBase relational database with empty tables.

### Requirements

- [MySQL v8+](https://www.mysql.com)
- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Installing

```bash
yarn
cp .env-example .env
```

### Creating database

First, update the variables in `.env`, then:

```bash
yarn create-db # Estimated runtime: 1 second
```

### Creating tables

```bash
yarn knex migrate:latest # Estimated runtime: 3 seconds
```

### Dropping database

```bash
yarn drop-db # Estimated runtime: 1 second
```

### Creating a new migration

```bash
yarn knex migrate:make YOUR_MIGRATION_NAME
```

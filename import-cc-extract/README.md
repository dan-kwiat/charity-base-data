# CharityBase Data: Importing CC Data

This script imports the Charity Commission's .bcp files into a MySQL database.

### Requirements

- [MySQL v8+](https://www.mysql.com)
- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Before Importing Data

- [charity-base-data/init-db](../init-db)
- [charity-base-data/download-cc-extract](../download-cc-extract)

### Installing

```bash
yarn
cp .env-example .env
```

### Importing data

First, update the variables in `.env`, then:

```bash
yarn import-cc # Estimated runtime: 2 minutes
```

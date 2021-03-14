# CharityBase Data: Importing CC-provided CSV

Contains activities & number of people fields.

### Requirements

- [MySQL v8+](https://www.mysql.com)
- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Installing

```bash
yarn
cp .env-example .env
```

### Importing Data

First, update the variables in `.env`, then:

```bash
yarn import-cc-csv-file # Estimated runtime: 2 minutes
```

# CharityBase Data: Transforming to a Document Database

### Requirements

- [MySQL v8+](https://www.mysql.com)
- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

Before running this script the database must be initiated and all the data
import scripts run (see the [other directories](../) in this repository for
instruction).

### Installing

```bash
yarn
cp .env-example .env
```

### Writing components to charity_json & filter_json tables

First, update the variables in `.env`.

```bash
yarn transform-db # Estimated runtime: 38 minutes
```

Or just charity documents:

```bash
yarn transform-db:charity # Estimated runtime: 32 minutes
```

Or just filter documents:

```bash
yarn transform-db:filter # Estimated runtime: 6 minutes
```

Or all sub-processes individually:

```bash
# Charity
yarn transform-db:charity:main # Estimated runtime: 2 minutes (must come before other methods)
yarn transform-db:charity:area # Estimated runtime: 3 minutes
yarn transform-db:charity:category # Estimated runtime: 3 minutes
yarn transform-db:charity:finance # Estimated runtime: 4 minutes
yarn transform-db:charity:grant # Estimated runtime: 1 minute
yarn transform-db:charity:name # Estimated runtime: 4 minutes
yarn transform-db:charity:objective # Estimated runtime: 4 minutes
yarn transform-db:charity:postcode # Estimated runtime: 5 minutes
yarn transform-db:charity:registration # Estimated runtime: 3 minutes
yarn transform-db:charity:social # Estimated runtime: 1 minute
yarn transform-db:charity:topic # Estimated runtime: 2 minutes
# Filter
yarn transform-db:filter:area # Estimated runtime: 1 second
yarn transform-db:filter:category # Estimated runtime: 1 second
yarn transform-db:filter:funder # Estimated runtime: 4 seconds
yarn transform-db:filter:id # Estimated runtime: 1 minute
yarn transform-db:filter:topic # Estimated runtime: 1 second
yarn transform-db:filter:trustee # Estimated runtime: 5 minutes
```

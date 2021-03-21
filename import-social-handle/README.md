# CharityBase Data: Scraping Social Media Handle from Charity Websites

Extracts twitter, facebook & instagram handles from charity websites. Also
cleans the charity website field in the CC table.

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
yarn import-social-handles # Estimated runtime: 6 hours
```

You may want to play around with the offset & timeout env vars:

```bash
OFFSET=0
REQUEST_TIMEOUT=5000
```

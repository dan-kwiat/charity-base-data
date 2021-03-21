# CharityBase Data: Downloading GrantNav CSV File

This script downloads data from https://grantnav.threesixtygiving.org/developers

### Requirements

- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Installing

```bash
yarn
cp .env-example .env
```

### Downloading GrantNav Data

First, update the variables in `.env`, then:

```bash
yarn download-grantnav # Estimated runtime: 3 minutes
```

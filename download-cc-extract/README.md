# CharityBase Data: Downloading CC BCP Files

This script downloads and unzips Charity Commission data from
https://register-of-charities.charitycommission.gov.uk/register/full-register-download

### Requirements

- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

### Installing

```bash
yarn
cp .env-example .env
```

### Downloading & Unzipping CC data

First, update the variables in `.env`, then:

```bash
yarn download-cc # Estimated runtime: 1 minute
```

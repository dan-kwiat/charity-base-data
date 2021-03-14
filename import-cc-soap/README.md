# CharityBase Data: Importing Data from CC SOAP API

This script imports trustee information from the
[Charity Commission SOAP API](https://apps.charitycommission.gov.uk/Showcharity/API/SearchCharitiesV1/Docs/DevGuideHome.aspx).

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
yarn import-cc-soap # Estimated runtime: 2 hours
```

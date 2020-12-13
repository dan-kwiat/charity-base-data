# CharityBase Data

## Importing Profile Images from Social Media

This fetches the logos (in three different sizes) of about 40,000 charities, uploads them to S3 and saves the file locations to the database.

### Requirements

- [MySQL v8+](https://www.mysql.com)
- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

Before running this script the database must be initiated and social media handles imported (see the [other directories](../) in this repository for instruction).

### Installing

- `yarn`
- `cp .env-example .env` and update the variables in `.env`

### Importing Data

- `yarn import-social-avatars`

Estimated runtime: 3 hrs.

### AWS Credentials

The IAM user (defined by S3_ACCESS_KEY_ID env var) should have the following access management policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:PutObjectAcl",
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucketMultipartUploads",
        "s3:AbortMultipartUpload",
        "s3:GetObjectTagging",
        "s3:ListBucket",
        "s3:PutObjectTagging",
        "s3:DeleteObject",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": [
        "arn:aws:s3:::charity-base-uk-downloads/*",
        "arn:aws:s3:::charity-base-uk-images/*",
        "arn:aws:s3:::charity-base-uk-downloads",
        "arn:aws:s3:::charity-base-uk-images"
      ]
    }
  ]
}
```

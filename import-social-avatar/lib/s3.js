const AWS = require("aws-sdk")

const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_REGION } = process.env

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  region: S3_REGION,
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
})

module.exports = s3

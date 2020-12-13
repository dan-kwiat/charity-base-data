const s3 = require("./lib/s3")
const log = require("./lib/logger")

const { S3_BUCKET, S3_PATH } = process.env

const upload = async ({ id, size, body }) => {
  try {
    const bucket = S3_BUCKET
    const key = `${S3_PATH}/${size}/${id}`

    await s3
      .upload({
        ACL: "public-read",
        Bucket: bucket,
        Key: key,
        Body: body,
      })
      .promise()

    return {
      id,
      size,
      bucket,
      key,
    }
  } catch (e) {
    log.error(`Failed to upload image: '${id}'`)
    log.error(e)
    return null
  }
}

module.exports = upload

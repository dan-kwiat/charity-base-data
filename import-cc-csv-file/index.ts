require("dotenv").config()
const streamBatchPromise = require("stream-batch-promise")
const getProgressBar = require("./lib/progress")
const log = require("./lib/logger")
const fs = require("fs")
const csv = require("csv-parser")

const NUM_CHARITIES_ESTIMATE = 169500

const {
  BATCH_SIZE,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  TABLE_MAIN_CHARITY,
  CSV_FILE,
} = process.env

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  // debug: true,
})

const PROGRESS_BAR = getProgressBar("Progress")

interface CharityFields {
  id
  charityNumber
  name
  activities
  trustees
  fyEnd
  volunteers
  employees
}

const updateCharities = (arr: Array<CharityFields>, count) => {
  PROGRESS_BAR.update(count)

  return knex.transaction((trx) => {
    const updateQueries = arr.map(
      ({ charityNumber, activities, employees, volunteers, trustees }) => {
        return knex(TABLE_MAIN_CHARITY)
          .where({ regno: charityNumber })
          .update({
            activities,
            people: JSON.stringify({ employees, volunteers, trustees }),
          })
          .transacting(trx)
      }
    )
    return Promise.all(updateQueries).then(trx.commit).catch(trx.rollback)
  })
}

const filePath = (fileName) => {
  return [__dirname, fileName].join("/")
}

const f = async () => {
  try {
    log.info(
      `Inserting activites & people counts from file '${CSV_FILE}' into table '${TABLE_MAIN_CHARITY}'`
    )

    PROGRESS_BAR.start(NUM_CHARITIES_ESTIMATE, 0)

    const readFile = fs
      .createReadStream(filePath(CSV_FILE))
      .on("error", (e) => {
        throw e
      })
    const csvToJson = csv({
      separator: ",",
      headers: [
        "id", // this is CC's internal ID (sometimes same as charityNumber)
        "charityNumber",
        "name",
        "activities",
        "trustees",
        "fyEnd",
        "volunteers",
        "employees",
      ],
      mapValues: ({ value }) => {
        if (!value || value === "NULL") {
          return null
        }
        return value
      },
    }).on("error", (e) => {
      throw e
    })

    await streamBatchPromise(readFile.pipe(csvToJson), updateCharities, {
      batchSize: parseInt(BATCH_SIZE),
    })

    PROGRESS_BAR.stop()
    await knex.destroy()
  } catch (e) {
    log.error(e)
    process.exit()
  }
}

f()

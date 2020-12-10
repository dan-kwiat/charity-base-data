const TABLE_SOCIAL = "social"

exports.up = async function (knex) {
  await knex.schema.alterTable(TABLE_SOCIAL, (table) => {
    table.string("instagram", 30)
  })
}

exports.down = async function (knex) {
  await knex.schema.alterTable(TABLE_SOCIAL, (table) => {
    table.dropColumn("instagram")
  })
}

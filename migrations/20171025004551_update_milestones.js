
exports.up = function(knex, Promise) {
    return knex.schema.table('milestones', function (t) {
        t.integer('famous_person_id').notNull().references('id').inTable('famous_people');
        // .onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('milestones', function(table){
            table.dropColumn('famous_person_id');
        })
      ])
};

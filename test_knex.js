/*
  LHL w4d2 exercises
  20171024 DM - testing knex
*/

console.log(process.argv);

//const pg = require("pg");
const settings = require("./settings"); // settings.json

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});


//console.log(knex);
// knex.select().from('famous_people').timeout(1000);
//knex.select().from('famous_people').timeout(1000);

knex.select()
  .from('famous_people')
  .where('first_name', process.argv[2])
  .orWhere('last_name', process.argv[2])
  .then(function(rs) {
    console.log(rs);
})


knex.destroy();
//var pg = require('knex')({client: 'pg'});
//pg('famous_people').select().from('famous_people').timeout(1000);

/*
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT id, first_name, last_name, TO_CHAR(birthdate, 'YYYY-MM-DD') as birthdate FROM famous_people WHERE first_name = $1::varchar OR last_name = $1::varchar", [process.argv[2]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    //console.log(result.rows[0].first_name); //output: 1
    let strMsg = '';
    strMsg += `- ${result.rows[0].id}:`;
    strMsg += `${result.rows[0].first_name} ${result.rows[0].last_name}, `;
    strMsg += `born '${result.rows[0].birthdate}'`;

    console.log(strMsg);
    client.end();
  });
});
*/
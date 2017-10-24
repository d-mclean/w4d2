/*
  LHL w4d2 exercises
  20171024 DM - testing knex, adding a record to famous_people via argvs.
*/
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

/*
[ '/home/vagrant/.nvm/versions/node/v6.9.5/bin/node',
  '/vagrant/w4d2/add_person.js',
  'FirstNameTester',
  'LastNameTester',
  '1987-10-24' ]
  */

knex.insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]}).into('famous_people')
.then(function (id){
console.log(id)});

console.log(process.argv);
knex.destroy();
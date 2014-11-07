const config = require('../../knexfile');
const envConfig = config.development;

console.log('Connecting to '+ envConfig.client + ' at ' + envConfig.connection.filename + '...');

const knex = require('knex')(envConfig);
const bookshelf = require('bookshelf')(knex);

console.log('Running migrations...');
knex.migrate.latest(config);

module.exports = bookshelf;

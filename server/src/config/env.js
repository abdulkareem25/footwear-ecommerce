const dotenv = require('dotenv');

const envFile = `.env.${process.env.NODE_ENV}`;

dotenv.config({ path: envFile });

module.exports = process.env;
const redis = require('ioredis');

const client = new redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

client.on('connect', () => {
  console.log("Redis client connected");
});

client.on('error', (err) => {
  console.error("Redis client error:", err);
});

module.exports = client;
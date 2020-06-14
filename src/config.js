module.exports = {
  port: 8080,
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
  },
};

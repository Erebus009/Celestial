const db = require('../config/connection');
const { Picture } = require('../models');
const imageSeeds = require('./imageSeeds.json');

db.once('open', async () => {
  try {
    await Picture.deleteMany({});
    await Picture.create(imageSeeds);

    console.log(' Database seeded!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

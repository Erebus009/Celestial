const db = require('../config/connection');
const { Picture } = require('../models');
const imageSeeds = require('./imageSeeds.json');

db.once('open', async () => {
  try {
    await Picture.deleteMany({});
    await Picture.create(imageSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
